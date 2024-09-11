## 基本使用

```tsx | react
import { asyncLoadScript, asyncLoadLink } from '@yl-d/shared';
import { Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      spin
      onClick={async () => {
        await asyncLoadScript(
          'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
        );
      }}
    >
      加载单个脚本
    </Button>
  );
};
```

## 批量加载

```tsx | react
import { asyncLoadScript, asyncLoadLink } from '@yl-d/shared';
import { Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      spin
      onClick={async () => {
        await asyncLoadScript([
          'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
          'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
          'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js',
          'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js',
        ]);
      }}
    >
      加载多个脚本
    </Button>
  );
};
```
