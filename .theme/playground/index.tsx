import React, { useEffect, useState } from 'react';
import { ReactPlayground, decode } from '@yl-d/shared';
import { mdRequire } from '../../.lyr/router';
import source from '../../.theme/markdown-viewer-source';

const syncRequire = {};

export default () => {
  (window as any).monocoTheme = 'vs-dark';
  const [needLoad, setNeedLoad] = useState(true);
  const { tabs, code, previewOnly } = JSON.parse(
    decode(location.hash.split('?')[1]),
  );
  const dependencies = {};
  tabs.forEach((key: string) => {
    if (source[key]) {
      dependencies[key] = source[key];
    }
  });
  // 解析异步 mdRequire
  const initRequire = async () => {
    const keys = Object.keys(mdRequire);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (
        Object.prototype.toString.call(mdRequire[key]) == '[object Promise]'
      ) {
        syncRequire[key] = await mdRequire[key];
      } else {
        syncRequire[key] = mdRequire[key];
      }
    }
    setNeedLoad(false);
  };
  useEffect(() => {
    if (needLoad) {
      initRequire();
    }
  }, []);
  return needLoad ? (
    <h4 style={{ margin: 12 }}>loading...</h4>
  ) : (
    <ReactPlayground
      showLogo
      previewOnly={previewOnly}
      style={{ width: '100vw', height: '100vh' }}
      require={syncRequire}
      code={code}
      dependencies={dependencies}
    />
  );
};
