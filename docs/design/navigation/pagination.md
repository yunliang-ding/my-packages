## Pagination 分页器

```jsx | react
import { Pagination } from '@yl-d/design';

export default () => {
  return (
    <Pagination
      pageNum={5}
      pageSize={10}
      total={600}
      showJumper
      pageSizeOptions={[10, 20, 30]}
      onPageSizeChange={(e) => {
        console.log(e);
      }}
      onChange={(e) => {
        console.log(e);
      }}
    />
  );
};
```

## API

```API
/packages/design/src/navigation/pagination/type.tsx
```