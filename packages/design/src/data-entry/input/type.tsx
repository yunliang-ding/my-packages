import { CSSProperties, ReactNode } from "react";


export interface InputProps {
  /** 样式 */
  style?: CSSProperties;
  /** 类型 */
  type?: 'textarea' | 'password';
  /** 类名 */
  className?: string;
  /** 前缀 */
  addonBefore?: ReactNode;
  /** 后缀 */
  addonAfter?: ReactNode;
  /** 值 */
  value?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 提示文案 */
  placeholder?: string;
  /** 最大长度 */
  maxLength?: number;
  /** 改变钩子 */
  onChange?: Function;
  /** 失去焦点钩子 */
  onBlur?: Function;
  /** 得到焦点钩子 */
  onFocus?: Function;
  /** 回车钩子 */
  onPressEnter?: Function;
  /** 是否允许清空 */
  allowClear?: boolean;
  /** 清空钩子 */
  onAllowClear?: Function;
  /** 小前缀 */
  prefix?: ReactNode;
  /** 小后缀 */
  suffix?: ReactNode;
  /** 是否展示计数 */
  showCount?: boolean;
  /** 点击 */
  onClick?: any;
  /** 聚焦 */
  autoFocus?: boolean;
}