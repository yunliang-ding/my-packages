# downloadFile 下载文件

## 基本使用

```tsx | react
import { downloadFile } from '@yl-d/shared';
import { Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      spin
      type="primary"
      onClick={async () => {
        await downloadFile(
          'https://img.alicdn.com/imgextra/i3/O1CN01SJTtza1IXcPe4sxiY_!!6000000000903-0-tps-2500-1406.jpg',
          'test.png',
        );
      }}
    >
      下载
    </Button>
  );
};
```

## 下载 json

```tsx | react
import { downloadJson } from '@yl-d/shared';
import { Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      spin
      type="primary"
      onClick={async () => {
        await downloadJson(
          [
            {
              name: '张三',
              age: 12,
              sex: '男',
            },
          ],
          'user.json',
        );
      }}
    >
      下载
    </Button>
  );
};
```
