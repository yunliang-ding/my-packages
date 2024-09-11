import { useEffect, useState } from 'react';
import AddonAfter from './components/addon-after';
import AddonBefore from './components/addon-before';
import Input from './components/input';
import TextArea from './components/text-area';
import { InputProps } from './type';
import './index.less';

export default ({
  className,
  value,
  onChange = () => {},
  allowClear = true,
  ...props
}: InputProps) => {
  const [innerValue, setInnerValue] = useState(value);
  // 同步外部更新
  useEffect(() => {
    setInnerValue(value || '');
  }, [value]);
  const classNames = [
    props.type === 'textarea' ? 'yld-textarea-wrapper' : 'yld-input-wrapper',
  ];
  // 是否展示清空按钮
  const showAllowClear =
    !props.disabled &&
    allowClear &&
    innerValue?.length > 0 &&
    props.type !== 'password';
  if (showAllowClear) {
    classNames.push('yld-input-allowClear');
  }
  if (className) {
    classNames.push(className);
  }
  return props.type === 'textarea' ? (
    <span style={props.style} className={classNames.join(' ')}>
      <TextArea
        {...props}
        value={innerValue}
        allowClear={allowClear}
        onChange={(e) => {
          setInnerValue(e);
          onChange(e);
        }}
      />
    </span>
  ) : (
    <span style={props.style} className={classNames.join(' ')}>
      <AddonBefore addon={props.addonBefore} />
      <Input
        {...props}
        value={innerValue}
        allowClear={allowClear}
        onChange={(e) => {
          setInnerValue(e);
          onChange(e);
        }}
      />
      <AddonAfter addon={props.addonAfter} />
    </span>
  );
};
