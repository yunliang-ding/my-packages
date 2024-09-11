import { CSSProperties, ReactNode } from "react";

export interface TabsProps {
  /** 容器样式 */
  style?: CSSProperties;
  /** 可关闭 */
  closable?: boolean;
  /** 点击 */
  onClick?: Function;
  /** 删除 */
  onRemove?: Function;
  /** 当前选中 */
  activeKey?: string;
  /** 数据源 */
  tabs: {
    key: string;
    label: ReactNode;
    content?: ReactNode;
  }[];
}

export default (props: TabsProps) => null;