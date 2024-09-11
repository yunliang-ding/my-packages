import { useEffect, useRef, useState } from 'react';
import { getComponent } from './widget';
import { isEmpty } from '../../tools';
import { IconQuestionCircle } from '@yl-d/icon';
import { Tooltip } from '../..';

export default ({
  descriptorRef,
  itemRef,
  value,
  onChange,
  form,
  item,
  column,
  disabled,
  horizontal,
  widgets,
}) => {
  const [_item, setItem] = useState(item);
  useEffect(() => {
    setItem(item);
  }, [item]);
  const {
    label,
    name,
    type,
    style = {},
    itemStyle = {},
    span = 1,
    hidden = false,
    props,
    visible,
    className,
    labelWidth,
    itemRender,
    tooltip,
    initialValue,
  } = _item;
  const labelRef = useRef<HTMLLabelElement>();
  const wrapRef = useRef<HTMLDivElement>();
  const Comp = getComponent(type, widgets);
  useEffect(() => {
    if (labelRef.current && horizontal) {
      const { width } = labelRef.current.getBoundingClientRect();
      labelRef.current.style.width = width + 10 + 'px';
      wrapRef.current.style.width = `calc(100% - ${width + 10}px)`;
    }
  }, [label]);
  const [refresh, setRefresh] = useState(Math.random());
  // 优先取initialValue
  const [_value, setValue] = useState(initialValue || value);
  const [error, setError] = useState(false);
  // 是否禁用
  const _disabled =
    typeof _item.disabled === 'function'
      ? _item.disabled(form)
      : _item.disabled || disabled;
  // 是否必填
  const required =
    typeof _item.required === 'function'
      ? _item.required(form)
      : _item.required;
  // 生成校验规则
  if (required) {
    descriptorRef.current[name] = {
      type: 'string',
      required: true,
      message: `${label}不能为空`,
      validator: (rule, value) => !isEmpty(value),
    };
  } else {
    delete descriptorRef.current[name];
  }
  /** 挂 api */
  useEffect(() => {
    Object.assign(itemRef, {
      showError(error) {
        setError(error);
      },
      clearError() {
        setError(false);
      },
      setValue: (v: any) => {
        // 开关特殊处理下
        if (type === 'Switch') {
          setValue(v === undefined ? false : v);
        } else {
          setValue(v);
        }
      },
      reload: () => {
        setRefresh(Math.random());
      },
      setItem: (item) => {
        // 做一个合并操作, 之后重新渲染
        setItem({
          ..._item,
          ...item,
        });
      },
    });
  }, []);
  if (typeof visible === 'function' && visible(form) === false) {
    delete descriptorRef.current[name]; // 删除校验
    return <div className="yld-form-item yld-form-item-hidden"></div>;
  }
  const classNames = ['yld-form-item'];
  if (className) {
    classNames.push(className);
  }
  if (required) {
    classNames.push('yld-form-item-required');
  }
  if (hidden) {
    classNames.push('yld-form-item-hidden');
  }
  if (error) {
    classNames.push('yld-form-item-error');
  }
  let ItemNode = (
    <div
      className={classNames.join(' ')}
      style={{
        gridColumnStart: `span ${
          span === 'fill' || type === 'Block' ? column : span
        }`,
        ...style,
        ...itemStyle,
      }}
    >
      {type !== 'Block' && label && (
        <label ref={labelRef} style={labelWidth ? { width: labelWidth } : {}}>
          {label}
          {tooltip && (
            <Tooltip title={tooltip} placement="right">
              <IconQuestionCircle style={{ marginLeft: 6 }} />
            </Tooltip>
          )}
        </label>
      )}
      <div className="yld-form-item-wrap" ref={wrapRef}>
        <Comp
          disabled={_disabled}
          {...props}
          label={label}
          /** 注入属性 value 和 onChange 和 form */
          form={form}
          value={_value}
          onChange={onChange}
          /** FormList 是否刷新的标识 */
          refresh={refresh}
        />
        {error && <div className="yld-form-item-error-message">{error}</div>}
      </div>
    </div>
  );
  /** 扩展自定义渲染 */
  if (typeof itemRender === 'function') {
    ItemNode = itemRender(ItemNode, {
      itemProps: {
        ..._item,
        column,
      },
      form,
      disabled,
    });
  }
  return ItemNode;
};
