import { CSSProperties, MutableRefObject, ReactElement } from 'react';
import { FormInstance } from './type.instance';
import { FormItemProps } from './type.item';

export interface FormRefInstance extends Omit<MutableRefObject<{}>, 'current'> {
  current: FormInstance;
}

export interface FormProps {
  /** 样式 */
  style?: CSSProperties;
  /** form 实例 */
  form?: FormInstance;
  /** 默认值 */
  initialValues?: any;
  /** 改变的钩子 */
  onValuesChange?: (v: any, vs: any, form: FormInstance) => void;
  /** 表单数据模型 */
  schema: FormItemProps[] | ((form: FormInstance) => FormItemProps[]);
  /** 是否禁用 */
  disabled?: boolean;
  /** 布局等份 */
  column?: 1 | 2 | 3 | 4;
  /** 类名 */
  className?: string;
  /** 是否水平布局 */
  horizontal?: boolean;
  /**
   * 注入自定义组件
   */
  widgets?: {
    [key: string]: any | ((props: any) => ReactElement);
  };
  values?: any;
}

export default (props: FormProps) => null;
