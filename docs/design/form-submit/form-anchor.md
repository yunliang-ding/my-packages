## 基本使用

```tsx | react | var(--bg-color-2)
import { AnchorForm, Button } from '@yl-d/design';

export default () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <AnchorForm
      height={460}
      defaultActivityKey="baseInfo"
      formProps={{
        title: '我是电梯表单',
        schema: [
          {
            type: 'FieldSet',
            name: 'baseInfo',
            label: '基础表单',
            props: {
              column: 2,
              children: [
                {
                  type: 'Input',
                  name: 'input',
                  label: '输入框',
                  required: true,
                },
                {
                  type: 'InputNumber',
                  name: 'inputNumber',
                  label: '数字输入框',
                },
                {
                  type: 'Select',
                  name: 'select',
                  label: '下拉选',
                  props: {
                    options: [
                      { label: '选项1', value: 1 },
                      { label: '选项2', value: 2 },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'FieldSet',
            name: 'advanceInfo',
            label: '高级表单',
            props: {
              children: [
                {
                  type: 'Switch',
                  name: 'switch',
                  label: '开关切换',
                  valuePropName: 'checked',
                  props: {
                    checkedChildren: '开启',
                    unCheckedChildren: '关闭',
                  },
                },
                {
                  type: 'Rate',
                  name: 'rate',
                  label: '评分组件',
                },
                {
                  type: 'Slider',
                  name: 'slider',
                  label: '滑块组件',
                  props: {},
                },
              ],
            },
          },
          {
            type: 'FieldSet',
            name: 'dateInfo',
            label: '日期相关',
            props: {
              children: [
                {
                  type: 'DatePicker',
                  name: 'datePicker',
                  label: '选择日期',
                },
                {
                  type: 'RangeDatePicker',
                  name: 'rangeDatePicker',
                  label: '区间选取',
                },
              ],
            },
          },
          {
            type: 'FieldSet',
            name: 'timeInfo',
            label: '时间相关',
            props: {
              children: [
                {
                  type: 'TimePicker',
                  name: 'timePicker',
                  label: '时间选择',
                },
                {
                  type: 'RangeTimePicker',
                  name: 'rangeTimePicker',
                  label: '时间区间',
                },
              ],
            },
          },
        ],
        onSubmit,
        initialValues: {
          input: '用户昵称',
          inputNumber: 2323,
          select: 2,
          switch: true,
          rate: 3,
          slider: 30,
          datePicker: '2024-09-12',
          timePicker: '09:23:12',
          rangeDatePicker: ['2024-09-12', '2024-10-12'],
          rangeTimePicker: ['01:23:12', '12:23:12'],
        },
      }}
    />
  );
};
```