## 基本使用

```jsx | react
import { useState } from 'react';
import { Radio } from '@yl-d/design';

export default () => {
  const [checked, setCheck] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={(e) => {
        setCheck(e.target.checked);
      }}
    >
      单一选择
    </Radio>
  );
};
```

## 选项组

```jsx | react
import { useState } from 'react';
import { RadioGroup, Switch } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState('React');
  const [disabled, setdisabled] = useState('');
  return (
    <>
      <RadioGroup
        disabled={disabled}
        options={[
          {
            label: 'Html',
            value: 'Html',
          },
          {
            label: 'Css',
            value: 'Css',
          },
          {
            label: 'JavaScript',
            value: 'JavaScript',
          },
          {
            label: 'React',
            value: 'React',
          },
          {
            label: 'Vue',
            value: 'Vue',
            disabled: true,
          },
        ]}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
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

## 垂直布局

> 通过 direction="vertical" 设置为垂直方向

```jsx | react
import { RadioGroup } from '@yl-d/design';

export default () => {
  return (
    <RadioGroup
      value="Html"
      direction="vertical"
      options={[
        {
          label: 'Html',
          value: 'Html',
        },
        {
          label: 'Css',
          value: 'Css',
        },
        {
          label: 'JavaScript',
          value: 'JavaScript',
        },
        {
          label: 'React',
          value: 'React',
        },
        {
          label: 'Vue',
          value: 'Vue',
          disabled: true,
        },
      ]}
    />
  );
};
```

## 按钮类型

```jsx | react
import { useState } from 'react';
import { RadioGroup } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState('React');
  return (
    <>
      <RadioGroup
        type="button"
        options={[
          {
            label: 'Html',
            value: 'Html',
          },
          {
            label: 'Css',
            value: 'Css',
          },
          {
            label: 'JavaScript',
            value: 'JavaScript',
          },
          {
            label: 'React',
            value: 'React',
          },
          {
            label: 'Vue',
            value: 'Vue',
            disabled: true,
          },
        ]}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </>
  );
};
```

## API

```API
/packages/design/src/data-entry/radio/type.tsx
```
