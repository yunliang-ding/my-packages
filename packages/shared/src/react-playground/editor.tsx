import { useRef, useState } from 'react';
import Tabs from './tabs';

export default ({
  tabs,
  code,
  sourceCode,
  setReload,
  require,
  updateRequire,
  showLogo = false,
}) => {
  const {
    yldCodeEditor: { CodeEditor },
  } = window as any;
  const refArr = tabs.map(() => useRef({}));
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div
      className="monaco-component show-file-icons"
      style={{ width: '100%', height: '100%', background: 'var(--vscode-editorWidget-background)' }}
    >
      {showLogo && (
        <span
          style={{
            color: 'var(--vscode-icon-foreground)',
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            height: 35,
            width: 100,
            overflow: 'hidden',
          }}
        >
          <svg
            viewBox="0 0 1024 1024"
            width="18"
            height="18"
          >
            <path
              d="M746.222933 102.239573l-359.799466 330.820267L185.347413 281.4976 102.2464 329.864533l198.20544 182.132054-198.20544 182.132053 83.101013 48.510293 201.076054-151.558826 359.799466 330.676906 175.527254-85.251413V187.4944z m0 217.57952v384.341334l-255.040853-192.177494z"
              fill="#9852f9"
            ></path>
          </svg>
          <i style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 10 }}>
            PLAYGROUND
          </i>
        </span>
      )}
      <Tabs
        tabs={tabs}
        style={{ paddingLeft: showLogo ? 100 : 0 }}
        selectedTab={selectedTab}
        onClick={(tab: string) => {
          setSelectedTab(tab);
        }}
      />
      {tabs.map((tab, index) => {
        return (
          <CodeEditor
            codeRef={refArr[index]}
            require={{
              ...require,
              ...updateRequire,
            }}
            style={{
              display: tab === selectedTab ? 'block' : 'none',
              height: 'calc(100% - 35px)',
            }}
            value={String(
              index === 0 ? code.value : sourceCode.value[tab],
            ).replace(/\n$/, '')}
            debounceTime={500}
            onChange={(value: string, parseResult: any) => {
              if (index === 0) {
                code.value = value;
              } else {
                try {
                  updateRequire[tab] = parseResult;
                } catch (error) {
                  console.log('onChangeError', error);
                }
              }
              setReload(Math.random()); // render
            }}
            mode="function"
          />
        );
      })}
    </div>
  );
};
