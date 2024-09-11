import { FormItemProps } from '@yl-d/design';

const schema: FormItemProps[] = [
  {
    key: '0001',
    type: 'Input',
    name: 'out',
    label: '外部元素',
  },
  {
    type: 'FieldSet',
    key: '0002',
    label: '空容器',
    props: {},
  },
  {
    type: 'FieldSet',
    key: '0003',
    label: '基础表单',
    props: {
      children: [
        {
          key: '0003-1',
          type: 'Input',
          name: 'input',
          label: '输入框',
        },
        {
          key: '0003-2',
          type: 'InputNumber',
          name: 'inputNumber',
          label: '数字输入框',
          props: {
            min: 1,
            max: 999,
          },
        },
        {
          key: '0003-3',
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
    key: '0004',
    type: 'FieldSet',
    label: '无限嵌套',
    props: {
      children: [
        {
          key: '0004-1',
          type: 'Input',
          name: 'input1',
          label: '第一层',
        },
        {
          type: 'FieldSet',
          label: '无限嵌套',
          key: '0004-2',
          props: {
            children: [
              {
                key: '0004-2-1',
                type: 'Input',
                name: 'input2',
                label: '第二层',
              },
              {
                type: 'FieldSet',
                label: '无限嵌套',
                key: '0004-2-2',
                props: {
                  children: [
                    {
                      key: '0004-2-2-1',
                      type: 'Input',
                      name: 'input3',
                      label: '第三层',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];
export default schema;
