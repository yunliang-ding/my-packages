```jsx | pureReact
export default () => {
  return (
    <>
      <p
        className="package-version"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          position: 'relative',
          top: 3,
        }}
      >
        <a href={`https://www.npmjs.com/package/@yl-d/docs`} target="_blank">
          <img alt="npm" src={`https://img.shields.io/npm/dt/@yl-d/docs`} />
        </a>
        <a href={`https://www.npmjs.com/package/@yl-d/docs`} target="_blank">
          <img
            alt="NPM downloads"
            src={`https://img.shields.io/npm/v/@yl-d/docs.svg`}
          />
        </a>
      </p>
    </>
  );
};
```

## 快速开始

- 在终端执行以下命令

```js
npx @yl-d/create-cli new myDocs
```

- 选择 `react-docs` 模版

## 说明

- 自动解析 `docs` 文件夹下的 `md` 文件生成路由
- md 文件中 `React` 组件渲染能力依赖 [MarkdownViewer](https://packages.yunliang.cloud#/shared/markdown-viewer)
  - 内置所有 demo 的 `code-playground`
  - 支持解析组件 API
  - 支持定制主题
- 舍弃 dumi 多余的特性、仅保留基本的使用习惯
- 采用 rollup 提供组件打包的能力（ems、cjs、umd）
- 代码完全 cover 方便定制化、启动打包速度明显提升

## 为什么不用 dumi

- 定制主题复杂，依赖东西太多，1.x less 必须是 4.x 以下版本
- 1.x 经常页面崩贵 (貌似是 默认主题的 API 解析有问题)
- 1.x 启动速度慢
- 2.x`ui`不喜欢
