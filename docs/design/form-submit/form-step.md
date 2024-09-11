## 基本使用

```tsx | react | var(--bg-color-2)
import { StepForm, Form } from '@yl-d/design';

export default () => {
  const [current, setCurrent] = React.useState(0);
  const form = Form.useForm();
  return (
    <StepForm
      current={current}
      form={form}
      onStepsClick={async (v) => {
        await form.submit();
        setCurrent(v);
      }}
      initialValues={{
        name1: 'name1',
        name3: 'name3',
        name5: 'name5',
      }}
      steps={[
        {
          title: '第一步',
          column: 2,
          schema: [
            {
              type: 'Input',
              name: 'name1',
              label: 'name1',
              required: true,
            },
            {
              type: 'Input',
              name: 'name2',
              label: 'name2',
              required: true,
            },
          ],
          actions: [
            {
              label: '清空',
              onClick() {
                form.clearValues();
              },
            },
            {
              label: '确认并下一步',
              spin: true,
              validator: true,
              type: 'primary',
              async onClick() {
                await new Promise((res) => setTimeout(res, 1000));
                setCurrent(1);
              },
            },
          ],
        },
        {
          title: '第二步',
          column: 2,
          schema: [
            {
              type: 'Input',
              name: 'name3',
              label: 'name3',
              required: true,
            },
            {
              type: 'Input',
              name: 'name4',
              label: 'name4',
              required: true,
            },
          ],
          actions: [
            {
              label: '上一步',
              onClick() {
                setCurrent(0);
              },
            },
            {
              label: '确认并下一步',
              spin: true,
              validator: true,
              type: 'primary',
              async onClick() {
                await new Promise((res) => setTimeout(res, 1000));
                setCurrent(2);
              },
            },
          ],
        },
        {
          title: '第三步',
          column: 3,
          schema: [
            {
              type: 'Input',
              name: 'name5',
              label: 'name5',
              required: true,
            },
            {
              type: 'Input',
              name: 'name6',
              label: 'name6',
              required: true,
            },
            {
              type: 'Input',
              name: 'name7',
              label: 'name7',
            },
          ],
          actions: [
            {
              label: '上一步',
              onClick() {
                setCurrent(1);
              },
            },
            {
              label: '确认提交',
              spin: true,
              validator: true,
              type: 'primary',
              async onClick() {
                await new Promise((res) => setTimeout(res, 1000));
                alert(JSON.stringify(form.getValues()));
              },
            },
          ],
        },
      ]}
    />
  );
};
```

## 结合弹层

```tsx | react
import { Form, Button, ModalForm, StepForm } from '@yl-d/design';

const stepModal = ModalForm({
  title: '新增用户',
  bodyStyle: {
    height: 320,
    padding: 0,
  },
  footer: false,
});

export default (props) => {
  const form = Form.useForm();
  return (
    <Button
      type="primary"
      onClick={() => {
        stepModal.open({
          render: () => {
            const [current, setCurrent] = React.useState(0);
            return (
              <StepForm
                current={current}
                form={form}
                initialValues={{
                  name1: 'name1',
                  name3: 'name3',
                  name5: 'name5',
                }}
                steps={[
                  {
                    title: '第一步',
                    description: '第一步描述',
                    column: 1,
                    schema: [
                      {
                        type: 'Input',
                        name: 'name1',
                        label: 'name1',
                        required: true,
                      },
                      {
                        type: 'Input',
                        name: 'name2',
                        label: 'name2',
                        required: true,
                      },
                    ],
                    actions: [
                      {
                        label: '清空',
                        onClick() {
                          form.clearValues();
                        },
                      },
                      {
                        label: '确认并下一步',
                        spin: true,
                        validator: true,
                        type: 'primary',
                        async onClick() {
                          await new Promise((res) => setTimeout(res, 1000));
                          setCurrent(1);
                        },
                      },
                    ],
                  },
                  {
                    title: '第二步',
                    description: '第二步描述',
                    column: 2,
                    schema: [
                      {
                        type: 'Input',
                        name: 'name3',
                        label: 'name3',
                        required: true,
                      },
                      {
                        type: 'Input',
                        name: 'name4',
                        label: 'name4',
                        required: true,
                      },
                    ],
                    actions: [
                      {
                        label: '上一步',
                        onClick() {
                          setCurrent(0);
                        },
                      },
                      {
                        label: '确认并下一步',
                        spin: true,
                        validator: true,
                        type: 'primary',
                        async onClick() {
                          await new Promise((res) => setTimeout(res, 1000));
                          setCurrent(2);
                        },
                      },
                    ],
                  },
                  {
                    title: '第三步',
                    description: '第三步描述',
                    column: 3,
                    schema: [
                      {
                        type: 'Input',
                        name: 'name5',
                        label: 'name5',
                        required: true,
                      },
                      {
                        type: 'Input',
                        name: 'name6',
                        label: 'name6',
                        required: true,
                      },
                      {
                        type: 'Input',
                        name: 'name7',
                        label: 'name7',
                      },
                    ],
                    actions: [
                      {
                        label: '上一步',
                        onClick() {
                          setCurrent(1);
                        },
                      },
                      {
                        label: '确认提交',
                        spin: true,
                        validator: true,
                        type: 'primary',
                        async onClick() {
                          await new Promise((res) => setTimeout(res, 1000));
                          alert(JSON.stringify(form.getFieldsValue(true)));
                          stepModal.close();
                        },
                      },
                    ],
                  },
                ]}
              />
            );
          },
        });
      }}
    >
      打开 StepForm
    </Button>
  );
};
```
