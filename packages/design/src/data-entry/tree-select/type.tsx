import { CSSProperties, ReactNode } from 'react';
import { FormInstance } from '../..';

export interface TreeDataProps {
  key: string;
  title: ReactNode;
  disabled?: boolean;
  children: TreeDataProps[];
}

export interface TreeSelectProps {
  /** 别名 */
  fieldNames?: {
    label?: string;
    value?: string;
    children?: string;
  };
  /** 展开节点 */
  expandedKeys?: string[];
  /** 开启多选 */
  checkable?: boolean;
  /** 类名 */
  className?: string;
  /** 数据源 */
  treeData?:
    | TreeDataProps[]
    | ((form: FormInstance) => Promise<TreeDataProps[]>);
  /** 值 */
  value?: string | string[];
  /** 改变钩子 */
  onChange?: Function;
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
  loading?: boolean;
}

export default (props: TreeSelectProps) => null;
