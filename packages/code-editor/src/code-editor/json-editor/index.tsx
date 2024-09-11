/* eslint-disable @iceworks/best-practices/recommend-polyfill */
import { CodeEditor, CodeProps } from '../index';
import debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from 'react';
import './index.less';

export default ({
  value,
  onChange = () => {},
  style = { height: 300 },
  codeRef = useRef({}),
  ...rest
}: CodeProps) => {
  const [errorInfo, setErrorInfo] = useState('');
  const valueRef = useRef(JSON.stringify(value, null, 2));
  useEffect(() => {
    valueRef.current = JSON.stringify(value, null, 2);
  }, [value]);
  useEffect(() => {
    Object.assign(codeRef.current, {
      getJson2Object: () => {
        return JSON.parse(valueRef.current.replaceAll?.('\n', ''));
      },
    });
  }, []);
  return (
    <div className="json-data-box" style={style}>
      {errorInfo && <div className="json-data-error-info">{errorInfo}</div>}
      <CodeEditor
        minimapEnabled={false}
        {...rest}
        codeRef={codeRef}
        value={JSON.stringify(value, null, 2)}
        language="json"
        onChange={debounce((code: string) => {
          try {
            const options = JSON.parse(code.replaceAll?.('\n', ''));
            valueRef.current = code;
            onChange(options);
            setErrorInfo('');
          } catch (error) {
            setErrorInfo(error.toString());
          }
        }, 300)}
      />
    </div>
  );
};
