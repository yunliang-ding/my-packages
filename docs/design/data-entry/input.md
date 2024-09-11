## 基本使用

```jsx | react
import { useState } from 'react';
import { Input, Switch } from '@yl-d/design';

export default () => {
  const [disabled, setdisabled] = useState('');
  return (
    <>
      <Input
        disabled={disabled}
        placeholder="指定宽度"
        style={{ width: 400 }}
      />
      <br />
      <Input
        disabled={disabled}
        placeholder="指定高度"
        autoFocus
        style={{ height: 40 }}
      />
      <br />
      <Input
        disabled={disabled}
        placeholder="指定长度11位"
        style={{ width: 200 }}
        maxLength={10}
        showCount
      />
      <br />
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setdisabled.bind(null, !disabled)}
      />
    </>
  );
};
```

## 前后缀

```jsx | react
import { Input } from '@yl-d/design';

export default () => {
  return (
    <>
      <Input placeholder="姓名" addonBefore={'姓名'} />
      <br />
      <Input placeholder="密码" addonAfter="密码" />
      <br />
      <Input
        placeholder="超过文本的字符看不到"
        addonBefore={'超过文本的字符看不到'}
      />
      <br />
      <Input
        placeholder="超过文本的字符看不到"
        addonAfter={'超过文本的字符看不到'}
      />
    </>
  );
};
```

## 内联前后缀

```jsx | react
import { Input } from '@yl-d/design';
import { IconEmail, IconSearch } from '@yl-d/icon';

export default () => {
  return (
    <>
      <Input placeholder="邮箱" prefix={<IconEmail />} />
      <br />
      <Input placeholder="查找" suffix={<IconSearch />} />
      <br />
    </>
  );
};
```

## 支持清除

```jsx | react
import { Input } from '@yl-d/design';
import { IconLaunch } from '@yl-d/icon';

export default () => {
  return (
    <>
      <Input placeholder="支持清除" style={{ width: 300 }} allowClear />
      <br />
      <Input
        placeholder="支持清除"
        suffix={<IconLaunch />}
        style={{ width: 300 }}
        allowClear
      />
    </>
  );
};
```

## 密码输入框

```jsx | react
import { Input } from '@yl-d/design';

export default () => {
  return (
    <Input placeholder="输入密码" style={{ width: 300 }} type="password" />
  );
};
```

## 多行文本

```jsx | react
import { Input } from '@yl-d/design';

export default () => (
  <>
    <Input
      type="textarea"
      placeholder="详细信息.."
      addonBefore={'描述'}
      addonAfter={'限制100字符'}
      style={{ marginBottom: 20 }}
    />
    <Input
      type="textarea"
      disabled
      placeholder="详细信息.."
      addonBefore={'描述'}
    />
  </>
);
```
