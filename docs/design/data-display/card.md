## 基本使用

```jsx | react
import { Card } from '@yl-d/design';

export default () => {
  return (
    <Card title="Card Title" style={{ width: 360 }}>
      这里是描述信息
    </Card>
  );
};
```

## 额外操作

```jsx | react
import { Space, Card } from '@yl-d/design';
import {
  IconDelete,
  IconRefresh,
  IconMore,
  IconCloudDownload,
} from '@yl-d/icon';

export default () => {
  return (
    <Card
      title="操作卡片"
      extra={
        <Space>
          <IconRefresh hover />
          <IconDelete hover />
        </Space>
      }
      footer={
        <Space>
          <IconMore hover />
          <IconCloudDownload hover />
        </Space>
      }
    >
      这里是带额外操作的卡片
    </Card>
  );
};
```

## API

```API
/packages/design/src/data-display/card/type.tsx
```
