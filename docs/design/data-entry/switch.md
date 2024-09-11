## 基本使用

```jsx | react
import { Switch } from '@yl-d/design';

export default () => {
  return <Switch />;
};
```

## 显示文本

```jsx | react
import { Switch, Space } from '@yl-d/design';
import { IconCheck, IconClose } from '@yl-d/icon';

export default () => {
  return (
    <Space>
      <Switch checkedChildren="开" unCheckedChildren="关" />
      <Switch checkedChildren="1" unCheckedChildren="0" value={false} />
      <Switch
        checkedChildren={<IconCheck style={{ fontSize: 13 }} />}
        unCheckedChildren={<IconClose style={{ fontSize: 13 }} />}
      />
    </Space>
  );
};
```

## 禁用状态

```jsx | react
import { useState } from 'react';
import { Switch, Button, Space } from '@yl-d/design';

export default () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Space>
      <Switch disabled={disabled} />
      <Button type="primary" onClick={setDisabled.bind(null, !disabled)}>
        Disabled
      </Button>
    </Space>
  );
};
```

## 自动加载状态

```jsx | react
import { Switch, Space } from '@yl-d/design';

export default () => {
  return (
    <Switch
      value={false}
      checkedChildren="开"
      unCheckedChildren="关"
      onClick={() => {
        return new Promise((res) => setTimeout(res, 1000));
      }}
    />
  );
};
```
