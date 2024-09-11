# getUrlSearchParams 获取 url 参数

## 基本使用

```tsx | react
import { useState } from "react";
import { getUrlSearchParams } from "@yl-d/shared";
import { Input } from "@yl-d/design";

export default () => {
  const [value, setValue] = useState(
    "https://xxx.xxx/#/abc?id=10001&name=hello&age=20"
  );
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        style={{ width: 400, marginBottom: 10 }}
      />
      <div>解析: {JSON.stringify(getUrlSearchParams(value))}</div>
    </div>
  );
};
```
