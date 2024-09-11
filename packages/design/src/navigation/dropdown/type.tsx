import { ReactNode } from "react";

export interface DropdownProps {
  /** 下拉容器 */
  droplist: ReactNode;
  /** 挂载容器 */
  getPopupContainer?: () => HTMLElement;
  /** 挂载容器类名 */
  layerClassName?: string;
  /** 触发方式 */
  trigger?: 'hover' | 'click' | 'contextMenu'
  children: ReactNode;
}

export default (props: DropdownProps) => null;