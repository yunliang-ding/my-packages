import { CopyToClipboard } from '@yl-d/design';
import { IconCopy } from '@yl-d/icon';
import { useRef } from 'react';
import CodeEditor from '..';
import './index.less';

interface HighlightProps {
  value?: string;
  language?: string;
  [key: string]: any;
}

export default ({ value, language }: HighlightProps) => {
  const preRef = useRef<HTMLDivElement>();
  const divRef = useRef<HTMLDivElement>();
  return (
    <div className="monaco-component monaco-editor-syntax-highlight">
      <div className="monaco-editor-syntax-highlight-header">
        <CopyToClipboard text={value} message>
          <IconCopy style={{ color: '#aaa' }} />
        </CopyToClipboard>
      </div>
      <div className="monaco-editor-syntax-highlight-body" ref={preRef}>
        <pre
          style={{
            padding: '0 10px',
            color: '#e1e0e3',
            fontWeight: '600',
            fontSize: 12,
            margin: 0,
          }}
        >
          {value}
        </pre>
      </div>
      <div
        className="monaco-editor-syntax-highlight-body"
        ref={divRef}
        style={{ display: 'none' }}
      >
        <CodeEditor
          value={value}
          onLoad={() => {
            divRef.current.style.display = 'block';
            preRef.current.style.display = 'none';
          }}
          language={
            ['ts', 'js', 'tsx', 'jsx'].includes(language)
              ? 'javascript'
              : language
          }
          minimapEnabled={false}
          style={{ height: value.split('\n').length * 18 }}
          scrollBeyondLastLine={false}
          lineNumbers="off"
          folding={false}
          scrollbar={{
            handleMouseWheel: false,
          }}
          contextmenu={false}
          hover={{
            enabled: false,
          }}
          readOnly
        />
      </div>
    </div>
  );
};
