## 基本使用

```jsx | react
import { Breadcrumb } from '@yl-d/design';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          breadcrumbName: 'Home',
        },
        {
          breadcrumbName: 'Channel',
        },
        {
          breadcrumbName: 'News',
        },
      ]}
    />
  );
};
```

## 分隔符

```jsx | react
import { Breadcrumb } from '@yl-d/design';
import { IconHome, IconRight } from '@yl-d/icon';

export default () => {
  return (
    <Breadcrumb
      separator={<IconRight />}
      items={[
        {
          icon: <IconHome />,
          breadcrumbName: 'Home',
        },
        {
          breadcrumbName: 'Channel',
        },
        {
          breadcrumbName: 'News',
        },
      ]}
    />
  );
};
```

## API

```API
/packages/design/src/navigation/breadcrumb/type.tsx
```
