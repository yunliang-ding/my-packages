> 基于 `DragWrapper` 扩展的单列拖拽组件

## 基本使用

```tsx | react | var(--bg-color-2)
import { DragList } from '@yl-d/design';

export default () => {
  return (
    <DragList
      width={100}
      onChange={(list) => {
        console.log(list);
      }}
      items={[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
        return {
          key: i,
          content: `选项${i}`,
        };
      })}
    />
  );
};
```

## API

```API
/packages/design/src/drag/list/type.tsx
```