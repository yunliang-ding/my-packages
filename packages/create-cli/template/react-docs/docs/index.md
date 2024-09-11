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

# 一级标题

## 二级标题

### 三级标题

> 区块信息

**重点描述信息**

1. 描述1
2. 描述2
3. 描述3 `强调下`

## 代码块

```jsx
export default () => {
  return <button>代码块</div>
}
```

## 组件解析

```tsx | react
export default () => {
  return <button>组件解析</button>
}
```

## 渲染结果

```jsx | pureReact
export default () => {
  return <button>渲染结果</button>
}
```

## 打开预览

```tsx | reactExpand
export default () => {
  return <button>打开预览</button>
}
```