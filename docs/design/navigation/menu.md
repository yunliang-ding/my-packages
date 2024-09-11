## 基本使用

```jsx | react
import { useState } from 'react';
import { Menu, Switch } from '@yl-d/design';
import { IconUserGroup, IconLanguage, IconCodepen } from '@yl-d/icon';

export default () => {
  const [collapsed, setcollapsed] = useState();
  const menus = [
    {
      path: '1',
      icon: <IconUserGroup />,
      label: 'Navigation One',
      children: [
        {
          path: '1-1',
          label: 'Option1',
        },
        {
          path: '1-2',
          label: 'Option2',
        },
      ],
    },
    {
      path: '3',
      icon: <IconLanguage />,
      label: 'Navigation Three',
      children: [
        {
          path: '3-1',
          label: 'Option1',
          icon: <IconLanguage />,
          children: [
            {
              path: '3-1-1',
              label: 'Option1-1',
            },
            {
              path: '3-1-2',
              label: 'Option1-2',
            },
          ],
        },
      ],
    },
    {
      path: '4',
      icon: <IconCodepen />,
      label: 'Navigation Four',
    },
  ];
  return (
    <>
      <Switch
        checkedChildren="展开"
        unCheckedChildren="收起"
        onChange={setcollapsed.bind(null, !collapsed)}
      />
      <br />
      <br />
      <Menu
        style={{
          width: 240,
        }}
        menus={menus}
        collapsed={collapsed}
        menuClick={(openkey, selectKey) => {
          console.log(openkey, selectKey);
        }}
        openKey={['1']}
        selectKey="1-2"
      />
    </>
  );
};
```
