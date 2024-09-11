import { useState, useEffect, useRef } from 'react';
import { Empty, Layer } from '../..';
import { IconClose } from '@yl-d/icon';
import { AutoCompleteProps } from './type';
import './index.less';

export default ({
  className,
  options,
  allowClear = true,
  placeholder = '请输入',
  prefix = '@',
  disabled = false,
  style = {},
  layerClassName,
  getPopupContainer,
  onChange,
  ...rest
}: AutoCompleteProps) => {
  const selectionRef = useRef<HTMLInputElement>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(rest.value);
  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);
  const classNames = ['yld-auto'];
  if (disabled) {
    classNames.push('yld-auto-disabled');
  }
  if (className) {
    classNames.push(className);
  }
  return (
    <div className={classNames.join(' ')} style={style}>
      <input
        ref={selectionRef}
        value={value || ''}
        className="yld-auto-input"
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          setValue(e.target.value || undefined);
          if (e.target.value?.endsWith(prefix)) {
            setOpen(true);
          } else {
            setOpen(false);
          }
        }}
      />
      {allowClear && value !== undefined && (
        <IconClose
          style={{ fontSize: 12 }}
          onClick={(e: any) => {
            e.stopPropagation(); // 阻止冒泡
            setValue(undefined);
            onChange?.(undefined);
            setOpen(false);
          }}
        />
      )}
      {open && (
        <Layer
          layerClose={() => setOpen(false)}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
          domRef={selectionRef}
        >
          {options.length > 0 ? (
            options.map((option) => {
              const className = ['yld-select-dropdown-menu'];
              if (option.value === value) {
                className.push('yld-select-dropdown-menu-selected');
              }
              return (
                <div
                  key={option.value}
                  className={className.join(' ')}
                  onClick={() => {
                    setOpen(false);
                    setValue?.(value + option.value);
                    onChange?.(value + option.value);
                  }}
                >
                  {option.label}
                </div>
              );
            })
          ) : (
            <Empty label="暂无数据" />
          )}
        </Layer>
      )}
    </div>
  );
};
