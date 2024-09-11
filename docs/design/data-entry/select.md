## 基本使用

```jsx | react
import { useState } from 'react';
import { Select, Switch } from '@yl-d/design';

export default () => {
  const [disabled, setdisabled] = useState(false);
  return (
    <>
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setdisabled.bind(null, !disabled)}
      />
      <br />
      <br />
      <Select
        disabled={disabled}
        placeholder="请选择"
        onChange={(v) => {
          console.log('onChange', v);
        }}
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
        ]}
      />
    </>
  );
};
```

## 异步查询

```jsx | react
import { Select } from '@yl-d/design';

export default () => {
  return (
    <Select
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

## 模糊查询

```jsx | react
import { Select } from '@yl-d/design';

export default () => {
  return (
    <Select
      showSearch
      placeholder="输入关键字查询"
      onSearch={(value) => {
        console.log('onSearch', value);
      }}
      onChange={(v) => {
        console.log('onChange', v);
      }}
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
        },
      ]}
      style={{ width: 200 }}
    />
  );
};
```

## 下拉多选

```jsx | react
import { Select, Checkbox } from '@yl-d/design';

export default () => {
  return (
    <Select
      multiple
      style={{ width: 300 }}
      onChange={(v) => {
        console.log('onChange', v);
      }}
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
        },
      ]}
    />
  );
};
```

## 设置多选 maxTagCount

```jsx | react
import { Select, Checkbox } from '@yl-d/design';

export default () => {
  return (
    <Select
      multiple
      style={{ width: 300 }}
      maxTagCount={3}
      onChange={(v) => {
        console.log('onChange', v);
      }}
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
        },
      ]}
    />
  );
};
```

## API

```API
/packages/design/src/data-entry/select/type.tsx
```
