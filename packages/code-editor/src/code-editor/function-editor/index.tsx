import { CodeEditor, CodeProps } from '../index';
import debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from 'react';
import { decrypt, encrypt } from '../../index';
import { babelParse, babelParseCode, isEmpty } from '../../tools';
import './index.less';

export default ({
  value,
  onChange = () => {},
  style = { height: 300, width: 360 },
  defaultCode = '() => {}',
  noChangeClearCode = false,
  codeRef = useRef({}),
  require = {},
  useEncrypt = false,
  debounceTime = 300,
  ...rest
}: CodeProps) => {
  const [errorInfo, setErrorInfo] = useState('');
  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  useEffect(() => {
    Object.assign(codeRef.current, {
      getModule: () => {
        return babelParse({
          code: decrypt(valueRef.current, false), // 解码
          require,
        });
      },
      getEs5Code: () => {
        return babelParseCode({
          code: valueRef.current,
          require,
        });
      },
    });
  }, [require]);
  return (
    <div
      className='function-data-box'
      style={style}
    >
      {errorInfo && <div className="function-data-error-info">{errorInfo}</div>}
      <CodeEditor
        value={decrypt(value, false) || defaultCode}
        minimapEnabled={false}
        {...rest}
        language="javascript"
        codeRef={codeRef}
        key={Object.keys(require).toString()}
        onChange={debounce(async (codeString: string) => {
          try {
            if (
              isEmpty(codeString) ||
              (codeString === defaultCode && noChangeClearCode)
            ) {
              setErrorInfo('');
              return onChange(undefined);
            }
            valueRef.current = codeString; // 同步文本
            const result = babelParse({
              code: codeString,
              require,
            });
            // 校验通过才触发 onChange
            onChange(useEncrypt ? encrypt(codeString) : codeString, result);
            setErrorInfo('');
          } catch (error) {
            setErrorInfo(error.toString());
          }
        }, debounceTime)}
      />
    </div>
  );
};
