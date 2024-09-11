> 基于 `DragWrapper` 扩展的拖拽表单，可基于此设计表单设计器

## 单层布局

```tsx | react
import { DragForm } from '@yl-d/design';
import items from '@/design/schema4.tsx';

export default () => {
  const [schema, setSchema] = React.useState(items);
  const [selectedKey, setSelectedKey] = React.useState();
  return (
    <DragForm
      title="单层布局"
      column={2}
      items={schema}
      onChange={(newSchema) => {
        setSchema(newSchema);
        console.log('onChange', newSchema);
      }}
      selectedKey={selectedKey}
      onSelected={(itemKey) => {
        setSelectedKey(itemKey);
        console.log('onSelected', itemKey);
      }}
    />
  );
};
```

## 嵌套布局

```tsx | react
import { DragForm } from '@yl-d/design';
import items from '@/design/schema5.tsx';

export default () => {
  const [schema, setSchema] = React.useState(items);
  const [selectedKey, setSelectedKey] = React.useState();
  return (
    <DragForm
      title="嵌套布局"
      items={schema}
      onChange={(newSchema) => {
        setSchema(newSchema);
        console.log('onChange', newSchema);
      }}
      selectedKey={selectedKey}
      onSelected={(itemKey) => {
        setSelectedKey(itemKey);
        console.log('onSelected', itemKey);
      }}
    />
  );
};
```

## 子表单容器

```tsx | react
import { DragForm } from '@yl-d/design';
import items from '@/design/schema8.tsx';

export default () => {
  const [schema, setSchema] = React.useState(items);
  const [selectedKey, setSelectedKey] = React.useState();
  return (
    <DragForm
      title="子表单容器"
      column={3}
      items={schema}
      onChange={(newSchema) => {
        setSchema(newSchema);
        console.log('onChange', newSchema);
      }}
      selectedKey={selectedKey}
      onSelected={(itemKey) => {
        setSelectedKey(itemKey);
        console.log('onSelected', itemKey);
      }}
    />
  );
};
```

## 添加表单元素

```tsx | react
import { Button, DragWrapper, DragForm } from '@yl-d/design';

export default () => {
  const [schema, setSchema] = React.useState();
  const [selectedKey, setSelectedKey] = React.useState();
  return (
    <div>
      <DragWrapper
        onChange={(item) => {
          console.log(item);
        }}
        accept={false}
        items={[
          {
            type: 'Input',
            name: 'input',
            label: '输入框',
          },
          {
            type: 'Select',
            name: 'select',
            label: '下拉选',
          },
          {
            type: 'FormList',
            name: 'formList',
            label: '子表单容器',
            span: 2,
            props: {
              label: '输入项',
              children: [],
            },
          },
          {
            type: 'TableList',
            name: 'tableList',
            span: 2,
            label: '编辑表格容器',
            props: {
              children: [],
            },
          },
          {
            type: 'FieldSet',
            name: 'feldSet',
            span: 2,
            label: '空容器',
            props: {
              children: [],
            },
          },
        ].map((schema) => {
          return {
            key: schema.type,
            schema: {
              ...schema,
              name: `${schema.name}-${Math.random()}`,
            },
            content: (
              <span
                style={{
                  margin: '0 10px 10px 0',
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: 'var(--bg-color-2)'
                }}
              >
                {schema.label}
              </span>
            ),
          };
        })}
      />
      <DragForm
        title="添加表单元素"
        column={2}
        items={schema}
        onChange={(newSchema) => {
          setSchema(newSchema);
          console.log('onChange', newSchema);
        }}
        selectedKey={selectedKey}
        onSelected={(itemKey) => {
          setSelectedKey(itemKey);
          console.log('onSelected', itemKey);
        }}
      />
    </div>
  );
};
```

## API

```API
/packages/design/src/drag/form/type.tsx
```
