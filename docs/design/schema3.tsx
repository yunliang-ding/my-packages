import { Space, FormItemProps } from '@yl-d/design';
import { IconQq, IconEmail } from '@yl-d/icon';

export default [
  {
    type: 'FieldSet',
    label: '基本表单项',
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
          props: {
            min: 1,
            max: 999,
          },
        },
        {
          type: 'AutoComplete',
          name: 'autoComplete',
          label: '邮箱',
          props: {
            options: [
              {
                value: '163.com',
                label: (
                  <Space>
                    <IconEmail style={{ color: '#1e80ff' }} />
                    <span>163.com</span>
                  </Space>
                ),
              },
              {
                value: 'qq.com',
                label: (
                  <Space>
                    <IconQq style={{ color: '#1e80ff' }} />
                    <span>qq.com</span>
                  </Space>
                ),
              },
            ],
          },
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
          extra: '这是一段描述信息',
        },
        {
          type: 'RadioGroup',
          name: 'radio',
          label: '单选按钮组',
          props: {
            options: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
            ],
          },
        },
        {
          type: 'CheckGroup',
          name: 'checkbox',
          label: '复选框',
          props: {
            options: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
            ],
          },
        },
        {
          type: 'Switch',
          name: 'switch',
          label: '开关切换',
          props: {
            checkedChildren: '开',
            unCheckedChildren: '关',
          },
        },
      ],
    },
  },
  {
    type: 'FieldSet',
    label: '高级表单项',
    props: {
      column: 2,
      children: [
        {
          type: 'Rate',
          name: 'rate',
          label: '评分',
        },
        {
          type: 'Slider',
          name: 'slider',
          label: '滑块组件',
        },
        {
          type: 'Select',
          name: 'selectMore',
          label: '下拉多选',
          props: {
            multiple: true,
            options: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
              { label: '选项3', value: 3 },
              { label: '选项4', value: 4 },
              { label: '选项5', value: 5 },
              { label: '选项6', value: 6 },
            ],
          },
        },
        {
          type: 'TreeSelect',
          name: 'treeSelect',
          label: '下拉树组件',
          props: {
            expandedKeys: ['node1', 'node3'],
            treeData: [
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
            ],
          },
        },
        {
          type: 'Cascader',
          name: 'cascader',
          label: '级联选择器',
          props: {
            options: [
              {
                value: 'zhejiang',
                label: '浙江省',
                children: [
                  {
                    value: 'hangzhou',
                    label: '杭州市',
                  },
                ],
              },
              {
                value: 'anhui',
                label: '安徽省',
                children: [
                  {
                    value: 'hefei',
                    label: '合肥市',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
  {
    type: 'FieldSet',
    label: '日期表单项',
    props: {
      column: 2,
      children: [
        {
          type: 'DatePicker',
          name: 'datePicker',
          label: '选择日期',
        },
        {
          type: 'RangeDatePicker',
          name: 'datePickerRange',
          label: '选择日期范围',
        },
        {
          type: 'TimePicker',
          name: 'timePicker',
          label: '时间选择',
        },
        {
          type: 'RangeTimePicker',
          name: 'timePickerRange',
          label: '选择时间范围',
        },
      ],
    },
  },
  {
    type: 'FieldSet',
    label: '无限嵌套',
    props: {
      children: [
        {
          type: 'Input',
          name: 'input1',
          label: '第一层',
        },
        {
          type: 'FieldSet',
          label: '无限嵌套',
          props: {
            children: [
              {
                type: 'Input',
                name: 'input2',
                label: '第二层',
              },
              {
                type: 'FieldSet',
                label: '无限嵌套',
                props: {
                  children: [
                    {
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
] as FormItemProps[];
