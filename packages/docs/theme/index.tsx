import React from 'react';
import ReactDom from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/index';
import ErrorBoundary from './error-boundary';
import Playground from './playground';
import router from '@/.lyr/router';
import './global.less';

const App = () => {
  const element = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: router
        .map((item) => ({
          ...item,
          element: item.component,
          errorElement: <ErrorBoundary />,
        }))
        .concat([
          {
            path: '*',
            element: <h3 style={{ paddingLeft: 10 }}>您访问的页面不存在!</h3>,
          },
        ]),
    },
    {
      path: '/~playground',
      element: <Playground />,
      errorElement: <ErrorBoundary />,
    },
  ]);
  return <RouterProvider router={element} />;
};

interface AppProps {
  element?: string;
}

export const runApp = async ({ element = '#root' }: AppProps) => {
  ReactDom.render(<App />, document.querySelector(element));
};