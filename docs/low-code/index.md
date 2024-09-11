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
        <a href={`https://www.npmjs.com/package/@yl-d/low-code`} target="_blank">
          <img alt="npm" src={`https://img.shields.io/npm/dt/@yl-d/low-code`} />
        </a>
        <a href={`https://www.npmjs.com/package/@yl-d/low-code`} target="_blank">
          <img
            alt="NPM downloads"
            src={`https://img.shields.io/npm/v/@yl-d/low-code.svg`}
          />
        </a>
      </p>
    </>
  );
};
```

## 安装

```js
pnpm install @yl-d/low-code
```

## umd 版本

```html
<!-- window.lyrLowCode -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/low-code.min.js"></script>
```

> 依赖 cdn

```html
<!-- window.React -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js"></script>
<!-- window.ReactDOM -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js"></script>
<!-- window.jsxRuntime -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js"></script>
<!-- Format With Prettier -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-standalone.min.js"></script>
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-parser-typescript.min.js"></script>
<!-- window.yldIcon -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/icon.min.js"></script>
<!-- window.yldDesign -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.js"></script>
<!-- window.yldCodeEditor -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js"></script>
<!-- window.yldShared -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js"></script>

```

## 注册自定义组件

```jsx
const [form] = FormDesigner.useForm();

form.registerWidgets({
  CustomInput: {
    label: '自定义组件',
    props: {
      placeholder: '请选择',
      allowClear: true,
      disabled: false,
      mode: '',
    },
    propsConfig: [
      {
        widget: 'Switch',
        name: 'disabled',
        label: '是否禁用',
      },
      {
        widget: 'Input',
        name: 'placeholder',
        label: '提示文案',
      },
    ],
    render: (props) => {
      return (
        <div>
          自定义组件
          <input {...props} />
        </div>
      );
    },
  },
});
```
