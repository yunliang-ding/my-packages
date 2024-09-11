## 基本使用

```jsx | react
import { Tooltip } from '@yl-d/design';

export default () => {
  return (
    <Tooltip title={<>这个是一个描述信息</>}>
      Tooltip will show on mouse enter.
    </Tooltip>
  );
};
```

## 方向/主题

```jsx | react
import { Tooltip, Button } from '@yl-d/design';

export default () => {
  return (
    <>
      <Tooltip title={<>这个是一个描述信息</>} placement="top">
        <Button>Top</Button>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title={<>这个是一个描述信息</>} placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <br />
      <br />
      <br />
      <br />
      <Tooltip title={<>这个是一个描述信息</>} placement="left">
        <Button>Left</Button>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title={<>这个是一个描述信息</>} placement="right">
        <Button>Right</Button>
      </Tooltip>
    </>
  );
};
```

## API

```API
/packages/design/src/data-display/tooltip/type.tsx
```