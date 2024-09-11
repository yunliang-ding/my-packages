import { CSSProperties, ReactNode } from 'react';

export interface WatermarkProps {
  style?: CSSProperties;
  /**
   * zIndex
   */
  zIndex?: string | number;
  /**
   * 单个水印的宽度。`image` 时默认为 100，content 时默认为文本宽度
   */
  width?: number | string;
  /**
   * 单个水印的高度
   */
  height?: number | string;
  /**
   * 单个水印旋转角度
   */
  rotate?: number;
  /**
   * 水印图片源，优先级比文字内容高
   */
  image?: string;
  /**
   * 水印的文字内容
   */
  content?: string | string[];
  /**
   * 水印文字样式
   */
  fontStyle?: {
    color?: string;
    fontFamily?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
  };
  /**
   * 水印间的间距
   */
  gap?: [number, number];
  /**
   * 水印相对于 `container` 容器的偏移量
   */
  offset?: [number, number];
  children?: ReactNode;
}

export default (props: WatermarkProps) => null;
