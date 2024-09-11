import { CSSProperties, ReactNode } from 'react';
import { OptionsProps } from '../select/type';

export interface RadioProps {
  /** 是否选中 */
  checked?: boolean;
  /** 改变的钩子 */
  onChange?: Function;
  /** 是否禁用 */
  disabled?: boolean;
  /** 文本 */
  children?: ReactNode;
}

export interface RadioGroupProps {
  /** 数据源 */
  options: OptionsProps[];
  /** 样式 */
  style?: CSSProperties;
  /** 单选的类型 */
  type?: 'radio' | 'button';
  /** 选中值 */
  value?: string | number;
  /** 改变的钩子 */
  onChange?: Function;
  /** 是否禁用 */
  disabled?: boolean;
  /** 方向 */
  direction?: 'horizontal' | 'vertical';
}

export default (props: RadioGroupProps) => null;
