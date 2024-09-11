## 基本使用

```jsx | react
import { useState } from 'react';
import { DatePicker, Switch } from '@yl-d/design';

export default () => {
  const [disabled, setDisabled] = useState(false);
  const [value, onChange] = useState('2024-08-24');
  return (
    <>
      <DatePicker
        style={{ width: 200 }}
        disabled={disabled}
        value={value}
        onChange={onChange}
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

## 区间选择

```jsx | react
import { useState } from 'react';
import { RangeDatePicker } from '@yl-d/design';

export default () => {
  const [value, onChange] = useState(['2024-07-28', '2024-08-28']);
  return (
    <RangeDatePicker
      style={{ width: 424 }}
      value={value}
      onChange={onChange}
    />
  );
};
```
