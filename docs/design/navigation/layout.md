## 基本使用

```tsx | react | var(--bg-color-2)
import { Radio, Space, Menu, Layout, Button } from '@yl-d/design';
import { IconUser } from '@yl-d/icon';
import menus from '@/design/menus.tsx';

export default () => {
  const [pathname, setPathName] = React.useState('/workbench/my');
  const [layout, setLayout] = React.useState('vertical');
  const [themeColor, setThemeColor] = React.useState('#165dff');
  const [dark, setDark] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const [pageHeaderProps, setPageHeaderProps] = React.useState({
    title: '我的工作台',
    breadcrumb: [
      {
        path: '/workbench',
        breadcrumbName: '工作台',
      },
      {
        path: '/workbench/my',
        breadcrumbName: '我的工作台',
      },
    ],
  });
  return (
    <Layout
      style={{ transform: "scale(1)" }}
      layout={layout}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      themeColor={themeColor}
      onSetting={(value) => {
        if (value.themeColor) {
          setThemeColor(value.themeColor);
        } else if (value.layout) {
          setLayout(value.layout);
        }
      }}
      pathname={pathname}
      pageHeaderProps={pageHeaderProps}
      logo="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico"
      title="中后台通用模版"
      menus={menus}
      menuClick={({ path, currentBreadcrumb }) => {
        setPathName(path);
        setPageHeaderProps({
          ...currentBreadcrumb,
          extra: <Button type="primary">添加</Button>,
        });
      }}
      dark={dark}
      onDarkChange={(dark) => {
        setDark(dark);
      }}
      footerRender={() => <div>这个是底部的说明</div>}
      siderFooterRender={(collapsed) =>
        collapsed ? null : <div>这个 sider 说明</div>
      }
      rightContentProps={{
        extra: <h4>自定义渲染区域</h4>,
        userName: '测试用户',
        droplist: (
          <Menu
            style={{
              width: 120,
            }}
            menus={[
              {
                path: 'logout',
                icon: <IconUser />,
                label: '退出登录',
              },
            ]}
            menuClick={(openkey, selectKey) => {
              console.log('退出登录');
            }}
          />
        ),
        avatarUrl:
          'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/user-logo.png',
      }}
    >
      {pathname}
    </Layout>
  );
};
```

> 接入项目的时候，使用 AppLayout 内置的 listenHashChange 可监听 hash

```tsx
useEffect(() => {
  const removeListener = layoutRef.current.listenHashChange(({ currentBreadcrumb }) => {
    breadcrumbStore.title = currentBreadcrumb.title;
    breadcrumbStore.breadcrumb = currentBreadcrumb.breadcrumb;
  });
  return removeListener;
}, []);

// 接入项目的时候，只需要这行代码，改变 hash 即可
menuClick={({ path, currentBreadcrumb }) => {
  location.hash = path
}}
```

## API

```API
/packages/design/src/navigation/layout/type.tsx
```

## RightProps

```API
/packages/design/src/navigation/layout/right.type.tsx
```
