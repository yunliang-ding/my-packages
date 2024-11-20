import { CSSProperties, ReactNode, HTMLAttributes } from 'react';

/**
 * @title Tag
 */
export interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @zh 设置标签背景颜色
   */
  color?: string;
  /**
   * @zh 是否显示边框
   * @version 2.26.0
   */
  bordered?: Boolean;
  /**
   * @zh 标签尺寸
   * @defaultValue default
   */
  size?: 'small' | 'default' | 'medium' | 'large';
  /**
   * @zh 设置标签显示隐藏
   */
  visible?: boolean;
  /**
   * @zh 是否可关闭标签
   */
  closable?: boolean;
  /**
   * @zh 是否支持选中
   */
  checkable?: boolean;
  /**
   * @zh 是否默认选中
   */
  defaultChecked?: boolean;
  /**
   * @zh 是否选中（受控模式）
   */
  checked?: boolean;
  /**
   * @zh 设置图标
   */
  icon?: ReactNode;
  /**
   * @zh 自定义关闭图标
   */
  closeIcon?: ReactNode;
  /**
   * @zh 关闭标签回调函数
   */
  onClose?: (e) => Promise<any> | void;
  /**
   * @zh 选中的回调
   */
  onCheck?: (checked: boolean) => void;
}
