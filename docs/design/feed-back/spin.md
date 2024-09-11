## 基本使用

```jsx | react
import { useState } from 'react';
import { Spin, Switch, Empty } from '@yl-d/design';

export default () => {
  const [loading, setloading] = useState(true);
  return (
    <>
      <Switch
        checkedChildren="关闭"
        unCheckedChildren="开启"
        checked={loading}
        onChange={setloading.bind(null, !loading)}
      />
      <br />
      <br />
      <div
        style={{
          width: 400,
          height: 200,
          border: '1px solid var(--border-color)',
        }}
      >
        <Spin loading={loading}>
          <Empty />
        </Spin>
      </div>
      <br />
      <div
        style={{
          width: 400,
          height: 200,
          border: '1px solid var(--border-color)',
        }}
      >
        <Spin loading={loading} message="加载中...">
          <Empty label="提示文案" />
        </Spin>
      </div>

      <br />
    </>
  );
};
```
