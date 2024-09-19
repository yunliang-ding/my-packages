import { CSSProperties, ReactNode } from "react";

export interface SplitPaneProps {
  /** 类名 */
  className?: string;
  /** 方向 */
  direction?: 'vertical' | 'horizontal';
  /** 容器样式 */
  style?: CSSProperties;
  /** 是否可用 */
  disabled?: boolean;
  /** 最大宽度 */
  maxSize?: string | number;
  /** 最小宽度 */
  minSize?: string | number;
  /** 默认宽度 */
  defaultSize?: string | number;
  /** 左容器 */
  leftPanel: ReactNode;
  /** 右容器 */
  rightPanel: ReactNode;
}

export default (props: SplitPaneProps) => null;