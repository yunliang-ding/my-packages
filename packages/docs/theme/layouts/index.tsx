import React, { useEffect, useRef, useState } from 'react';
import Layout from './layout';

export default () => {
  const codeRef: any = useRef({});
  const {
    yldCodeEditor: { CodeEditor },
  } = window as any;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    codeRef.current.getMonacoInstance().then(async () => {
      setLoading(false);
    });
  }, []);
  return loading ? (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CodeEditor codeRef={codeRef} style={{ display: 'none' }} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          backgroundColor: '#eee',
        }}
      >
        <svg className="loading" viewBox="0 0 1024 1024" width="48" height="48">
          <path
            d="M512 96a416 416 0 0 0 0 832v-104A312 312 0 1 1 824 512H928A416 416 0 0 0 512 96z"
            fill="#165dff"
          ></path>
        </svg>
      </div>
    </div>
  ) : (
    <Layout />
  );
};
