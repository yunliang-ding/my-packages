import React from 'react';
import { Spin } from '@yl-d/design';

export default () => {
  return (
    <Spin
      style={{
        background: '#eee',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};
