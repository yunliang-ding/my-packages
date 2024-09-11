import { ReactNode } from 'react';

export interface TimelineProps {
  /** 数据源 */
  items: {
    color?: string;
    dot?: boolean;
    title: ReactNode;
  }[];
}

export default (props: TimelineProps) => null;