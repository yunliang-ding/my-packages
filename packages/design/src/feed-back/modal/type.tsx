import { ReactNode, CSSProperties } from 'react';
import { ActionProps } from '../..';

export interface ModalProps {
  containId?: string;
  /** 标题 */
  title?: ReactNode;
  /** 是否有遮罩 */
  mask?: boolean;
  /** 点击遮罩是否带关闭 */
  closable?: boolean;
  /** 关闭的钩子 */
  onClose?: Function;
  /** 确认的钩子 */
  onOk?: Function;
  /** 底部按钮配置 */
  actions?: ActionProps[];
  /** 是否展示底部 */
  footer?: boolean;
  /** 自定义渲染底部 */
  footerRender?: (api: { onClose: any }) => ReactNode;
  /** 容器样式 */
  style?: CSSProperties;
  /** 确认文案 */
  okText?: string;
  /** 取消文案 */
  cancelText?: string;
  className?: string;
  /** 主体渲染 */
  render?: (api: { onClose: any }) => ReactNode;
}
