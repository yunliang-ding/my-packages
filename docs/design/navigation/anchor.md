> 左侧面板支持点击滑动定位到指定的卡片

## 基本使用

```tsx | react | var(--bg-color-2)
import { Anchor } from '@yl-d/design';

export default () => {
  return (
    <Anchor
      height={400}
      list={[
        {
          title: '基本信息',
          content: <div>基本信息</div>,
        },
        {
          title: '数据报表',
          content: <div>数据报表</div>,
        },
        {
          title: '联系人信息',
          content: <div>联系人信息</div>,
        },
        {
          title: '关联项目信息',
          content: <div>关联项目信息</div>,
        },
        {
          title: '备案信息',
          content: <div>备案信息</div>,
        },
      ]}
      defaultActivityKey="基本信息"
    />
  );
};
```