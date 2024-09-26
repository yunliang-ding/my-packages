import { wireTmGrammars } from 'monaco-editor-textmate';
import { loadWASM } from 'onigasm';
import { Registry } from 'monaco-textmate';
import covertTheme from './convert-theme';
import lightPlus from './theme/light-plus.json';
// import darkPlus from './theme/dark-plus.json';
import darkPlus from './theme/one-dark-pro.json';

const OssUrl = 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/monaco';

let hasLoadOnigasm = false;

const grammarsCache = {};

export const loadVscodeTheme = async (monaco, editor, language) => {
  // 加载onigasm的WebAssembly文件
  if (!hasLoadOnigasm) {
    hasLoadOnigasm = true;
    await loadWASM(`${OssUrl}/onigasm/onigasm.wasm`);
  }
  const grammars = new Map();
  grammars.set(
    language,
    {
      css: 'source.css',
      html: 'text.html.basic',
      json: 'source.json',
      less: 'source.css.less',
      typescript: 'source.ts',
      javascript: 'source.js',
      // typescriptreact: 'source.ts.tsx',
      // javascriptreact: 'source.js.jsx',
    }[language],
  );
  // 创建一个注册表，可以从作用域名称创建语法
  const registry = new Registry({
    getGrammarDefinition: async (scopeName: string) => {
      const path = {
        'text.html.basic': 'html.tmLanguage.json',
        'source.css': 'css.tmLanguage.json',
        'source.css.less': 'less.tmLanguage.json',
        'source.json': 'JSON.tmLanguage.json',
        'source.ts': 'TypeScript.tmLanguage.json',
        'source.js': 'JavaScript.tmLanguage.json',
        // 'source.js.jsx': 'JavaScriptReact.tmLanguage.json',
        // 'source.ts.tsx': 'TypeScriptReact.tmLanguage.json',
      }[scopeName];
      let content = grammarsCache[path];
      if (content === undefined) {
        grammarsCache[path] = await (
          await fetch(`${OssUrl}/grammars/${path}`)
        ).text();
        content = grammarsCache[path];
      }
      return path
        ? {
            format: 'json',
            content,
          }
        : null;
    },
  } as any);
  // 注册
  monaco.languages.register({ id: language });
  // 重新覆盖主题
  monaco.editor.defineTheme('vs-dark', covertTheme(darkPlus));
  monaco.editor.defineTheme('vs', covertTheme(lightPlus));
  setTimeout(() => {
    wireTmGrammars(monaco, registry, grammars, editor);
  }, 100);
};
