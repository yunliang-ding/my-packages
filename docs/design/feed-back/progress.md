## 基本使用

```jsx | react
import { Progress } from '@yl-d/design';

export default () => {
  return (
    <>
      <Progress percent={30} />
      <br />
      <Progress percent={50} active />
      <br />
      <Progress percent={90} strokeColor={'#52c41a'} />
    </>
  );
};
```

## 获取和设置进度

```jsx | react
import { Progress, Button } from '@yl-d/design';

export default () => {
  const progressRef = React.useRef({});
  return (
    <>
      <Progress percent={30} progressRef={progressRef} />
      <br />
      <Button
        onClick={() => {
          progressRef.current.setPercent(progressRef.current.percent + 10);
        }}
      >
        +
      </Button>
      &nbsp;&nbsp;
      <Button
        onClick={() => {
          progressRef.current.setPercent(progressRef.current.percent - 10);
        }}
      >
        -
      </Button>
    </>
  );
};
```
