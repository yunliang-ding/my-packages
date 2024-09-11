import { ReactNode, CSSProperties } from "react";

export interface DatePickerProps {
  /** 值 */
  value?: string;
  /** 改变的钩子 */
  onChange?: Function;
  /** 提示文案 */
  placeholder?: string;
  /** 前缀 */
  addonBefore?: ReactNode;
  /** 后缀 */
  addonAfter?: ReactNode;
  /** 样式 */
  style?: CSSProperties;
  /** 是否清空 */
  allowClear?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 禁用时间段 */
  disabledDate?: Function;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
}
