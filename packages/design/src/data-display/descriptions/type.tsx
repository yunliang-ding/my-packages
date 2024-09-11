import { CSSProperties, ReactNode } from 'react';

export interface DescriptionsProps {
  /** 方向 */
  direction?: 'horizontal' | 'vertical';
  /** 样式 */
  style?: CSSProperties;
  /** 标题 */
  title?: ReactNode;
  /** 布局 */
  column?: 1 | 2 | 3;
  /** 数据源 */
  data: {
    label: string;
    value: string | number;
    span?: number;
  }[];
}

export default (props: DescriptionsProps) => null;