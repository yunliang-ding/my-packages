import { useState, useEffect, CSSProperties, ReactNode } from 'react';
import './index.less';

export interface CheckBoxProps {
  className?: string;
  checked?: boolean;
  onChange?: Function;
  disabled?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
  indeterminate?: boolean;
}

export default ({
  className,
  disabled = false,
  onChange,
  style = {},
  children = null,
  indeterminate = false,
  ...rest
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(rest.checked);
  useEffect(() => {
    setChecked(rest.checked);
  }, [rest.checked]);
  const classNames = ['yld-checkbox'];
  if (checked) {
    classNames.push('yld-checkbox-checked');
  }
  if (disabled) {
    classNames.push('yld-checkbox-disabled');
  }
  if (indeterminate) {
    classNames.push('yld-checkbox-indeterminate');
  }
  if (className) {
    classNames.push(className);
  }
  return (
    <label className="yld-checkbox-wrapper">
      <span className={classNames.join(' ')}>
        <input
          type="checkbox"
          readOnly={disabled || indeterminate}
          style={style}
          checked={checked}
          className="yld-checkbox-input"
          onChange={(e) => {
            if (disabled) return;
            setChecked(e.target.checked);
            onChange?.(e);
          }}
        />
        <span className="yld-checkbox-inner" />
        <span className="yld-checkbox-hover" />
      </span>
      <span>{children}</span>
    </label>
  );
};
