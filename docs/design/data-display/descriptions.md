## 基本使用

```jsx | react
import { Descriptions } from '@yl-d/design';

const data = [
  {
    label: 'Name',
    value: 'Socrates',
  },
  {
    label: 'Mobile',
    value: '123-1234-1234',
  },
  {
    label: 'Residence',
    value: 'Beijing',
  },
  {
    label: 'Hometown',
    value: 'Beijing',
  },
  {
    label: 'Address',
    value: 'Yingdu Building, Zhichun Road, Beijing',
    span: 2,
  },
];

export default () => {
  return <Descriptions title="User Info" data={data} />;
};
```

## API

```API
/packages/design/src/data-display/descriptions/type.tsx
```