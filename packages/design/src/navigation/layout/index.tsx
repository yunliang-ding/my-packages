import { useEffect, useRef, useState } from 'react';
import { IconLeft, IconRight } from '@yl-d/icon';
import { getBreadcrumbByMenus } from './util';
import Horizontal from './mode/horizontal';
import Vertical from './mode/vertical';
import Inline from './mode/inline';
import { LayoutProps } from './type';
import './index.less';

// 获取openKey
const getOpenKeyByPathName = (path: string): string[] =>
  path
    .split('/')
    .map((item, index, arr) => {
      return arr.slice(0, index + 1).join('/');
    })
    .filter(Boolean);

export default ({
  style = {},
  pathname = '/',
  layout = 'vertical',
  className,
  dark = false,
  onDarkChange = () => {},
  collapsed = false,
  onCollapse = () => {},
  menus = [],
  openMenu = true,
  menuClick = () => {},
  pageHeaderProps = {},
  breadcrumbClick,
  title = '默认应用标题',
  logo = 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  themeColor = '#165dff',
  onSetting = () => {},
  rightContentProps = {
    extra: null,
    droplist: null,
    avatarUrl:
      'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/user-logo.png',
  },
  siderFooterRender = () => null,
  layoutRef = useRef<any>({}),
  children = null,
}: LayoutProps) => {
  const classNames: string[] = ['yld-layout', `yld-layout-${layout}`];
  const [selectedKey, setSelectedKey] = useState('');
  /** horizontal 模式的一级菜单 */
  const [topKey, setTopKey] = useState('');
  const [openKeys, setOpenKeys] = useState(['']);
  /** 扩展菜单点击 */
  const onMenuClick = (openKeys: string[], path: string) => {
    menuClick?.({
      path,
      currentBreadcrumb: getBreadcrumbByMenus(
        menus,
        path.split('/').filter(Boolean),
      ),
    } as any);
    setOpenKeys(openKeys);
  };
  // 监听 hash
  const listenHash = () => {
    const path = location.hash.substring(1);
    const index = location.hash.substring(1).indexOf('?'); // 去除参数
    const pathName = index === -1 ? path : path.substring(0, index);
    const clearPath: string[] = pathName.split('/').filter(Boolean);
    setSelectedKey(`/${clearPath.join('/')}`);
    // 保留之前打开的菜单
    setOpenKeys(
      Array.from(
        new Set([
          ...openKeys,
          ...clearPath.slice(0, clearPath.length - 1).map((i) => `/${i}`),
        ]),
      ),
    );
    setTopKey(`/${clearPath[0]}`);
    return getBreadcrumbByMenus(menus, clearPath);
  };
  // 监听外部传入的地址
  useEffect(() => {
    const clearPath = pathname.split('/').filter(Boolean);
    setSelectedKey(`/${clearPath.join('/')}`);
    // 保留之前打开的菜单
    setOpenKeys(
      Array.from(new Set([...openKeys, ...getOpenKeyByPathName(pathname)])),
    ); // 自动打开父级菜单
    setTopKey(`/${clearPath[0]}`);
  }, [pathname]);
  /** 挂载API */
  useEffect(() => {
    Object.assign(layoutRef.current, {
      listenHashChange: (callBack) => {
        const listen = () => {
          callBack?.({
            currentBreadcrumb: listenHash(),
          });
        };
        listen(); // 进来自动执行一次，自动打开hash对应的菜单
        window.addEventListener('hashchange', listen);
        return () => {
          window.removeEventListener('hashchange', listen);
        };
      },
    });
  }, []);
  if (className) {
    classNames.push(className);
  }
  if (collapsed) {
    classNames.push('yld-layout-collapsed');
  }
  const IconBtn = collapsed ? IconRight : IconLeft;
  /** 右侧渲染逻辑 */
  const restProps = {
    menus,
    openMenu,
    menuClick: onMenuClick,
    title,
    logo,
    breadcrumb: pageHeaderProps.breadcrumb,
    breadcrumbClick,
    pageTitle: pageHeaderProps.title,
    extra: pageHeaderProps.extra,
    rightContentProps: {
      ...rightContentProps,
      dark,
      themeColor,
      onDarkChange,
      onSetting,
    },
    openKeys,
    selectedKey,
    collapsed,
    siderFooterRender,
    topKey,
    content: children,
  };
  return (
    <div className={classNames.join(' ')} style={style}>
      {layout === 'vertical' ? (
        <Vertical
          {...restProps}
          rightContentProps={{
            ...restProps.rightContentProps,
            layout: 'vertical',
          }}
        />
      ) : layout === 'horizontal' ? (
        <Horizontal
          {...restProps}
          rightContentProps={{
            ...restProps.rightContentProps,
            layout: 'horizontal',
          }}
        />
      ) : (
        <Inline
          {...restProps}
          rightContentProps={{
            ...restProps.rightContentProps,
            layout: 'inline',
          }}
        />
      )}
      <IconBtn
        onClick={() => {
          onCollapse(!collapsed);
        }}
        className="yld-layout-expand-btn"
      />
    </div>
  );
};
