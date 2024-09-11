export interface PaginationProps {
  /** 当前页码 */
  pageNum?: number;
  /** 页码大小 */
  pageSize?: number;
  /** 总条数 */
  total?: number;
  /** 改变的钩子 */
  onChange?: Function;
  /** 设置页码大小选项 */
  pageSizeOptions?: number[];
  /** 设置页码大小选项钩子 */
  onPageSizeChange?: Function;
  /** 开启快捷跳转 */
  showJumper?: boolean;
}

export default (props: PaginationProps) => null;