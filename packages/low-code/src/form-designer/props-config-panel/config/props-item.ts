/**
 * Item的属性配置
 */
import { FormItemProps } from '@yl-d/design';

export const formItemSchema = (
  insertSchema = [
    {
      type: 'Switch',
      name: 'required',
      label: '是否必填',
    },
  ] as FormItemProps[],
): FormItemProps[] => [
  {
    type: 'Input',
    name: 'key',
    label: '唯一标识',
    props: {
      disabled: true,
    },
  },
  {
    type: 'Input',
    name: 'label',
    label: '字段标签',
  },
  {
    type: 'Input',
    name: 'name',
    label: '字段名称',
  },
  {
    type: 'RadioGroup',
    name: 'span',
    label: '占据列数',
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
  ...(insertSchema as any),
  // TODO 没有考虑 FieldSet
  {
    type: 'CodeEditor',
    name: 'visible',
    label: '设置visible',
    props: {
      style: {
        height: 160,
        width: 360,
      },
      mode: 'function',
      useEncrypt: true,
      noChangeClearCode: true,
      defaultCode: `({ getValues }) => {
  return true;
}`,
    },
  },
  {
    type: 'CodeEditor',
    name: 'innerItemRender',
    label: '设置itemRender',
    props: {
      style: {
        height: 200,
        width: 360,
      },
      noChangeClearCode: true,
      useEncrypt: true,
      mode: 'function',
      defaultCode: `(dom, { form }) => {
  
}`,
    },
  },
  {
    type: 'CodeEditor',
    name: 'notifyRender',
    label: '联动设置',
    props: {
      mode: 'json',
      style: {
        height: 100,
        width: 360,
      },
    },
  },
];

export default formItemSchema;
