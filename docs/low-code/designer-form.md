> 表单设计器

## 基本使用

```jsx | react
import { useEffect } from 'react';
import { FormDesigner } from '@yl-d/low-code';
import { Button, Message, Space } from '@yl-d/design';
import { IconLarkColor, IconSave } from '@yl-d/icon';

export default () => {
  const [form] = FormDesigner.useForm();
  useEffect(() => {
    form.registerWidgets({
      CustomInput: {
        label: '原生输入框',
        props: {
          placeholder: '请选择',
          allowClear: true,
          disabled: false,
          mode: '',
        },
        propsConfig: [
          {
            widget: 'Switch',
            name: 'disabled',
            label: '是否禁用',
          },
          {
            widget: 'Input',
            name: 'placeholder',
            label: '提示文案',
          },
        ],
        render: (props) => {
          return <input {...props} />;
        },
      },
    });
  }, []);
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <FormDesigner
        form={form}
        logo={
          <Space>
            <IconLarkColor style={{ fontSize: 34 }} />
            <h2>FormDesigner</h2>
          </Space>
        }
        extra={[
          <Button
            type="primary"
            icon={<IconSave />}
            onClick={() => {
              Message.success('保存成功');
              console.log(form.getStandardSchema());
            }}
          >
            保存
          </Button>,
        ]}
      />
    </div>
  );
};
```
