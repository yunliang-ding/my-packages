import { useState } from 'react';
import { IconEye, IconEyeInvisible, IconClose } from '@yl-d/icon';
import Prefix from './prefix';
import Suffix from './suffix';
import { isEmpty } from '../../../tools';
import { InputProps } from '../type';

export default ({
  value,
  onChange,
  prefix,
  suffix,
  addonBefore,
  addonAfter,
  type,
  disabled,
  placeholder = '请输入',
  maxLength = 64,
  onBlur,
  onFocus,
  onPressEnter,
  allowClear,
  onAllowClear,
  readOnly,
  autoFocus = false,
  showCount = false,
  ...rest
}: InputProps) => {
  let style: any = {};
  prefix && (style.paddingLeft = 30);
  suffix && (style.paddingRight = 30);
  addonBefore &&
    ((style.borderTopLeftRadius = 0), (style.borderBottomLeftRadius = 0));
  addonAfter &&
    ((style.borderTopRightRadius = 0), (style.borderBottomRightRadius = 0));
  const [password, setPassword] = useState(type === 'password');
  // 多种情况
  let suffixNode = suffix ? <Suffix>{suffix}</Suffix> : null;
  if (type === 'password') {
    suffixNode = (
      <Suffix>
        {!password ? (
          <IconEye
            onClick={() => {
              setPassword(true);
            }}
          />
        ) : (
          <IconEyeInvisible
            onClick={() => {
              setPassword(false);
            }}
          />
        )}
      </Suffix>
    );
  } else if (showCount) {
    suffixNode = (
      <Suffix>
        <span className="yld-input-count" style={{ right: 4 }}>
          {value?.length || 0}/{maxLength}
        </span>
      </Suffix>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
      <input
        type={password ? 'password' : 'text'}
        style={style}
        autoFocus={autoFocus}
        className={disabled ? 'yld-input-disabled' : 'yld-input'}
        placeholder={placeholder}
        value={value || ''}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onBlur={(e) => {
          onBlur?.(e);
        }}
        onFocus={(e) => {
          onFocus?.(e);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            onPressEnter?.(e);
          }
        }}
        onClick={rest.onClick}
      />
      {!disabled && allowClear && !isEmpty(value) && type !== 'password' && (
        <IconClose
          style={{ fontSize: 12 }}
          onClick={() => {
            onChange(undefined);
            onAllowClear?.();
          }}
        />
      )}
      {suffixNode}
    </div>
  );
};
