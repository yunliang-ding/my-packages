import React from 'react';
import { Menu, Layout } from '@yl-d/design';
import uiStore from '@/store/ui';
import userStore from '@/store/user';
import breadcrumbStore from '@/store/breadcrumb';
import { outLogin } from '@/services';
import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { logo } from 'lyr';

export default ({ routerInterceptors }) => {
  const layoutRef: any = useRef({});
  const breadcrumb = breadcrumbStore.useSnapshot();
  const { dark, title, collapsed, primaryColor, layout } =
    uiStore.useSnapshot();
  const { name, avatarUrl, menus } = userStore.useSnapshot();
  const setCollapsed = (v: boolean) => {
    uiStore.collapsed = v;
  };
  // 使用 AppLayout 内置的 监听 hash 方法
  useEffect(() => {
    const removeListener = layoutRef.current.listenHashChange(
      ({ currentBreadcrumb }) => {
        /** 设置当前路由的默认面包屑 */
        breadcrumbStore.title = currentBreadcrumb.title;
        breadcrumbStore.breadcrumb = currentBreadcrumb.breadcrumb;
      },
    );
    return removeListener;
  }, []);
  const VNode = routerInterceptors?.();
  return (
    <Layout
      layoutRef={layoutRef}
      layout={layout}
      themeColor={primaryColor}
      onSetting={(value: any) => {
        if (value.themeColor) {
          uiStore.primaryColor = value.themeColor;
        } else if (value.layout) {
          uiStore.layout = value.layout;
        }
      }}
      logo={logo}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      title={title}
      dark={dark}
      onDarkChange={(dark) => {
        uiStore.dark = dark;
        (window as any).monacoTheme = dark ? 'vs-dark' : 'vs';
        (window as any).monaco?.editor?.setTheme?.((window as any).monacoTheme);
      }}
      menus={menus}
      menuClick={({ path }: any) => {
        location.hash = path;
      }}
      rightContentProps={{
        userName: name,
        droplist: (
          <Menu
            menuClick={() => {
              outLogin();
            }}
            menus={[
              {
                path: 'logout',
                label: '切换用户',
              },
            ]}
          />
        ),
        avatarUrl,
      }}
      pageHeaderProps={breadcrumb}
      siderFooterRender={() => null}
    >
      {VNode ? VNode : <Outlet />}
    </Layout>
  );
};
