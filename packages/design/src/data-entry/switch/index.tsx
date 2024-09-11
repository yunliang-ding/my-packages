import { useState, useEffect } from 'react';
import { IconLoading } from '@yl-d/icon';
import { SwitchProps } from './type';
import './index.less';

export default ({
  value = false,
  checkedChildren,
  unCheckedChildren,
  disabled = false,
  onChange,
  onClick,
  style = {},
}: SwitchProps) => {
  const [checked, setChecked] = useState(value);
  const [loading, setLoading] = useState(false);
  let className = checked ? 'yld-switch-checked' : 'yld-switch';
  if (disabled || loading) {
    className += ' yld-switch-disabled';
  }
  let innerText = checked ? checkedChildren : unCheckedChildren;
  useEffect(() => {
    setChecked(value || false);
  }, [value]);
  return (
    <button
      className={className}
      style={style}
      onClick={async (e) => {
        if (disabled || loading) return;
        if (typeof onClick === 'function') {
          setLoading(true);
          await onClick(e);
          setLoading(false);
        }
        setChecked(!checked);
        onChange?.(!checked, e);
      }}
    >
      {loading && <IconLoading style={{ fontSize: 10 }} />}
      <span className="yld-switch-inner">{innerText}</span>
      <div className="yld-click-animating-node" />
    </button>
  );
};
