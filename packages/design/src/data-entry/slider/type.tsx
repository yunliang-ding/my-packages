import { CSSProperties } from "react";

export interface SliderProps {
  /** 值 */
  value?: number;
  /** 类名 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 改变钩子 */
  onChange?: Function;
  /** 最小范围 */
  min?: number;
  /** 最大范围 */
  max?: number;
  /** 是否提示 */
  tooltipVisible?: boolean;
}