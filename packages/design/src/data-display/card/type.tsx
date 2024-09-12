import { CSSProperties, ReactNode } from "react";

export interface CardProps{
  /** 标题 */
  title?: ReactNode;
  /** 类名 */
  className?: string;
  /** body样式 */
  bodyStyle?: CSSProperties;
  /** 容器样式 */
  style?: CSSProperties;
  /** 工具扩展 */
  extra?: ReactNode;
  /** 底部渲染 */
  footer?: ReactNode;
  /** 是否有hover */
  hoverable?: boolean;
  /** 是否有边框 */
  bordered?: boolean;
  children: ReactNode;
}

export default (props: CardProps) => null;