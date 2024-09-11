## Drawer 抽屉

```jsx | react
import { Drawer, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Drawer({
          title: '默认抽屉',
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
      打开默认抽屉
    </Button>
  );
};
```

## 打开位置

```jsx | react
import { Drawer, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '左侧打开',
          placement: 'left',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
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
        }).open();
      }}
    >
      左侧打开
    </Button>
  );
};
```

## 指定高度

```jsx | react
import { Drawer, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '指定高度',
          top: 58,
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
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
        }).open();
      }}
    >
      指定高度
    </Button>
  );
};
```

## 没有底部按钮

```jsx | react
import { Drawer, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '没有底部按钮',
          okText: '完成',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
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
import { Drawer, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      onClick={() => {
        Drawer({
          title: '自定义底部渲染',
          okText: '完成',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
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
