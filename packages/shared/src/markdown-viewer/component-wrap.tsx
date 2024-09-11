import { useMemo, useState } from 'react';
import { IconCode } from '@yl-d/icon';
import { Tabs, Tooltip } from '@yl-d/design';
import SyntaxHighlight from './syntax-highlight';
import babelParse from '../babel-parse';

export default ({
  style = {},
  extraRender,
  code,
  source = {},
  expand = false,
  require,
}) => {
  const needSource = {};
  const [expandCode, setExpandCode] = useState(expand);
  const tabs = useMemo(() => ['index.tsx'], []);
  const Comp = useMemo(() => {
    return babelParse({
      code,
      require,
      onRequire: (requireName: string) => {
        if (requireName.endsWith('.ts') || requireName.endsWith('.tsx')) {
          if (!tabs.includes(requireName)) {
            tabs.push(requireName);
            needSource[requireName] = source[requireName];
          }
        }
      },
    });
  }, []);
  let VNode = null;
  try {
    VNode = Comp();
  } catch (error) {
    VNode = <pre style={{ color: 'red', margin: 0 }}>{String(error)}</pre>;
  }
  return (
    <div className="markdown-viewer-code-wrap">
      <div className="markdown-viewer-code-wrap-body" style={style}>
        {VNode}
      </div>
      <div className="markdown-viewer-code-wrap-extra">
        <Tooltip title="查看代码">
          <IconCode
            hover
            onClick={() => {
              setExpandCode(!expandCode);
            }}
          />
        </Tooltip>
        {extraRender({ tabs, code })}
      </div>
      {expandCode && (
        <div className="markdown-viewer-code-wrap-footer">
          <Tabs
            tabs={tabs.map((tab, index) => {
              return {
                key: tab,
                label: tab,
                content: (
                  <SyntaxHighlight
                    code={index === 0 ? code : source[tab]}
                    language="jsx"
                  />
                ),
              };
            })}
          />
        </div>
      )}
    </div>
  );
};
