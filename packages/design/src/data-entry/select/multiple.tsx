import { useState, useRef, useEffect } from 'react';
import { Empty, Layer } from '../..';
import { SimpleSelectProps } from './type';
import { IconDown, IconClose, IconCheck, IconLoading } from '@yl-d/icon';

export default ({
  className,
  allowClear = true,
  placeholder = '请选择',
  disabled = false,
  style = {},
  layerClassName,
  onChange,
  getPopupContainer,
  loading = false,
  ...rest
}: SimpleSelectProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(rest.options || []);
  const [value, setValue] = useState(
    Array.isArray(rest.value) ? rest.value : [],
  );
  const classNames = ['yld-select'];
  if (className) {
    classNames.push(className);
  }
  if (open) {
    classNames.push('yld-select-open');
  }
  const showAllowClear = !disabled && allowClear && value.length > 0;
  if (showAllowClear) {
    classNames.push('yld-select-allowClear');
  }
  if (disabled) {
    classNames.push('yld-select-disabled');
  }
  useEffect(() => {
    setValue(Array.isArray(rest.value) ? rest.value : []);
  }, [rest.value]);
  useEffect(() => {
    setOptions(rest.options);
  }, [rest.options]);
  const selectionRef = useRef<HTMLDivElement>();
  const choiceRef = useRef<HTMLDivElement>();
  // 更新容器的高度
  useEffect(() => {
    if (choiceRef.current) {
      const { height } = choiceRef.current.getBoundingClientRect();
      selectionRef.current.style.height = height + 'px';
    }
  }, [value]);
  return (
    <>
      <div className={classNames.join(' ')} style={style}>
        <div
          ref={selectionRef}
          className="yld-select-selection yld-select-selection-multiple"
          onClick={() => {
            if (disabled) return;
            setOpen(!open);
          }}
        >
          <div className="yld-select-selection-selected-value">
            {value.length === 0 ? (
              <span style={{ color: '#aaa' }}>{placeholder}</span>
            ) : (
              <div
                className="yld-select-selection-choice-warpper"
                ref={choiceRef}
              >
                {options
                  .filter((item) => value.indexOf(item.value) > -1)
                  .map((item) => {
                    return (
                      <span
                        className="yld-select-selection-choice"
                        key={item.value}
                      >
                        {item.label}
                        <IconClose
                          style={{ fontSize: 12 }}
                          onClick={(e: any) => {
                            e.stopPropagation(); // 阻止冒泡
                            let v = value.filter((i) => i !== item.value);
                            setValue([...v]);
                            onChange?.(v);
                          }}
                        />
                      </span>
                    );
                  })}
              </div>
            )}
          </div>
          {loading ? <IconLoading /> : <IconDown />}
          {showAllowClear && (
            <IconClose
              style={{ fontSize: 12 }}
              className="yld-icon yld-icon-close-el"
              onClick={async (e: any) => {
                e.stopPropagation(); // 阻止冒泡
                setValue([]); // clear
                selectionRef.current.style.height = '32px';
                await new Promise((res) => setTimeout(res, 300));
                onChange?.([], null);
              }}
            />
          )}
        </div>
      </div>
      {open && (
        <Layer
          layerClose={() => setOpen(false)}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
          domRef={selectionRef}
          layerHeight={200}
        >
          {options.length > 0 ? (
            options.map((option) => {
              const className = ['yld-select-dropdown-menu'];
              if (value.indexOf(option.value) > -1) {
                className.push('yld-select-dropdown-menu-selected');
              }
              if (option.disabled) {
                className.push('yld-select-dropdown-menu-disabled');
              }
              return (
                <div
                  key={option.value}
                  className={className.join(' ')}
                  onClick={() => {
                    if (option.disabled) return;
                    // 没有则添加，有则删除
                    let index = value.indexOf(option.value);
                    if (index === -1) {
                      value.push(option.value);
                    } else {
                      value.splice(index, 1);
                    }
                    setValue([...value]);
                    onChange?.([...value], option);
                  }}
                >
                  {option.label}
                  <IconCheck />
                </div>
              );
            })
          ) : (
            <Empty />
          )}
        </Layer>
      )}
    </>
  );
};
