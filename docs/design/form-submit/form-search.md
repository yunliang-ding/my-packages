## 基本使用

```jsx | react | var(--bg-color-2)
import { Search } from '@yl-d/design';

export default () => {
  return (
    <Search
      column={3}
      schema={[
        {
          type: 'Input',
          name: 'name',
          label: '用户姓名',
        },
        {
          type: 'Select',
          name: 'sex',
          label: '用户性别',
          props: {
            options: [
              {
                label: '男',
                value: 1,
              },
              {
                label: '女',
                value: 2,
              },
            ],
          },
        },
        {
          type: 'Input',
          name: 'sign',
          label: '用户签名',
        },
        {
          type: 'InputNumber',
          name: 'score',
          label: '用户分数',
        },
      ]}
      onReset={async () => {
        await new Promise((res) => setTimeout(res, 1000));
      }}
      onSearch={async (v) => {
        console.log(v);
        await new Promise((res) => setTimeout(res, 1000));
      }}
    />
  );
};
```

## 高级查询

```jsx | react | var(--bg-color-2)
import { Search } from '@yl-d/design';

export default () => {
  return (
    <Search
      column={3}
      schema={[
        {
          type: 'Input',
          name: 'name',
          label: '用户姓名',
        },
        {
          type: 'Select',
          name: 'sex',
          label: '用户性别',
          props: {
            options: [
              {
                label: '男',
                value: 1,
              },
              {
                label: '女',
                value: 2,
              },
            ],
          },
        },
      ]}
      // 高级查询配置
      advance={{
        column: 2,
        initialValues: {
          input1: "input1"
        },
        schema: [
          {
            type: 'Input',
            name: 'input1',
            label: '查询1',
          },
          {
            type: 'Input',
            name: 'input2',
            label: '查询2',
          },
          {
            type: 'Select',
            name: 'select',
            label: '查询3',
            props: {
              options: [
                {
                  label: '选项1',
                  value: 1,
                },
                {
                  label: '选项2',
                  value: 2,
                },
              ],
            },
          },
          {
            type: 'RadioGroup',
            name: 'redio',
            label: '查询4',
            props: {
              options: [
                {
                  label: '选项1',
                  value: 1,
                },
                {
                  label: '选项2',
                  value: 2,
                },
              ],
            },
          },
        ],
      }}
      onReset={async () => {
        await new Promise((res) => setTimeout(res, 1000));
      }}
      onSearch={async (v) => {
        console.log(v);
        await new Promise((res) => setTimeout(res, 1000));
      }}
    />
  );
};
```
