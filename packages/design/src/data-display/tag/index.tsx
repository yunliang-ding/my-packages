import { IconClose, IconLoading } from '@yl-d/icon';
import { useState, CSSProperties } from 'react';
import { cs } from '../../tools';
import { TagProps } from './type';

// 色板里的 12 个颜色
const COLORS = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];

export default ({
  className,
  style,
  children,
  color,
  closable,
  checkable,
  defaultChecked = false,
  onClose,
  onCheck,
  icon,
  closeIcon,
  bordered,
  ...props
}: TagProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(defaultChecked);
  function onHandleClose(e) {
    const ret = onClose?.(e);
    if (ret && ret.then) {
      setLoading(true);
      ret
        .then(() => {
          setLoading(false);
          setVisible(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setVisible(false);
    }
  }
  function onHandleCheck() {
    setChecked(!checked);
    onCheck?.(!checked);
  }
  const _color: string = COLORS.indexOf(color) !== -1 ? color : '';
  const _checked = checkable ? checked : true;
  const classNames = cs(
    'yld-tag',
    {
      ['yld-tag-loading']: loading,
      ['yld-tag-hide']: !visible,
      [`yld-tag-${_color}`]: _color,
      ['yld-tag-checkable']: checkable,
      ['yld-tag-checked']: _checked,
      ['yld-tag-bordered']: bordered,
    },
    className,
  );
  const colorStyle: CSSProperties = {
    ...style,
  };
  if (color && !_color && _checked) {
    colorStyle.backgroundColor = color;
    colorStyle.borderColor = color;
  }
  const otherProps = {
    ...props,
    visible: undefined,
  };
  if (checkable) {
    otherProps.onClick = onHandleCheck;
  }
  return (
    <div style={colorStyle} className={classNames} {...otherProps}>
      {icon && <span className={'yld-tag-icon'}>{icon}</span>}
      <span className={'yld-tag-content'}>{children}</span>
      {closable && !loading && <IconClose hover onClick={onHandleClose} />}
      {loading && (
        <span className={'yld-tag-loading-icon'}>
          <IconLoading />
        </span>
      )}
    </div>
  );
};
