## 依赖 cdn

```html
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js"></script>
```

## 基本使用

```jsx | react
import { useState } from 'react';
import { Upload } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState([
    {
      uid: '-1',
      name: 'ice.png',
      url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    },
    {
      status: 'error',
      uid: '-2',
      percent: 0,
      response: '上传错误提示',
      name: 'cat.png',
      url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
    },
    {
      uid: '-3',
      name: 'light.png',
      url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    },
  ]);
  return <Upload value={value} onChange={setValue} />;
};
```

## 图片列表样式

```jsx | react
import { useState } from 'react';
import { Upload } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState([
    {
      uid: '-3',
      name: 'light.png',
      url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    },
  ]);
  return <Upload value={value} onChange={setValue} listType="picture-list" />;
};
```

## 照片墙

```jsx | react
import { useState } from 'react';
import { Upload } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState([
    {
      uid: '-3',
      name: 'light.png',
      url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    },
  ]);
  return <Upload value={value} onChange={setValue} listType="picture-card" />;
};
```
