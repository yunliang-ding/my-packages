import { CodeEditor, CodeProps } from '../index';
import debounce from 'lodash.debounce';
import { useEffect, useRef } from 'react';

export default ({
  value = '',
  onChange = () => {},
  codeRef = useRef({}),
  ...rest
}: CodeProps) => {
  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  useEffect(() => {
    Object.assign(codeRef.current, {
      getCssCode: async () => {
        if ((window as any).less) {
          const { css } = await (window as any).less.render(valueRef.current);
          return css;
        }
        console.error('请引入less.js后使用');
        return '';
      },
    });
  }, []);
  return (
    <CodeEditor
      minimapEnabled={false}
      {...rest}
      codeRef={codeRef}
      value={value}
      language="less"
      onChange={debounce((code: string) => {
        onChange(code);
        valueRef.current = code; // 同步文本
      }, 300)}
    />
  );
};
