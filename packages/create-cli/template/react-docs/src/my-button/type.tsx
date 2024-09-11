import { ReactNode } from 'react';

export interface MyBtnProps {
  /** 按钮内容 */
  label: ReactNode;
  /** 按钮颜色 */
  color?: string;
  /** 按钮点击事件 */
  onClick?: () => void;
}

export default (props: MyBtnProps) => null;
