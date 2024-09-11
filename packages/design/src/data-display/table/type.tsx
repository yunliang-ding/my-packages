import { ReactNode, CSSProperties, MutableRefObject } from 'react';
import {
  FormProps,
  ButtonProps,
  ModalFormProps,
  DrawerFormProps,
  PaginationProps,
} from '../..';

export interface ColumnProps {
  title?: ReactNode;
  width?: string | number;
  dataIndex: string;
  fixed?: 'left' | 'right';
  visible?: boolean;
  render?: (e, record, index) => ReactNode;
  enums?: any;
  dateFormat?: string;
}

export interface ToolProps
  extends Omit<ButtonProps, 'modalFormProps' | 'drawerFormProps' | 'onClick'> {
  label?: string;
  /** 扩展参数 */
  onClick?: (api: { refresh: Function; search: Function }) => void;
  /**
   * 绑定 弹出层
   */
  modalFormProps?:
    | ModalFormProps
    | ((api: {
        refresh: Function;
        search: Function;
      }) => ModalFormProps | Promise<ModalFormProps>);
  /**
   * 绑定 抽屉
   */
  drawerFormProps?:
    | DrawerFormProps
    | ((api: {
        refresh: Function;
        search: Function;
      }) => DrawerFormProps | Promise<DrawerFormProps>);
}

export interface MenuProps extends ButtonProps {
  label?: string;
}

export interface TableProps {
  /** 标题 */
  title?: ReactNode;
  /** 列信息 */
  columns: ColumnProps[];
  /** 查询信息配置 */
  search?: FormProps;
  /** 统一数据请求 */
  request: (params) => Promise<{
    success: boolean;
    total: number;
    data: any[];
  }>;
  /** table 实例 */
  tableRef?: MutableRefObject<{
    refresh?: Function;
    search?: Function;
    dataSource?: any;
    pagination?: any;
    params?: any;
    loading?: boolean;
  }>;
  /** 工具配置 */
  tools?: ToolProps[];
  /** 操作列配置 */
  rowOperations?: {
    width: string | number;
    menus: (api: {
      record: any;
      refresh: Function;
      search: Function;
      index: number;
    }) => MenuProps[];
  };
  /** 唯一标示 */
  rowKey?: string;
  /** 样式 */
  style?: CSSProperties;
  /** 分页配置 */
  pagination?: PaginationProps | false;
  /** 是否带边框 */
  bordered?: boolean;
  /** 是否带选择 */
  checkable?: boolean;
  /** 选择的钩子 */
  onCheck?: Function;
  /** 是否开启刷新 */
  useRefresh?: boolean;
  /** 是否开启列过滤 */
  useFilter?: boolean;
  /** 默认不展示的列 */
  filterIds?: string[];
  /** 滑动 */
  scroll?: {
    x?: number;
    y?: string | number;
  };
  /** 序号 */
  autoNo?: boolean;
  setLoading?: Function;
}

export default (props: TableProps) => null;
