# copyToClipBoard 复制到剪切板

## 基本使用

```tsx | react
import { copyToClipBoard } from "@yl-d/shared";

export default () => {
  const text = "这是要复制的文本呀呀呀这是要复制的文本呀呀呀";
  return (
    <div>
      <span>{text}</span>
      &nbsp;&nbsp;&nbsp;
      <a
        onClick={async () => {
          await copyToClipBoard(text);
        }}
      >
        复制
      </a>
    </div>
  );
};
```
