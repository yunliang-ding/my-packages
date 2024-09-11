## 基本使用

```jsx | react
import { useState } from 'react';
import { Switch, Form, Button } from '@yl-d/design';
import schema from '@/design/schema.tsx';

export default () => {
  const form = Form.useForm();
  const [disabled, setDisabled] = useState(false);
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
      <Form
        form={form}
        disabled={disabled}
        column={2}
        initialValues={{
          input: '2323',
          autoComplete: '2323@163.com',
          inputNumber: 2323,
          select: 1,
          switch: false,
          radio: 1,
          checkbox: [1],
          slider: 7,
          selectMore: [1, 2],
          cascader: ['zhejiang', 'hangzhou'],
          datePicker: '2024-07-24',
          datePickerRange: ['2024-07-24', '2026-07-23'],
          timePicker: '00:02:00',
          timePickerRange: ['12:08:08', '18:08:08'],
          textarea: '2323',
          rate: 2,
          treeSelect: 'node2',
        }}
        onValuesChange={(v, vs) => {
          console.log(v, vs);
        }}
        schema={schema.map((i) => {
          return {
            ...i,
            required: true,
          };
        })}
      />
      <Button
        type="primary"
        style={{ marginTop: 24 }}
        onClick={async () => {
          console.log(await form.validateFields());
          await new Promise((res) => setTimeout(res, 1000));
        }}
      >
        提交
      </Button>
    </>
  );
};
```

## 区块划分

```jsx | react
import { Form } from '@yl-d/design';
import schema from '@/design/schema2.tsx';

export default () => {
  return <Form column={2} schema={schema} />;
};
```

## 父子区块

```jsx | react
import { Form } from '@yl-d/design';
import schema from '@/design/schema3.tsx';

export default () => {
  return <Form schema={schema} />;
};
```

## 使用 required 函数式解决联动校验

> disabled、required 属性都支持接受一个函数

```tsx | react
import { Form, Button } from '@yl-d/design';

export default () => {
  const form = Form.useForm();
  const submit = async () => {
    const data = await form.validateFields();
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <Form
        form={form}
        schema={[
          {
            type: 'Input',
            name: 'name',
            label: '用户姓名',
            required: true,
            notifiRender: [
              {
                name: 'nickname',
              },
            ],
          },
          {
            type: 'Input',
            name: 'nickname',
            label: '用户昵称',
            tooltip: '用户姓名填写了可不填昵称',
            required: ({ getValues }) => {
              return !getValues().name;
            },
          },
        ]}
      />
      <Button type="primary" onClick={submit} style={{ marginTop: 20 }}>
        提交
      </Button>
    </div>
  );
};
```

## 表单项联动

```jsx | react
import { Form } from '@yl-d/design';

export default () => {
  return (
    <Form
      schema={[
        {
          type: 'RadioGroup',
          name: 'sex',
          label: '性别',
          notifiRender: [
            {
              name: 'age',
              clear: true,
            },
          ],
          props: {
            options: [
              {
                label: '男',
                value: 0,
              },
              {
                label: '女',
                value: 1,
              },
            ],
          },
        },
        {
          type: 'InputNumber',
          name: 'age',
          label: '年龄',
          visible({ getValues }) {
            return getValues().sex === 0;
          },
          props: {
            style: {
              width: 180,
            },
          },
        },
      ]}
    />
  );
};
```

## 动态修改模型

```jsx | react
import { Form } from '@yl-d/design';

export default () => {
  return (
    <Form
      style={{
        width: 300,
      }}
      initialValues={{
        type: 2,
      }}
      schema={(form) => [
        {
          type: 'RadioGroup',
          label: '类型',
          name: 'type',
          props: {
            type: 'button',
            options: [
              {
                label: '类型 A',
                value: 1,
              },
              {
                label: '类型 B',
                value: 2,
              },
            ],
            onChange(value) {
              form.mergeItemByName('age', {
                props: {
                  addonBefore: value === 1 ? '类型 A' : '类型 B',
                },
              });
            },
          },
        },
        {
          type: 'Input',
          label: '年龄',
          name: 'age',
          props: {
            addonBefore: form.getValues()?.type === 1 ? '类型 A' : '类型 B',
          },
        },
      ]}
    />
  );
};
```

## 使用 FormList

> 1.主表单依赖子表单(主表单的收入总和是子表单每一项的收入相加)

> 2.子表单依赖主表单(子表单爱好的选项和主表单的联系人类型相关)

> 3.子表单依赖子表单(子表单项性别是男才有年龄的输入框，当姓名为空的时候收入项禁用)

```tsx | react
import { Form, Button } from '@yl-d/design';
import schema from '@/design/schema6.tsx';

export default () => {
  const form = Form.useForm();
  const submit = async () => {
    const data = await form.validateFields();
    alert(JSON.stringify(data));
  };
  const onValuesChange = (value, values) => {
    console.log('onValuesChange ->', value, values);
  };
  return (
    <>
      <Form
        form={form}
        onValuesChange={onValuesChange}
        schema={schema}
        column={3}
        initialValues={{
          userType: 1,
          contactList: [
            {
              name: '小华',
              liked: [2],
              sex: 1,
              age: 18,
            },
          ],
        }}
      />
      <br />
      <br />
      <Button type="primary" onClick={submit}>
        提交
      </Button>
    </>
  );
};
```

## 使用 TableList

> 适用于 4 ～ 5 个输入项，联动效果和上面一致

```tsx | react
import { Form, Button } from '@yl-d/design';
import schema from '@/design/schema7.tsx';

export default () => {
  const form = Form.useForm();
  const submit = async () => {
    const data = await form.validateFields();
    alert(JSON.stringify(data));
  };
  const onValuesChange = (value, values) => {
    console.log('onValuesChange ->', value, values);
  };
  return (
    <>
      <Form
        form={form}
        onValuesChange={onValuesChange}
        schema={schema}
        column={3}
        initialValues={{
          userType: 1,
          contactList: [
            {
              name: '小华',
              liked: [2],
              sex: 1,
              age: 18,
            },
          ],
        }}
      />
      <br />
      <br />
      <Button type="primary" onClick={submit}>
        提交
      </Button>
    </>
  );
};
```

## 自定义渲染

```jsx | react
import { Form } from '@yl-d/design';

export default () => {
  return (
    <Form
      initialValues={{
        name: '自定义渲染',
      }}
      column={2}
      schema={[
        {
          type: 'Input',
          name: 'name',
          label: '自定义渲染',
          itemRender(dom, options) {
            return (
              <div
                style={{
                  border: '2px dashed var(--primary-color)',
                  padding: 10,
                }}
              >
                {dom}
              </div>
            );
          },
        },
      ]}
    />
  );
};
```

## 自定义表单组件

```jsx | react
import { Form } from '@yl-d/design';

export default () => {
  return (
    <Form
      initialValues={{
        name: '自定义',
      }}
      schema={[
        {
          type: ({ value, onChange, form }) => {
            return <input value={value} onChange={onChange} />;
          },
          name: 'name',
          label: '自定义',
        },
      ]}
    />
  );
};
```
