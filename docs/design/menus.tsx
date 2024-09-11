import {
  IconApps,
  IconLanguage,
  IconUser,
  IconThunderbolt,
  IconUserGroup,
  IconUserAdd,
  IconStorage,
  IconDesktop,
} from '@yl-d/icon';

export default [
  {
    icon: <IconApps />,
    label: '工作台',
    path: '/workbench',
    children: [
      {
        icon: <IconDesktop />,
        path: '/workbench/my',
        label: '我的工作台',
      },
    ],
  },
  {
    icon: <IconLanguage />,
    label: '用户管理',
    path: '/user',
    children: [
      {
        icon: <IconUser />,
        label: '用户列表',
        path: '/user/list',
        children: [
          {
            icon: <IconUserGroup />,
            label: '子用户列表',
            path: '/user/list/sub-list',
          },
          {
            icon: <IconUserAdd />,
            label: '添加子管理',
            path: '/user/list/sub-add',
          },
        ],
      },
    ],
  },
  {
    icon: <IconThunderbolt />,
    label: '字典管理',
    path: '/dict',
    children: [
      {
        icon: <IconStorage />,
        path: '/dict/list',
        label: '字典列表',
      },
    ],
  },
];
