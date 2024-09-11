import { CSSProperties, ReactNode } from "react";

export interface CarouselProps {
  /** 容器样式 */
  style?: CSSProperties;
  /** 数据源 */
  pages: ReactNode[];
  /** 是否渐变 */
  fade?: boolean;
  /** 当前项下标 */
  currentPage?: number;
  /** 改变 */
  onChange?: Function;
  /** 自动播放 */
  autoPlay?: boolean;
  /** 自动播放时间 */
  autoPlayTime?: number;
  /** 展示箭头 */
  showArrow?: boolean;
  /** 展示导航 */
  legend?: boolean;
  /** 循环 */
  loop?: boolean;
  swipe?: boolean;
}

export default (props: CarouselProps) => null;