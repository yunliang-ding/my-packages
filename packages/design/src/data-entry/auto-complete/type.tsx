import { CSSProperties, ReactNode } from "react";

export interface AutoCompleteProps {
  /** 类名 */
  className?: string;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
  /** 触发的字符 */
  prefix?: string;
  /** 数据源 */
  options: {
    label: ReactNode;
    value: string;
  }[];
  /** 值 */
  value?: string;
  /** 是否可清空 */
  allowClear?: Boolean;
  /** 提示文案 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 选择后钩子 */
  onChange?: Function;
}

export default (props: AutoCompleteProps) => null;