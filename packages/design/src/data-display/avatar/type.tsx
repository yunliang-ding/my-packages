import { CSSProperties, ReactNode } from "react";

export interface AvatarProps {
  /** 样式 */
  style?: CSSProperties;
  /** 形状 */
  shape?: 'circle' | 'square';
  /** 尺寸 */
  size?: number;
  children?: ReactNode | ReactNode[];
}


export default (props: AvatarProps) => null;