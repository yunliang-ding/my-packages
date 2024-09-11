import { ReactNode } from "react";

export interface EmptyProps {
  /** 提示文案 */
  label?: ReactNode;
  /** 图标 */
  icon?: ReactNode;
}

export default (props: EmptyProps) => null;