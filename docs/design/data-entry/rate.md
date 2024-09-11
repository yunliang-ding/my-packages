## 基本使用

```jsx | react
import { useState } from 'react';
import { Rate, Switch } from '@yl-d/design';

export default () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <Rate disabled={disabled} />
      <br />
      <br />
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setDisabled.bind(null, !disabled)}
      />
    </>
  );
};
```

## 自定义 icon

```jsx | react
import { Rate } from '@yl-d/design';
import { IconThumbUp } from '@yl-d/icon';

export default () => {
  return <Rate character={<IconThumbUp />} />;
};
```

## 支持清空

```jsx | react
import { Rate } from '@yl-d/design';

export default () => {
  return <Rate allowClear />;
};
```

## 半选

> 指定 allowHalf 来支持半选

```jsx | react
import { Rate } from '@yl-d/design';

export default () => {
  return <Rate allowHalf value={2.5} />;
};
```

## 笑脸

```jsx | react
import { Rate } from '@yl-d/design';

export default () => {
  return <Rate grading />;
};
```


## API

```API
/packages/design/src/data-entry/rate/type.tsx
```