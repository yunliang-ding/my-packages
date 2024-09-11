/**
 * Form的属性配置
 */
import { FormItemProps } from '@yl-d/design';

const schema: FormItemProps[] = [
  {
    type: 'Input',
    name: 'title',
    label: '表单标题',
  },
  {
    type: 'RadioGroup',
    name: 'column',
    label: '容器排版',
    props: {
      optionType: 'button',
      options: [
        {
          label: '1列',
          value: 1,
        },
        {
          label: '2列',
          value: 2,
        },
        {
          label: '3列',
          value: 3,
        },
      ],
    },
  },
  {
    type: 'Switch',
    name: 'horizontal',
    label: '是否水平',
  },
  {
    type: 'RadioGroup',
    name: 'actionAlign',
    label: '操作按钮位置',
    props: {
      optionType: 'button',
      options: [
        {
          label: '左对齐',
          value: 'start',
        },
        {
          label: '剧中',
          value: 'center',
        },
        {
          label: '右对齐',
          value: 'end',
        },
      ],
    },
  },
  {
    type: 'CodeEditor',
    name: 'onSubmit',
    label: '表单提交',
    props: {
      noChangeClearCode: true,
      mode: 'function',
      useEncrypt: true,
      defaultCode: `async (values) => {
  
}`,
    },
  } as any,
];

export default schema;
