## useRefresh

> 会返回一个函数，调用该函数会强制组件重新渲染。

```tsx | react
import { useRefresh } from "@yl-d/hooks";
import { Button } from '@yl-d/design';

export default () => {
  const refresh = useRefresh();
  return (
    <div>
      <Button onClick={refresh}>刷新</Button>
      &nbsp;&nbsp;
      now: {Date.now()}
    </div>
  );
};
```