import { CSSProperties } from 'react';

export type TreeNode = {
  key: string;
  title: string;
  selectable?: boolean;
  disabled?: boolean;
  children?: TreeNode[];
};

export interface TreeProps {
  /** 数据源 */
  treeData: TreeNode[];
  /** 展示连接线 */
  showLine?: boolean;
  /** 展开节点 */
  expandedKeys?: string[];
  /** 是否可选择 */
  checkable?: boolean;
  /** 多选选择节点 */
  checkedKeys?: string[];
  /** 单一选择节点 */
  selectedKey?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 选中的回调 */
  onCheck?: Function;
  /** 展开的回调 */
  onExpand?: Function;
  /** 选择的回调 */
  onSelect?: Function;
  /** 样式 */
  style?: CSSProperties;
}

export default (props: TreeProps) => null;
