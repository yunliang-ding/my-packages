## 基本使用

```jsx | react
import { Badge, Space } from '@yl-d/design';
import { IconEye } from '@yl-d/icon';

export default () => {
  return (
    <Space>
      <Badge count={2}>Default</Badge>
      <Badge count={2} color="#1890ff">
        Blue
      </Badge>
      <Badge count={2} color="red">
        Red
      </Badge>
      <Badge dot>Dot</Badge>
      <Badge color="transparent" count={<IconEye style={{ color: 'red' }} />}>
        图标
      </Badge>
    </Space>
  );
};
```

## API

```API
/packages/design/src/data-display/badge/type.tsx
```
