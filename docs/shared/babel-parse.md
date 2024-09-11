# 编译 tsx 代码片段

> 依赖 cdn

```html
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js"></script>
```

## 基本使用

```tsx | react
import { babelParse } from '@yl-d/shared';

const code = `interface UserProps{
  name: string
};

export default (props: UserProps) => {
  return <button type="primary" >{props.name}</button>
}
`;
export default () => {
  const Comp = babelParse({
    code,
  });
  return <Comp name="Hello World" />;
};
```

## 注入依赖

```tsx | react
import { babelParse } from '@yl-d/shared';

const code = `import user from "user";

export default (props) => {
  return <button>{user.name}</button>
}
`;
export default () => {
  const Comp = babelParse({
    code,
    require: {
      user: {
        name: 'zhangsan',
      },
    },
  });
  return <Comp />;
};
```

## 使用 ui 库

```tsx | react
import { babelParse } from '@yl-d/shared';
import * as yldDesign from '@yl-d/design';

const code = `interface UserProps{
  name: string
};

import { Button } from "@yl-d/design";

export default (props: UserProps) => {
  return <Button type="primary" >{props.name}</Button>
}
`;
export default () => {
  const Comp = babelParse({
    code,
    require: {
      '@yl-d/design': yldDesign,
    },
  });
  return <Comp name="Hello World" />;
};
```

## API

```ts
export interface babelParseProps {
  /**
   * es6 module 代码片段
   */
  code: string;
  /**
   * 自动添加 import
   * @default { React: 'react'}
   */
  dependencies?: Object;
  /** 第三方依赖 */
  require?: Object;
}
```
