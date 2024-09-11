import { ReactNode } from 'react';

export interface BadgeProps {
  /** 颜色 */
  color?: string;
  /** 数字 */
  count?: number;
  /** 点 */
  dot?: boolean;
  children: ReactNode;
}

export default (props: BadgeProps) => null;