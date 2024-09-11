## 基本使用

```jsx | react
import { Space, Avatar } from '@yl-d/design';
import { IconUser } from '@yl-d/icon';

export default () => {
  return (
    <Space size="large">
      <Avatar>A</Avatar>
      <Avatar style={{ backgroundColor: '#3370ff' }}>
        <IconUser />
      </Avatar>
      <Avatar style={{ backgroundColor: '#00d0b6' }}>Design</Avatar>
      <Avatar>
        <img
          alt="avatar"
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        />
      </Avatar>
    </Space>
  );
};
```

## 设置大小

```jsx | react
import { Space, Avatar } from '@yl-d/design';

export default () => {
  return (
    <Space size="large">
      <Avatar size={40}>A</Avatar>
      <Avatar size={30}>B</Avatar>
      <Avatar size={20}>C</Avatar>
    </Space>
  );
};
```

## 头像组

```jsx | react
import { Space, AvatarGroup } from '@yl-d/design';

export default () => {
  return (
    <AvatarGroup
      size={32}
      style={{ margin: 10 }}
      options={[
        {
          label: 'A',
          style: {
            backgroundColor: '#7BC616',
          },
        },
        {
          label: 'B',
          style: {
            backgroundColor: '#14C9C9',
          },
        },
        {
          label: 'C',
          style: {
            backgroundColor: '#168CFF',
          },
        },
        {
          label: 'Design',
          style: {
            backgroundColor: '#FFC72E',
          },
        },
      ]}
    />
  );
};
```

## API

```API
/packages/design/src/data-display/avatar/type.tsx
```
