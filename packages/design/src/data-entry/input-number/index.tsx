import { BigNumber } from '../../tools';
import { useState, useEffect } from 'react';
import { IconUp, IconDown } from '@yl-d/icon';
import { InputNumberProps } from './type';
import './index.less';

export default ({
  value,
  onChange,
  className,
  disabled = false,
  style = {},
  placeholder = '请输入',
  maxLength,
  onBlur,
  onFocus,
  onPressEnter,
  control = true,
  step = 1,
  min,
  max,
}: InputNumberProps) => {
  const [innerValue, setInnerValue] = useState(value);
  useEffect(() => {
    setInnerValue(value);
  }, [value]);
  /** 更新 */
  const setValue = (value) => {
    setInnerValue(value);
    onChange?.(value);
  };
  const add = () => {
    let value = BigNumber.add(innerValue, step);
    if (max !== undefined) {
      value <= max && setValue(value);
    } else {
      setValue(value);
    }
  };
  const minus = () => {
    let value = BigNumber.minus(innerValue, step);
    if (min !== undefined) {
      value >= min && setValue(value);
    } else {
      setValue(value);
    }
  };
  const classNames = ['yld-input-number-wrapper'];
  if (className) {
    classNames.push(className);
  }
  return (
    <div className={classNames.join(' ')} style={style}>
      <input
        type="number"
        className={disabled ? 'yld-input-number-disabled' : 'yld-input-number'}
        placeholder={placeholder}
        value={innerValue || ""}
        disabled={disabled}
        onWheel={(e: any) => e.target.blur()}
        maxLength={maxLength}
        onChange={(e: any) => {
          if (e.target.value === '') {
            setValue(undefined);
          } else {
            setValue(Number(e.target.value));
          }
        }}
        onBlur={(e) => {
          typeof onBlur === 'function' && onBlur(e);
        }}
        onFocus={(e) => {
          typeof onFocus === 'function' && onFocus(e);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            typeof onPressEnter === 'function' && onPressEnter(e);
          }
        }}
      />
      {!disabled && control && (
        <div className="yld-input-number-suffix">
          <div className="suffix-top" onClick={add}>
            <IconUp type="xiala1" style={{ fontSize: 12 }} />
          </div>
          <div className="suffix-bottom" onClick={minus}>
            <IconDown type="xialadown" style={{ fontSize: 12 }} />
          </div>
        </div>
      )}
    </div>
  );
};
