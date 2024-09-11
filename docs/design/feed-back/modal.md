## 基本使用

```jsx | react
import { Modal, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal({
          title: '默认弹出层',
          style: {
            width: 600,
            height: 400,
          },
          okText: '完成',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
            return new Promise((res) => setTimeout(res, 1000));
          },
          render({ onClose }) {
            console.log('render');
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <br />
                <br />
                <a onClick={onClose}>点击关闭</a>
              </>
            );
          },
        }).open();
      }}
    >
      默认弹出层
    </Button>
  );
};
```

## 没有底部按钮

```jsx | react
import { Modal, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal({
          title: '没有底部按钮',
          style: {
            width: 600,
            height: 400,
          },
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
          footer: false,
        }).open();
      }}
    >
      没有底部按钮
    </Button>
  );
};
```

## 自定义底部渲染

```jsx | react
import { Modal, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal({
          title: '自定义底部渲染',
          style: {
            width: 600,
            height: 400,
          },
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
          footerRender({ onClose }) {
            return (
              <div>
                自定义渲染底部
                <button onClick={onClose}>关闭</button>
              </div>
            );
          },
        }).open();
      }}
    >
      自定义底部渲染
    </Button>
  );
};
```

## 确认对话框

```jsx | react
import { Message, Button, Modal } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal.confirm({
          title: 'Confirm deletion',
          okButtonProps: {
            type: "danger"
          },
          content:
            'Are you sure you want to delete the 3 selected items? Once you press the delete button, the items will be deleted immediately. You can’t undo this action.',
          onOk: () => {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch((e) => {
              Message.error({
                content: 'Error occurs!',
              });
              throw e;
            });
          },
        });
      }}
    >
      Confirm
    </Button>
  );
};
```
