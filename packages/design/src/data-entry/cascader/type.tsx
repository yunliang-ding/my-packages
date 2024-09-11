import { CSSProperties, ReactNode } from "react";

export interface OptionsProps {
  label: ReactNode;
  value: number | string;
  disabled?: boolean;
  children: OptionsProps[];
}

export interface CascaderProps {
  /** 别名 */
  fieldNames?: {
    label?: string;
    value?: string;
    children?: string;
  };
  /** 类名 */
  className?: string;
  /** 多选模式 */
  multiple?: boolean;
  /** 数据源 */
  options?: OptionsProps[];
  /** 值 */
  value?: number[] | string[];
  /** 改变钩子 */
  onChange?: Function;
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
}

export default (props: CascaderProps) => null;