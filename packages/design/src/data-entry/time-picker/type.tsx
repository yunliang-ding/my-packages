import { CSSProperties } from "react";

export interface TimePickerProps {
  /** 类名 */
  className?: string;
  /** 值 */
  value?: string;
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 改变钩子 */
  onChange?: Function;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
}