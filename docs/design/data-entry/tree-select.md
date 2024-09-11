## 基本使用

```jsx | react
import { useState } from 'react';
import { TreeSelect, Switch } from '@yl-d/design';

export default () => {
  const [disabled, setDisabled] = useState(false);
  const treeData = [
    {
      key: 'node1',
      title: 'Trunk',
      selectable: false,
      children: [
        {
          key: 'node2',
          title: 'Leaf1',
        },
      ],
    },
    {
      key: 'node3',
      title: 'Trunk2',
      selectable: false,
      children: [
        {
          key: 'node4',
          title: 'Leaf2',
        },
        {
          key: 'node5',
          title: 'Leaf3',
        },
      ],
    },
  ];
  return (
    <>
      <TreeSelect
        treeData={treeData}
        disabled={disabled}
        expandedKeys={['node1']}
        value="node2"
        style={{ width: 200 }}
        onChange={(value) => {
          console.log('onChange', value);
        }}
      />
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

## 多选

```jsx | react
import { TreeSelect } from '@yl-d/design';

export default () => {
  const treeData = [
    {
      key: 'node1',
      title: 'Trunk',
      children: [
        {
          key: 'node2',
          title: 'Leaf1',
        },
      ],
    },
    {
      key: 'node3',
      title: 'Trunk2',
      children: [
        {
          key: 'node4',
          title: 'Leaf2',
        },
        {
          key: 'node5',
          title: 'Leaf3',
        },
      ],
    },
  ];
  return (
    <TreeSelect
      checkable
      value={['node1', 'node2']}
      expandedKeys={['node1']}
      treeData={treeData}
      style={{ width: 200 }}
      onChange={(value) => {
        console.log('onChange', value);
      }}
    />
  );
};
```

## 异步查询

```jsx | react
import { TreeSelect } from '@yl-d/design';

export default () => {
  return (
    <TreeSelect
      checkable
      value={['node1', 'node2']}
      expandedKeys={['node1']}
      treeData={async (formInstance) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log('formInstance', formInstance); // 仅在 form 包裹下可以拿到
        return [
          {
            key: 'node1',
            title: 'Trunk',
            children: [
              {
                key: 'node2',
                title: 'Leaf1',
              },
            ],
          },
          {
            key: 'node3',
            title: 'Trunk2',
            children: [
              {
                key: 'node4',
                title: 'Leaf2',
              },
              {
                key: 'node5',
                title: 'Leaf3',
              },
            ],
          },
        ];
      }}
      style={{ width: 200 }}
      onChange={(value) => {
        console.log('onChange', value);
      }}
    />
  );
};
```

## API

```API
/packages/design/src/data-entry/tree-select/type.tsx
```
