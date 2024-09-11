## 基本使用

```jsx | react
import { Empty } from '@yl-d/design';

export default () => {
  return <Empty />;
};
```

## 自定义图标和文案

```jsx | react
import { Empty } from '@yl-d/design';
import { IconSearch } from '@yl-d/icon';

export default () => {
  return (
    <Empty icon={<IconSearch style={{ fontSize: 50 }} />} label="查询中...." />
  );
};
```

## API

```API
/packages/design/src/data-display/empty/type.tsx
```
