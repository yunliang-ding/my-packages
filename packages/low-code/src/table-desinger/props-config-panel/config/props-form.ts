/**
 * Form的属性配置
 */
import { FormItemProps } from '@yl-d/design';

const schema: FormItemProps[] = [
  {
    type: 'RadioGroup',
    name: 'column',
    label: '总列数',
    props: {
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
        {
          label: '4列',
          value: 4,
        },
      ],
    },
  },
];

export default schema;
