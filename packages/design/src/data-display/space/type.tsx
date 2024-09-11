import { CSSProperties, ReactNode } from "react";

export interface SpaceProps {
  /** 容器样式 */
  style?: CSSProperties;
  /** 间隙 */
  gap?: number;
  /** 方向 */
  direction?: 'vertical' | 'horizontal';
  children: ReactNode;
}

export default (props: SpaceProps) => null;