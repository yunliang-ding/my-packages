import { CSSProperties, ReactNode } from 'react';

export interface SwitchProps {
  /** 值 */
  value?: boolean;
  /** 选中的提示 */
  checkedChildren?: ReactNode;
  /** 没选中的提示 */
  unCheckedChildren?: ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 改变的钩子 */
  onChange?: Function;
  /** 点击的钩子 */
  onClick?: Function;
  /** 样式 */
  style?: CSSProperties;
}
