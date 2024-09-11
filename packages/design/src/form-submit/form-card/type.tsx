import { CSSProperties, ReactNode } from 'react';
import { FormSubmitProps } from '../type';

export interface CardFormProps extends FormSubmitProps {
  /** 标题 */
  title?: ReactNode;
  /** 宽度 */
  width?: number | string;
  /** 样式 */
  bodyStyle?: CSSProperties;
  /** 重置 */
  onClear?: () => void;
}

export default (props: CardFormProps) => null;
