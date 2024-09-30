export const index = ({
  version,
  noticeInfo,
  logo,
}) => `import { ReactElement, ReactNode, useEffect } from 'react';
import ReactDom from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/.theme/index';
import ErrorBoundary from '@/.theme/error-boundary';
import router from './router';
import AuthRouter from './auth';
import { ConfigProps } from './type';
import axios, { AxiosRequestConfig } from 'axios';
import breadcrumbStore from '@/store/breadcrumb';
import { Outlet } from 'react-router-dom';

import '@/global.less';

const store = {
  request: axios.create({}),
  initData: {
    auth: [''],
    userInfo: {},
  },
};

export const request = store.request;

export const initData = store.initData;

const App = ({ routerInterceptors }) => {
  const element = createHashRouter([
    {
      path: '/',
      element: <Layout routerInterceptors={routerInterceptors} />,
      errorElement: <ErrorBoundary />,
      children: router
        .map((item) => ({
          ...AuthRouter(item),
          errorElement: <ErrorBoundary />,
        }))
        .concat([
          {
            path: '*',
            element: <h3>您访问的页面不存在!</h3>,
          },
        ] as any),
    },
  ]);
  return <RouterProvider router={element} />;
};

interface AppProps {
  element?: string;
  loading?: () => ReactElement;
  getInitData?: () => Promise<{
    auth: string[];
    userInfo: any;
  }>;
  axiosConfig?: AxiosRequestConfig & {
    requestInterceptors?: any;
    responseInterceptors?: any;
  };
  routerInterceptors?: () => void | ReactNode;
}

export const runApp = async ({
  element = '#root',
  getInitData = async () => ({
    auth: [''],
    userInfo: {},
  }),
  loading = () => <span>加载中...</span>,
  axiosConfig = {},
  routerInterceptors
}: AppProps) => {
  /** 创建 axios 实例 */
  const axiosinstance = axios.create(axiosConfig);
  if (typeof axiosConfig.requestInterceptors === 'function') {
    axiosinstance.interceptors.request.use(axiosConfig.requestInterceptors);
  }
  if (typeof axiosConfig.responseInterceptors === 'function') {
    axiosinstance.interceptors.response.use(axiosConfig.responseInterceptors);
  }
  Object.assign(store.request, axiosinstance); // 覆盖下
  ReactDom.render(loading(), document.querySelector(element));
  Object.assign(store.initData, await getInitData()); // 覆盖下
  ReactDom.render(<App routerInterceptors={routerInterceptors} />, document.querySelector(element));
};

export const defineConfig = (props: ConfigProps) => {
  return props;
};

interface BreadCrumbHeaderProps {
  title?: ReactNode;
  extra?: ReactNode[];
  breadcrumb?: {
    icon?: ReactNode;
    path?: string;
    breadcrumbName?: string;
  }[]
}

export const useBreadCrumb = () => {
  useEffect(() => {
    return () => {
      Object.assign(breadcrumbStore, {
        title: '',
        breadcrumb: undefined,
        extra: [],
      });
    };
  }, []);
  return {
    update: (options: BreadCrumbHeaderProps) => {
      setTimeout(() => {
        Object.assign(breadcrumbStore, options);
      }, 10);
    },
  };
};

export const KeepAliveOutlet = () => {
  return (
    <div className="router-keep-alive-contianer">
      <Outlet />
    </div>
  );
};

export const version = "${version}";

export const noticeInfo = "${noticeInfo}";

export const logo = "${logo}";
`;

export const auth = `import { initData } from './index';
import { render } from 'react-dom';

const cacheKeeepAlive = {};

const keepAliveComponent = (component: any, path: any) => () => {
  const idPath = path.replaceAll('/', '');
  if (component.type.keepAlive) {
    // 延迟下为了拿到 keeplive 节点
    setTimeout(() => {
      const wrapper = document.querySelector('.router-keep-alive-contianer');
      if (!cacheKeeepAlive[path]) {
        cacheKeeepAlive[path] = true;
        let target: any = wrapper?.querySelector(idPath);
        if (!target) {
          target = document.createElement('div');
          target.id = idPath;
          target.style.display = 'block';
          wrapper?.appendChild(target);
        }
        render(component, target); // 挂在到这个容器下
      }
      if (cacheKeeepAlive[path]) {
        wrapper?.childNodes.forEach((item: any) => {
          item.style.display = item.id === idPath ? 'block' : 'none';
        });
      }
    }, 200);
    return null;
  } else {
    return <div id={idPath}>{component}</div>
  }
};

export default ({ path, component }: { path: string; component: any }) => {
  const hasAuth =
    initData.auth.includes(component.type.auth) ||
    component.type.auth === undefined;
  return {
    path,
    Component: hasAuth ? (
      keepAliveComponent(component, path)
    ) : (
      <h3>您暂无权限访问该页面!</h3>
    ),
  };
};
`;

export const getLyrConfig = ({
  packageName,
}) => `import { defineConfig } from 'lyr';

export default defineConfig({
  title: '${packageName}',
  favicon: 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  link: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.css',
  ],
  devScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.js',
  ],
  buildScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.js',
  ],
});
`;
