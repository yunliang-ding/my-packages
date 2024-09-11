import { CSSProperties, MutableRefObject, ReactNode } from 'react';
import { MenuProps } from '../menu/type';
import { RightProps } from './right.type';

export interface LayoutProps {
  style?: CSSProperties;
  /** 
   * 布局方式
   * @default vertical
   */
  layout?: 'horizontal' | 'vertical' | 'inline';
  /** 主题 */
  dark?: boolean;
  /** 主题色 */
  themeColor?: string;
  /** 点击设置的回调 */
  onSetting?(v: any): void;
  /** 当前路径 */
  pathname?: string;
  /** 是否收起 */
  collapsed?: boolean;
  /** 收起展开勾子 */
  onCollapse?: Function;
  breadcrumbClick?: Function;
  /** 切换主题 */
  onDarkChange?: (dark: boolean) => void;
  /** 菜单属性 */
  openMenu?: boolean;
  menus: MenuProps[];
  menuClick?: Function;
  /** 应用标题 */
  title?: ReactNode;
  /** 渲染logo */
  logo?: string;
  /** 扩展类名 */
  className?: string;
  /** 水印配置 */
  waterMarkProps?: any;
  /** 页面头属性 */
  pageHeaderProps?: any;
  /** 顶部右侧配置 */
  rightContentProps?: RightProps;
  /** 底部渲染 */
  siderFooterRender?: (v: boolean) => ReactNode;
  /** 实例引用 */
  layoutRef?: MutableRefObject<{
    listenHashChange: (callBack) => null;
  }>;
  children?: ReactNode;
}

export default (props: LayoutProps) => null;
