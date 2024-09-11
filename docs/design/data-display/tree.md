## 基本使用

```jsx | react
import { Tree } from '@yl-d/design';

export default () => {
  const treeData = [
    {
      title: 'Trunk 0-0',
      key: '0-0',
      selectable: false,
      children: [
        {
          title: 'Branch 0-0-2',
          key: '0-0-2',
          selectable: false,
          children: [
            {
              title: 'Leaf',
              key: '0-0-2-1',
              children: [
                {
                  title: 'Leafsss 0-0-2',
                  key: '0-0-2-1-0',
                  children: [
                    {
                      title: 'Leaf',
                      key: '0-0-2-1-0-0',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Trunk 0-1',
      key: '0-1',
      children: [
        {
          title: 'Branch 0-1-1',
          key: '0-1-1',
          children: [
            {
              title: 'Leaf',
              key: '0-1-1-0',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Tree
      style={{
        width: 200,
      }}
      treeData={treeData}
      expandedKeys={['0-0']}
      selectedKey="0-0-2"
      onSelect={(e) => {
        console.log('onSelected', e);
      }}
    />
  );
};
```

## 支持多选

```jsx | react
import { Tree } from '@yl-d/design';

export default () => {
  const treeData = [
    {
      title: 'Trunk 0-0',
      key: '0-0',
      children: [
        {
          title: 'Branch 0-0-2',
          key: '0-0-2',
          selectable: false,
          children: [
            {
              title: 'Leaf',
              key: '0-0-2-1',
              children: [
                {
                  title: 'Leafsss 0-0-2',
                  key: '0-0-2-1-0',
                  children: [
                    {
                      title: 'Leaf',
                      key: '0-0-2-1-0-0',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Trunk 0-1',
      key: '0-1',
      children: [
        {
          title: 'Branch 0-1-1',
          key: '0-1-1',
          children: [
            {
              title: 'Leaf',
              key: '0-1-1-0',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Tree
      style={{
        width: 200,
      }}
      treeData={treeData}
      checkable
      expandedKeys={['0-0', '0-0-2']}
      checkedKeys={['0-0-2-1']}
      onChecked={(e) => {
        console.log('onChecked', e);
      }}
    />
  );
};
```

## API

```API
/packages/design/src/data-display/tree/type.tsx
```