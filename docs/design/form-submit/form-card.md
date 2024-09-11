## 基本使用

```tsx | react
import { Message, CardForm } from '@yl-d/design';
import schema from '@/design/schema.tsx';

const delay = (ms) => new Promise((res) => setTimeout(res, ms, true));

export default () => {
  const onClear = () => {
    console.log('onClear');
  };
  const onSubmit = async (values) => {
    await delay(1000);
    console.log('onSubmit ->', values);
    Message.success('保存成功');
  };
  return (
    <CardForm
      title="新增用户"
      onSubmit={onSubmit}
      onClear={onClear}
      schema={schema}
      column={2}
      bodyStyle={{
        height: 500,
        overflow: 'auto',
      }}
    />
  );
};
```
