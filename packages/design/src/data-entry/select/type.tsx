import { CSSProperties, ReactNode } from 'react';
import { FormInstance } from '../..';

export interface OptionsProps {
  label: ReactNode;
  value: number | string;
  disabled?: boolean;
}

export interface SimpleSelectProps {
  /** 类名 */
  className?: string;
  /** 多选模式 */
  multiple?: boolean;
  /** 数据源 */
  options?: OptionsProps[];
  /** 值 */
  value?: number | string | any[];
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 下拉层类名 */
  layerClassName?: string;
  /** 改变钩子 */
  onChange?: Function;
  /** 查询的钩子 */
  onSearch?: Function;
  /** 是否支持查询 */
  showSearch?: boolean;
  /** 过滤的钩子 */
  filter?: Function;
  /** 挂在的容器 */
  getPopupContainer?: () => HTMLElement;
  /** 别名 */
  fieldNames?: {
    label?: string,
    value?: string,
  }
  loading?: boolean;
}

export interface SelectProps extends Omit<SimpleSelectProps, 'options'> {
  /** 数据源 */
  options?:
    | ((form: FormInstance) => Promise<OptionsProps[]>)
    | OptionsProps[];
}

export default (props: SelectProps) => null;
