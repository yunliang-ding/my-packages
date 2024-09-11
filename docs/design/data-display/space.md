## 基本使用

```jsx | react
import { Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <div>描述1</div>
      <div>描述2</div>
      <div>描述3</div>
    </Space>
  );
};
```

## 垂直使用

```jsx | react
import { Space } from '@yl-d/design';

export default () => {
  return (
    <Space gap={12} direction="vertical">
      <div>描述1</div>
      <div>描述2</div>
      <div>描述3</div>
    </Space>
  );
};
```

## API

```API
/packages/design/src/data-display/space/type.tsx
```