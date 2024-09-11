import { CSSProperties } from "react";

export interface InputNumberProps {
  /** 值 */
  value?: number;
  /** 类名 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 提示文案 */
  placeholder?: string;
  /** 最大位数 */
  maxLength?: number;
  /** 改变钩子 */
  onChange?: Function;
  /** 失去焦点钩子 */
  onBlur?: Function;
  /** 得到焦点钩子 */
  onFocus?: Function;
  /** 回车钩子 */
  onPressEnter?: Function;
  /** 跨度 */
  step?: number;
  /** 最小范围 */
  min?: number;
  /** 最大范围 */
  max?: number;
  /** 是否展示上下调整 */
  control?: boolean;
}