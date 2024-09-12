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

## 展开收起

```jsx | react | var(--bg-color-2)
import { Space, Card } from '@yl-d/design';

export default () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Card title="数据展示" expandable>
        这里是数据展示
      </Card>

      <Card title="数据录入" expandable>
        这里是数据录入
      </Card>

      <Card title="用户反馈" expandable>
        这里是用户反馈
      </Card>
    </Space>
  );
};
```

## API

```API
/packages/design/src/data-display/card/type.tsx
```
