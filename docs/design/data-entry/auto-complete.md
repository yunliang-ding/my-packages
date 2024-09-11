## 基本使用

```jsx | react
import { useState } from 'react';
import { Space, AutoComplete, Switch } from '@yl-d/design';
import { IconQq, IconEmail } from '@yl-d/icon';

const options = [
  {
    value: '163.com',
    label: (
      <Space>
        <IconEmail style={{ color: '#1e80ff' }} />
        <span>163.com</span>
      </Space>
    ),
  },
  {
    value: 'qq.com',
    label: (
      <Space>
        <IconQq style={{ color: '#1e80ff' }} />
        <span>qq.com</span>
      </Space>
    ),
  },
];

export default () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <AutoComplete
        prefix="@"
        options={options}
        style={{ width: 200 }}
        placeholder="请输入邮箱"
        disabled={disabled}
        onChange={(v) => {
          console.log('onChange', v);
        }}
      />
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

### API

```API
/packages/design/src/data-entry/auto-complete/type.tsx
```
