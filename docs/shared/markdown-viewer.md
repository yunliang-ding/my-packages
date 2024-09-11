# MarkdownViewer 解析 md

> 依赖 cdn

```html
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js"></script>
```

## 基本使用

```tsx | react
import { MarkdownViewer } from '@yl-d/shared';

export default () => {
  return (
    <MarkdownViewer
      content={`
# 一级标题
## 二级标题
### 三级标题
> 区块信息
1. 描述1
2. 描述2
3. 描述3（\`强调说明\`）
## 代码块
\`\`\`\jsx
export default () => {
  return <div className='app'>代码块</div>
}
\`\`\`
## 脚本
\`\`\`bash
pnpm install @yl-d/design
pnpm install @yl-d/shared
\`\`\`
## 样式
\`\`\`\less
@import "@yl-d/design/dist/index.min.css";
\`\`\`
`}
    />
  );
};
```

## 渲染 React 组件

```tsx | react
import { MarkdownViewer } from '@yl-d/shared';
import * as yldDesign from '@yl-d/design';

export default () => {
  return (
    <MarkdownViewer
      require={{
        '@yl-d/design': yldDesign,
      }}
      content={`
## 渲染组件
\`\`\`\jsx | react | var(--bg-color-2)
import { Tree } from '@yl-d/design';

export default () => {
  return <Tree
    treeData={[
      {
        title: 'root',
        key: '0-0',
        children: [
          {
            title: 'src',
            key: '0-0-2',
            children: [
              {
                title: 'components',
                key: '0-0-2-1',
                children: [
                  {
                    title: 'loading.tsx',
                    key: '0-0-2-1-0',
                  },
                ],
              },
              {
                title: 'app.tsx',
                key: '0-0-2-2',
              },
              {
                title: 'app.less',
                key: '0-0-2-3',
              },
            ],
          },
        ],
      },
      {
        title: 'lyr.config.ts',
        key: '0-1',
      },
    ]}
  />
}
`}
    />
  );
};
```

## 展示 React 组件

```tsx | react
import { MarkdownViewer } from '@yl-d/shared';

export default () => {
  const user = { name: 'zhangsan', age: 12 };
  return (
    <MarkdownViewer
      content={`
## 仅展示
\`\`\`\jsx | pureReact
export default () => {
  return <button>仅展示渲染结果</button>
}
\`\`\`
`}
    />
  );
};
```

## 渲染 API 组件类型

```tsx | react
import { MarkdownViewer } from '@yl-d/shared';

export default () => {
  return (
    <MarkdownViewer
      typesAPI={{
        '/src/demo/type.tsx': [
          {
            name: 'leastOne',
            required: false,
            type: 'boolean',
            defaultValue: 'false',
            description: '最少一条',
          },
          {
            name: 'value',
            required: true,
            type: 'any[]',
            defaultValue: '[]',
            description: '数据源',
          },
          {
            name: 'onChange',
            required: false,
            type: 'Function',
            description: '改变的钩子',
          },
          {
            name: 'removeConfirm',
            required: false,
            type: 'boolean',
            defaultValue: 'false',
            description: '是否开启删除确认',
          },
        ],
      }}
      content={`
## 类型描述
\`\`\`API
/src/demo/type.tsx
\`\`\`
`}
    />
  );
};
```

## API

```ts
export interface MarkDownViewerProps {
  /** 文件内容 */
  content: string;
  /** 解析 React 组件的依赖 */
  require?: any;
  /** 依赖的源码 */
  source?: any;
  /** api类型数据源 */
  typesAPI?: any;
  /** 扩展按钮 */
  extraRender?: (params: any) => ReactNode;
}
```
