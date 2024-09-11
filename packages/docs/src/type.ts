import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export interface ConfigProps {
  /** 标题 */
  title?: string;
  /** 页面渲染前的展示 */
  spin?: string;
  /** icon */
  favicon?: string;
  /** 开发环境 script */
  devScript?: string[];
  /** 生产环境 script */
  buildScript?: string[];
  /** css */
  link?: string[];
  /** 忽略路由配置 */
  ignoreRouter?: string[];
  /** 是否开启资源包分析 */
  bundleAnalyzer?: BundleAnalyzerPlugin.Options;
  /** webpack 配置 */
  webpackConfig?: (
    mode: 'development' | 'production' | undefined,
  ) => Configuration;
  /** 服务端入口，默认 ./src/apis */
  serverPath?: string;
  /** 是否多包 */
  monorepo?: boolean;
  /** 指定包 */
  monorepoPackages?: string[];
  /** 导航 */
  navs?: {
    title: string;
    children: { title: string; path: string }[];
  }[];
  menus?: {
    label: string;
    path: string;
    icon?: any;
    children?: any[];
    group?: boolean;
  }[];
  /** 代码需要的依赖 */
  docsRequire?: {
    [key: string]: string;
  };
  /** 文档站点 */
  docsMode?: boolean;
  mode?: 'development' | 'production';
  wsPort?: number;
  wsHost?: string;
  version?: string;
}
