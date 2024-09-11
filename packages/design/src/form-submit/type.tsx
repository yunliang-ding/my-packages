import { ButtonProps, FormProps } from "..";

export interface ActionProps extends ButtonProps {
  /** 文案 */
  label: string;
  /**
   * 清空表单
   * @default false
   */
  reset?: boolean;
  /**
   * 开启校验
   * @default false
   */
  validator?: boolean; // 开启表单校验
  /**
   * 是否可见
   * @default true
   */
  visible?: Function | Boolean; // 是否展示
}

export interface FormSubmitProps extends FormProps {
  footer?: boolean;
  /** 定义操作按钮 */
  actions?: ActionProps[];
  /**
   * 操作按钮的布局方式
   * @default end
   */
  actionAlign?: 'start' | 'center' | 'end';
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
  /** 类名 */
  className?: string;
}