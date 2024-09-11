import { CSSProperties, ReactNode } from 'react';

interface SubMenus {
  path: string;
  icon?: ReactNode;
  label?: string;
  onClick?: Function;
  children?: SubMenus[];
}

export interface MenuProps {
  menus: SubMenus[];
  openKey?: string[];
  openMenu?: boolean;
  selectKey?: string;
  menuClick?: Function;
  style?: CSSProperties;
  collapsed?: boolean;
  collapsedWidth?: number;
  nav?: boolean;
}

export default (props: MenuProps) => null;
