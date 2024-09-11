## 基本使用

```jsx | react
import { Alert, Space } from '@yl-d/design';

export default () => {
  return (
    <Space gap={20} direction="vertical" style={{ width: '100%' }}>
      <Alert message="成功提示框" type="success" />
      <Alert message="信息提示框" type="info" />
      <Alert
        message="警告提示框"
        type="warning"
        closable
        onClose={() => {
          console.log('close');
        }}
      />
      <Alert
        message="错误提示框"
        type="error"
        closable
        onClose={() => {
          console.log('close');
        }}
      />
    </Space>
  );
};
```
