## Dropdown 下拉菜单

```jsx | react
import { Menu, Button, Space, Dropdown } from '@yl-d/design';
import { IconDown, IconUserGroup, IconLanguage, IconCodepen } from '@yl-d/icon';

const droplist = (
  <Menu
    nav
    menus={[
      {
        path: 'IconUserGroup',
        icon: <IconUserGroup />,
        label: 'IconUserGroup',
      },
      {
        path: 'IconLanguage',
        icon: <IconLanguage />,
        label: 'IconLanguage',
      },
      {
        path: 'IconCodepen',
        icon: <IconCodepen />,
        label: 'IconCodepen',
      },
    ]}
  />
);

export default () => {
  return (
    <Space className="dropdown-demo">
      <Dropdown droplist={droplist}>
        <Button type="link">
          Hover me <IconDown />
        </Button>
      </Dropdown>
      <Dropdown droplist={droplist} trigger="click">
        <Button type="link">
          Click me <IconDown />
        </Button>
      </Dropdown>
    </Space>
  );
};
```

## 右键菜单

```jsx | react
import { Menu, Button, Dropdown } from '@yl-d/design';
import { IconDown, IconUserGroup, IconLanguage, IconCodepen } from '@yl-d/icon';

const droplist = (
  <Menu
    nav
    menus={[
      {
        path: 'IconUserGroup',
        icon: <IconUserGroup />,
        label: 'IconUserGroup',
      },
      {
        path: 'IconLanguage',
        icon: <IconLanguage />,
        label: 'IconLanguage',
      },
      {
        path: 'IconCodepen',
        icon: <IconCodepen />,
        label: 'IconCodepen',
      },
    ]}
  />
);

export default () => {
  return (
    <Dropdown trigger="contextMenu" droplist={droplist}>
      <Button type="link">
        Right-click <IconDown />
      </Button>
    </Dropdown>
  );
};
```

## API

```API
/packages/design/src/navigation/dropdown/type.tsx
```
