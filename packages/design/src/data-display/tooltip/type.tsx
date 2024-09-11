import { ReactNode, CSSProperties } from 'react';

export interface TooltipProps {
  /** 提示信息 */
  title?: ReactNode;
  /** 方向 */
  placement?: 'top' | 'right' | 'left' | 'bottom';
  /** 弹出类 */
  overlayClassName?: string;
  /** 弹出容器样式 */
  overlayStyle?: CSSProperties;
  /** 是否可见 */
  visible?: boolean;
  /** 改变钩子 */
  onVisibleChange?: Function;
  /** 内部样式 */
  innerStyle?: CSSProperties;
  children?: ReactNode;
}

export default (props: TooltipProps) => null;
