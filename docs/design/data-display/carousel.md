## 基本使用

```jsx | react
import { Carousel } from '@yl-d/design';

export default () => {
  const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  ];
  return (
    <Carousel
      showArrow
      style={{ width: 600, height: 240 }}
      pages={imageSrc.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: '100%' }} />
        </div>
      ))}
    />
  );
};
```

## 自动播放-渐变模式

```jsx | react
import { Carousel } from '@yl-d/design';

export default () => {
  const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  ];
  return (
    <Carousel
      showArrow
      autoPlay
      effect="fade"
      style={{ width: 600, height: 240 }}
      pages={imageSrc.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: '100%' }} />
        </div>
      ))}
    />
  );
};
```

## API

```API
/packages/design/src/data-display/carousel/type.tsx
```
