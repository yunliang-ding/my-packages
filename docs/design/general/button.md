## 基本使用

```jsx | react
import { Button, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button type="primary" ghost>
        ghost
      </Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading...</Button>
    </Space>
  );
};
```

## 设置图标

```jsx | react
import { Button, Space } from '@yl-d/design';
import { IconRefresh, IconSearch } from '@yl-d/icon';

export default () => {
  return (
    <Space>
      <Button icon={<IconRefresh />} />
      <Button icon={<IconRefresh />} circle />
      <Button type="primary" icon={<IconSearch />}>
        Search
      </Button>
    </Space>
  );
};
```

## 自动等待

```jsx | react
import { Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        return new Promise((res) => setTimeout(res, 1000));
      }}
    >
      提交表单
    </Button>
  );
};
```

## 二次确认

```jsx | react
import { Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      confirm={{
        content: '是否确认删除该数据？',
      }}
      onClick={() => {
        return new Promise((res) => setTimeout(res, 1000));
      }}
    >
      提交表单
    </Button>
  );
};
```

## 和弹出层整合

```tsx | react
import { Message, Space, Button } from '@yl-d/design';
import schema from '@/design/schema.tsx';

const delay = (ms) => new Promise((res) => setTimeout(res, ms, true));

export default () => {
  const onSubmit = async (values) => {
    await delay(400);
    Message.success('保存成功');
  };
  return (
    <Space>
      <Button
        modalFormProps={{
          title: '添加用户',
          column: 2,
          schema,
          onSubmit,
          bodyStyle: {
            height: 500,
            overflow: 'auto',
          },
        }}
        type="primary"
      >
        打开 ModalForm
      </Button>
      <Button
        drawerFormProps={async () => {
          await new Promise((res) => setTimeout(res, 1000));
          return {
            title: '添加用户',
            width: 600,
            schema,
            column: 2,
            onSubmit,
          };
        }}
      >
        打开 DrawerForm 支持异步
      </Button>
    </Space>
  );
};
```

## API

```API
/packages/design/src/general/button/type.tsx
```
