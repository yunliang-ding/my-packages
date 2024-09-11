## 基本使用

```jsx | react
import { useState } from 'react';
import { Checkbox } from '@yl-d/design';

export default () => {
  const [checked, setCheck] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => {
        setCheck(e.target.checked);
      }}
    >
      单一选择
    </Checkbox>
  );
};
```

## 选项组

```jsx | react
import { useState } from 'react';
import { CheckGroup } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState(['React']);
  const options = [
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
  ];
  console.log('checkbox value is: ', value);
  return (
    <CheckGroup
      options={options}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};
```


## 异步查询

```jsx | react
import { CheckGroup } from '@yl-d/design';

export default () => {
  return (
    <CheckGroup
      onChange={(v) => {
        console.log('onChange', v);
      }}
      options={async (formInstance) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log('formInstance', formInstance); // 仅在 form 包裹下可以拿到
        return [
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
            disabled: true,
          },
          {
            label: 'React',
            value: 'React',
          },
          {
            label: 'Vue',
            value: 'Vue',
          },
        ];
      }}
    />
  );
};
```

## 垂直方向

> 通过 direction="vertical" 设置为垂直方向

```jsx | react
import { useState } from 'react';
import { CheckGroup } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState(['React']);
  const options = [
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
  ];
  console.log('checkbox value is: ', value);
  return (
    <CheckGroup
      options={options}
      direction="vertical"
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};
```

## 全选

> 设置 showCheckAll 属性可以实现全选。

```jsx | react
import { useState } from 'react';
import { CheckGroup } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState([]);
  const options = [
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
  ];
  return (
    <CheckGroup
      showCheckAll
      options={options}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};
```

## API

```API
/packages/design/src/data-entry/checkbox/type.tsx
```
