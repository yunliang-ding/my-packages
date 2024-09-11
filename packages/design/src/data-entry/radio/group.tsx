import { useState, useEffect } from 'react';
import Option from './index';
import { RadioGroupProps } from './type';
import './index.less';

export default ({
  options = [],
  disabled = false,
  onChange,
  direction = 'horizontal',
  style = {},
  type,
  ...rest
}: RadioGroupProps) => {
  const [value, setValue] = useState(rest.value);
  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);
  const classNames = ['yld-radio-group'];
  if (type === 'button') {
    classNames.push('yld-radio-group-button');
  }
  if (direction === 'vertical' && type !== 'button') {
    classNames.push('yld-radio-group-vertical');
  }
  return (
    <div className={classNames.join(' ')} style={style}>
      {options.map((option) => {
        return (
          <Option
            key={option.value}
            disabled={disabled || option.disabled}
            checked={option.value === value}
            onChange={() => {
              setValue(option.value);
              onChange?.(option.value, option);
            }}
          >
            {option.label}
          </Option>
        );
      })}
    </div>
  );
};
