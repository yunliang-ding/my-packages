import React from 'react';
import { useEffect } from 'react';
import Layout from './layout';
import Loading from './loading';
import uiStore from '@/store/ui';
import userStore from '@/store/user';

export default ({ routerInterceptors }) => {
  const { fetchUserInfo } = userStore.useSnapshot();
  const { status } = uiStore.useSnapshot();
  useEffect(() => {
    fetchUserInfo(uiStore);
  }, []);
  let Vnode: any = null;
  if (status === 'loading') {
    Vnode = <Loading />;
  } else if (status === 'error') {
    Vnode = (
      <h1
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        系统异常，请稍后重试!
      </h1>
    );
  } else {
    Vnode = <Layout routerInterceptors={routerInterceptors} />;
  }
  return Vnode;
};
