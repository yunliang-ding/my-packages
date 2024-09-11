## 基本使用

```jsx | react
import { useState } from 'react';
import { TimePicker, Switch } from '@yl-d/design';

export default () => {
  const [value, onChange] = useState('09:00:00');
  const [disabled, setDisabled] = useState();
  return (
    <>
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setDisabled.bind(null, !disabled)}
      />
      <br />
      <br />
      <TimePicker
        placeholder="请选择"
        disabled={disabled}
        style={{ width: 120 }}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
```

## 区间选择

```jsx | react
import { useState } from 'react';
import { RangeTimePicker } from '@yl-d/design';

export default () => {
  const [value, onChange] = useState(['09:00:00', '11:30:00']);
  return (
    <RangeTimePicker
      style={{ width: 220 }}
      value={value}
      onChange={onChange}
    />
  );
};
```
