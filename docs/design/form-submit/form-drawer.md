## 基本使用

```tsx | react
import { Button, DrawerForm } from '@yl-d/design';
import schema from '@/design/schema.tsx';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        DrawerForm({
          title: '新增用户',
          schema,
          async onSubmit(values) {
            alert(JSON.stringify(values));
          },
        }).open();
      }}
    >
      新增用户-Drawer
    </Button>
  );
};
```

## 手动关闭和阻止关闭

```tsx | react
import { Message, Button, DrawerForm } from '@yl-d/design';
import schema from '@/design/schema.tsx';

export default () => {
  return (
    <Button
      type="dashed"
      onClick={() => {
        const drawer = DrawerForm({
          title: '新增用户',
          width: 1000,
          schema,
          column: 2,
          actions: [
            {
              label: '手动关闭',
              onClick() {
                drawer.close();
              },
            },
            {
              label: '手动提交',
              type: 'primary',
              async onClick(value) {
                await new Promise((res) => setTimeout(res, 1000));
                console.log(value);
                Message.error('接口异常');
                return Promise.reject();
              },
            },
          ],
        });
        drawer.open();
      }}
    >
      手动关闭和阻止关闭-Drawer
    </Button>
  );
};
```