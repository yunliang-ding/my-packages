export default [
  {
    type: 'Input',
    label: '姓名',
    name: 'username',
    required: true,
  },
  {
    type: 'Select',
    label: '性别',
    name: 'sex',
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
];
