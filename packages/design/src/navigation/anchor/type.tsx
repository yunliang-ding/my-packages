import { ReactNode } from "react";

export interface AnchorProps {
  /** 数据源描述 */
  list: {
    /** 唯一标识 */
    key?: string;
    /** 文案 */
    title: string;
    /** 内容 */
    content?: ReactNode;
  }[];
  /** 容器的高度 */
  height: number;
  /** 偏差量 */
  minusHeight?: number;
  /** 默认选中 */
  defaultActivityKey?: string;
  children?: ReactNode;
  scrollElement?: string;
}

export default (props: AnchorProps) => null