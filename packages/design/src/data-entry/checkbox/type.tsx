import { CSSProperties, ReactNode } from 'react';
import { FormInstance } from '../..';

export interface OptionsProps {
  label: ReactNode;
  value: number | string;
  disabled?: boolean;
}

export interface CheckGroupProps {
  /** 类名 */
  className?: string;
  /** 数据源 */
  options: OptionsProps[] | ((form: FormInstance) => Promise<OptionsProps[]>);
  /** 值 */
  value?: any;
  /** 改变的钩子 */
  onChange?: Function;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 方向 */
  direction?: 'horizontal' | 'vertical';
  loading?: boolean;
  /** 是否支持全选 */
  showCheckAll?:
    | boolean
    | {
        text: ReactNode;
      };
}

export default (props: CheckGroupProps) => null;
