import React from 'react';
import { ReactPlayground, decode } from '@yl-d/shared';
import { mdRequire } from '../../.lyr/router';
import source from '../../.theme/markdown-viewer-source';

export default () => {
  (window as any).monocoTheme = 'vs-dark';
  const { tabs, code, previewOnly } = JSON.parse((decode(location.hash.split("?")[1])));
  const dependencies = {};
  tabs.forEach((key: string) => {
    if (source[key]) {
      dependencies[key] = source[key];
    }
  });
  return (
    <ReactPlayground
      showLogo
      previewOnly={previewOnly}
      style={{ width: '100vw', height: '100vh' }}
      require={mdRequire}
      code={code}
      dependencies={dependencies}
    />
  );
};
