import { CSSProperties, ReactNode } from 'react';
import { DrawerFormProps, ModalFormProps } from '../..';

export interface ButtonProps {
  /** 类型 */
  type?: 'primary' | 'link' | 'dashed' | 'danger';
  /** 是否禁用 */
  disabled?: Boolean;
  /** 幽灵按钮 */
  ghost?: Boolean;
  /** 点击事件 */
  onClick?: Function;
  /** 图标 */
  icon?: ReactNode;
  /** 是否圆形 */
  circle?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 二次确认提示 */
  confirm?: {
    title?: string;
    content: ReactNode;
  };
  /** 类名 */
  className?: string;
  /** 加载中 */
  loading?: boolean;
  children?: ReactNode;
  /**
   * 绑定 弹出层
   */
  modalFormProps?: ModalFormProps | (() => ModalFormProps | Promise<ModalFormProps>);
  /**
   * 绑定 抽屉
   */
  drawerFormProps?: DrawerFormProps | (() => DrawerFormProps | Promise<DrawerFormProps>);
}

export default (props: ButtonProps) => null;
