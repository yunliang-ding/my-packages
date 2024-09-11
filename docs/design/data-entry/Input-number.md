## 基本使用

```jsx | react
import { useState } from 'react';
import { InputNumber, Switch } from '@yl-d/design';

export default () => {
  const [disabled, setdisabled] = useState(false);
  return (
    <>
      <InputNumber
        placeholder="普通输入框"
        style={{ width: 100 }}
        disabled={disabled}
      />
      <br />
      <InputNumber
        step={0.1}
        placeholder="设置step"
        style={{ width: 100 }}
        disabled={disabled}
      />
      <br />
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setdisabled.bind(null, !disabled)}
      />
    </>
  );
};
```