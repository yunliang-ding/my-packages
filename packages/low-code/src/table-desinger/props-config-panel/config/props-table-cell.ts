/**
 * cell的属性配置
 */
import { FormItemProps, DrawerForm } from '@yl-d/design';
import { CodeEditor } from '@yl-d/code-editor';

const cellDetailFields: FormItemProps[] = [
  {
    type: 'Input',
    label: '列标签',
    name: 'title',
  },
  {
    type: 'Input',
    label: '列标识',
    name: 'dataIndex',
  },
  {
    type: 'InputNumber',
    label: '列宽度',
    name: 'width',
  },
  {
    type: 'Select',
    label: '日期格式转换',
    name: 'dateFormat',
    props: {
      options: [
        {
          label: '年-月-日',
          value: 'YYYY-MM-DD',
        },
        {
          label: '年-月-日 时:分',
          value: 'YYYY-MM-DD HH:mm',
        },
        {
          label: '年-月-日 时:分:秒',
          value: 'YYYY-MM-DD HH:mm:ss',
        },
      ],
    },
  },
  {
    type: 'CodeEditor',
    name: 'render',
    label: '自定义渲染',
    props: {
      noChangeClearCode: true,
      mode: 'function',
      useEncrypt: true,
      defaultCode: `(item, record, index) => {
   return item
 }`,
    },
  },
];

const cellFields: FormItemProps[] = [
  {
    type: 'Block',
    label: '数据列设置',
  },
  {
    type: 'TableList',
    name: 'columns',
    props: {
      removeConfirm: true,
      children: [
        {
          type: 'Input',
          name: 'title',
          label: '名称',
        },
        {
          type: 'Input',
          name: 'dataIndex',
          label: '唯一标识',
        },
      ],
      actions: [
        {
          key: 'edit',
          label: '配置',
          type: 'text',
          onClick: (record, onCellChange) => {
            DrawerForm({
              width: 400,
              schema: cellDetailFields,
              footerRender: () => null,
              widgets: {
                CodeEditor,
              },
              title: record.title,
              initialValues: record,
              onValuesChange: (v: any, values) => {
                onCellChange(values);
              },
            }).open();
          },
        },
      ],
    },
  },
];

export default cellFields;
