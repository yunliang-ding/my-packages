import { ModalProps, FormInstance, FormItemProps } from '../..';

export interface ModalFormProps extends ModalProps {
  /** form 实例 */
  form?: FormInstance;
  /** 默认值 */
  initialValues?: any;
  /** 改变的钩子 */
  onValuesChange?: (v: any, vs: any, form: FormInstance) => void;
  /** 表单数据模型 */
  schema?: FormItemProps[] | ((form: FormInstance) => FormItemProps[]);
  widgets?: {
    [key: string]: any;
  };
  /** 是否禁用 */
  disabled?: boolean;
  /** 布局等份 */
  column?: 1 | 2 | 3;
  /** 是否水平布局 */
  horizontal?: boolean;
  /** 取消事件 */
  onClose?: (e?: any) => void;
  /** 提交事件 */
  onSubmit?: (values: any) => void;
  /**
   * 取消的文案
   * @default 取消
   */
  cancelText?: string;
  /**
   * 确定的文案
   * @default 确定
   */
  okText?: string;
}

export default (props: ModalFormProps) => null;
