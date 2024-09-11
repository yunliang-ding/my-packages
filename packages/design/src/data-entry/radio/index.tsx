import { useState, useEffect } from 'react';
import { RadioProps } from './type';
import './index.less';

export default ({
  checked = false,
  disabled = false,
  onChange,
  children,
}: RadioProps) => {
  const [_checked, setChecked] = useState(checked);
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  const classNames = ['yld-radio'];
  if (_checked) {
    classNames.push('yld-radio-checked');
  }
  if (disabled) {
    classNames.push('yld-radio-disabled');
  }
  const wrapClassName = ['yld-radio-wrapper'];
  if (checked) {
    wrapClassName.push('yld-radio-wrapper-checked');
  }
  if (disabled) {
    wrapClassName.push('yld-radio-wrapper-disabled');
  }
  return (
    <label className={wrapClassName.join(' ')}>
      <span className={classNames.join(' ')}>
        <input
          type="radio"
          readOnly={disabled}
          checked={_checked}
          className="yld-radio-input"
          onChange={(e) => {
            if (disabled) {
              return;
            }
            setChecked(e.target.checked);
            onChange?.(e);
          }}
        />
        <span className="yld-radio-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
};
