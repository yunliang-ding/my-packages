/* eslint-disable @typescript-eslint/no-var-requires */
const chokidar = require('chokidar');
const chalk = require('chalk');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const { externalGlobalPlugin } = require('esbuild-plugin-external-global');

const runEsmBuild = () => {
  build({
    target: 'esnext',
    format: 'esm',
    platform: 'browser',
    outdir: 'www/dev/esm',
    // outdir: '../project/packages/code-playground/www/dev/esm',
    bundle: true,
    minify: true,
    logLevel: 'info',
    entryPoints: ['packages/code-editor/src/index.ts'],
    plugins: [
      lessLoader(),
      externalGlobalPlugin({
        react: 'window.React',
        'react-dom': 'window.ReactDOM',
      }),
    ],
  });
};

/** 监听 src 文件改动 */
const watcher = chokidar.watch(['packages/code-editor/src/**/*'], {
  ignored: /node_modules/,
  ignoreInitial: true,
});
watcher.on('change', async (file) => {
  console.log(chalk.green(`  file change. ${file}`));
  runEsmBuild();
});
watcher.on('add', async (file) => {
  console.log(chalk.green(`  file change. ${file}`));
  runEsmBuild();
});
runEsmBuild();
