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
        <a href={`https://www.npmjs.com/package/@yl-d/hooks`} target="_blank">
          <img alt="npm" src={`https://img.shields.io/npm/dt/@yl-d/hooks`} />
        </a>
        <a href={`https://www.npmjs.com/package/@yl-d/hooks`} target="_blank">
          <img
            alt="NPM downloads"
            src={`https://img.shields.io/npm/v/@yl-d/hooks.svg`}
          />
        </a>
      </p>
    </>
  );
};
```

## 安装

```js
pnpm install @yl-d/hooks
```

## create 全局状态管理库

- ✨ 思路参看 [resy](https://github.com/lsbFlying/resy)，感谢文木

## 定义 store

```ts
import { create } from "@yl-d/hooks";

export const store = create({
  count: 1,
  age: 1,
  addCount() {
    this.count++;
  },
});
```

## 使用 store

```tsx
import { store } from "./store";

export default () => {
  const { age } = store.useSnapshot();
  return (
    <div>
      {age}
      <button
        onClick={async () => {
          store.age += 1; // or store.addCount();
        }}
      >
        添加
      </button>
    </div>
  );
};
```
