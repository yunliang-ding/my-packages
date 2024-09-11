## 基本使用

```jsx | react | var(--bg-color-2)
import { Tabs } from '@yl-d/design';

export default () => {
  const tabs = [
    {
      key: 1,
      label: <span>Tab1</span>,
      content: (
        <div>
          Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1
        </div>
      ),
    },
    {
      key: 2,
      label: <span>Tab2</span>,
      content: <div>sub-tab2</div>,
    },
    {
      key: 3,
      label: <span>Tab3</span>,
      content: <div>sub-tab3</div>,
    },
  ];
  return (
    <Tabs
      style={{
        height: 300,
      }}
      tabs={tabs}
      onClick={(e) => {
        console.log(e);
      }}
    />
  );
};
```

## 支持关闭

```jsx | react | var(--color-fill-2)
import { Tabs } from '@yl-d/design';

export default () => {
  const tabs = [
    {
      key: 1,
      label: <span>Tab1</span>,
      content: (
        <div>
          Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1
        </div>
      ),
    },
    {
      key: 2,
      label: <span>Tab2</span>,
      content: <div>sub-tab2</div>,
    },
    {
      key: 3,
      label: <span>Tab3</span>,
      content: <div>sub-tab3</div>,
    },
  ];
  return (
    <Tabs
      style={{
        height: 300,
      }}
      closable
      tabs={tabs}
      onClick={(e) => {
        console.log(e);
      }}
      onRemove={(e) => {
        console.log(e);
      }}
    />
  );
};
```

## 超出范围

```jsx | react | var(--bg-color-2)
import { Tabs } from '@yl-d/design';

export default () => {
  const tabs = new Array(36).fill('').map((item, index) => ({
    key: index,
    label: `Tab-${index}`,
    content: <div>Content {index}</div>,
  }));
  return (
    <Tabs
      style={{
        height: 300,
      }}
      tabs={tabs}
      onClick={(e) => {
        console.log(e);
      }}
      onRemove={(e) => {
        console.log(e);
      }}
    />
  );
};
```

## API

```API
/packages/design/src/data-display/tabs/type.tsx
```