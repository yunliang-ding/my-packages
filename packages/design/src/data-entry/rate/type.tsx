import { CSSProperties, ReactNode } from 'react';

export interface RateProps {
  /** 样式 */
  style?: CSSProperties;
  /**
   * 自定义字符
   */
  character?: ReactNode;
  /**
   * 星的总数
   */
  count?: number;
  /**
   * 星的个数，受控值
   */
  value?: number;
  /**
   * 是否允许半选
   */
  allowHalf?: boolean;
  /**
   * 是否允许清除
   */
  allowClear?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /** 笑脸 */
  grading?: boolean;
  /**
   * 选择时的回调
   */
  onChange?: (value: number) => void;
  /**
   * 鼠标经过时数值变化的回调
   */
  onHoverChange?: (value: number) => void;
}

export default (props: RateProps) => null;