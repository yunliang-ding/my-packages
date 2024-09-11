> 最基本的拖拽组件

## 基本使用

```tsx | react
import { DragWrapper } from '@yl-d/design';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        padding: 20,
        flexWrap: 'wrap',
        backgroundColor: 'var(--bg-color-2)',
      }}
    >
      <DragWrapper
        style={{
          gap: 20,
        }}
        onChange={(item) => {
          console.log(item);
        }}
        items={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i) => {
          return {
            key: i,
            content: (
              <div
                style={{
                  width: 100,
                  height: 100,
                  background: 'var(--bg-color)',
                  color: 'var(--text-color)',
                  padding: '0 4px',
                }}
              >
                {i}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};
```

## 模块之间联动

```tsx | react
import { DragWrapper } from '@yl-d/design';

export default () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 10,
          padding: 20,
          flexWrap: 'wrap',
          backgroundColor: 'var(--bg-color-2)',
        }}
      >
        <DragWrapper
          style={{
            gap: 20,
          }}
          onChange={(item) => {
            console.log(item);
          }}
          accept={false}
          items={['Input', 'Select', 'Checkbox'].map((i) => {
            return {
              key: i,
              content: (
                <div
                  style={{
                    width: 100,
                    height: 100,
                    background: 'var(--bg-color)',
                    color: 'var(--text-color)',
                    padding: '0 4px',
                  }}
                >
                  {i}
                </div>
              ),
            };
          })}
        />
      </div>
      <hr style={{ margin: '20px 0', borderColor: 'var(--border-color)' }} />
      <div
        style={{
          display: 'flex',
          gap: 10,
          padding: 20,
          flexWrap: 'wrap',
          backgroundColor: 'var(--bg-color-2)',
        }}
      >
        <DragWrapper
          style={{
            gap: 20,
          }}
          onChange={(item) => {
            console.log(item);
          }}
          items={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((i) => {
            return {
              key: i,
              content: (
                <div
                  style={{
                    width: 100,
                    height: 100,
                    background: 'var(--bg-color)',
                    color: 'var(--text-color)',
                    padding: '0 4px',
                  }}
                >
                  {i}
                </div>
              ),
            };
          })}
        />
      </div>
    </>
  );
};
```

## API

```API
/packages/design/src/drag/wrapper/type.tsx
```
