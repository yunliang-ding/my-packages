# 基本使用

```jsx | react
import { Notification, Button, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Button
        style={{ background: '#00b42a', color: '#fff' }}
        onClick={() => {
          Notification.success('成功提示!');
        }}
      >
        成功提示
      </Button>
      <Button
        style={{ background: '#d81e06', color: '#fff' }}
        onClick={() => {
          Notification.error('错误提示,错误提示,错误提示,错误提示错误提示,错误提示,错误提示,错误提示!');
        }}
      >
        错误提示
      </Button>
      <Button
        style={{ background: '#ff7d00', color: '#fff' }}
        onClick={() => {
          Notification.warning('警告提示!');
        }}
      >
        警告提示
      </Button>
      <Button
        style={{ background: '#39a9f4', color: '#fff' }}
        onClick={() => {
          Notification.info('信息提示!');
        }}
      >
        信息提示
      </Button>
      <Button
        onClick={() => {
          Notification.clear();
        }}
      >
        Close All
      </Button>
    </Space>
  );
};
```
