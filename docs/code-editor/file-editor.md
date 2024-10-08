> FileEditor 右侧编辑器区域

## 基本使用

```tsx | react
import { FileEditor } from '@yl-d/code-editor';

const files = [
  {
    path: '/User/project/src/index.tsx',
    type: 'file',
    extension: '.tsx',
    name: 'index.tsx',
    notSave: false,
    content: `export default () => {
  return 'demo'
}`,
  },
  {
    path: '/User/project/src/config.json',
    type: 'file',
    extension: '.json',
    name: 'config.json',
    notSave: false,
    content: `{
  "name": "123abc"
}`,
  },
];
export default () => {
  return (
    <FileEditor
      defaultFiles={files}
      defaultSelectedKey={files[0].path}
      style={{ width: '100%', height: 300 }}
      onClose={(file) => {
        console.log('onClose', file);
      }}
      onClick={(file) => {
        console.log('onClick', file);
      }}
      onChange={(code, notSaveCount) => {
        console.log('onChange', code, notSaveCount);
      }}
      onSave={async (code) => {
        await new Promise((res) => setTimeout(res, 3000));
        console.log('onSave', code);
      }}
    />
  );
};
```

## 和远程文件对比

```tsx | react
import { FileEditor } from '@yl-d/code-editor';

const files = [
  {
    path: '/User/project/src/age.tsx',
    type: 'file',
    extension: '.tsx',
    name: 'age.tsx',
    gitStatus: 'M',
    showDiff: true,
    notSave: false,
    content: `export default () => {
  return 'demo'
}`,
    stageContent: `export default () => {
  return 'just test'
}`,
  },
  {
    path: '/User/project/src/age.json',
    type: 'file',
    extension: '.json',
    name: 'age.json',
    gitStatus: 'U',
    showDiff: true,
    notSave: false,
    content: `{
  "name": "123abc"
}`,
  },
];
export default () => {
  return (
    <FileEditor
      defaultFiles={files}
      defaultSelectedKey={files[0].path}
      style={{ width: 1000, height: 300 }}
      onClose={(file) => {
        console.log('onClose', file);
      }}
      onClick={(file) => {
        console.log('onClick', file);
      }}
      onChange={(code) => {
        console.log('onChange', code);
      }}
      onSave={async (code) => {
        await new Promise((res) => setTimeout(res, 1000));
        console.log('onSave', code);
      }}
    />
  );
};
```

## 自定义右侧操作按钮

```tsx | react
import { FileEditor } from '@yl-d/code-editor';

const files = [
  {
    path: '/User/project/src/user.tsx',
    type: 'file',
    extension: '.tsx',
    name: 'user.tsx',
    notSave: false,
    content: `export default () => {
  return 'demo'
}`,
  },
  {
    path: '/User/project/src/user.config.json',
    type: 'file',
    extension: '.json',
    name: 'user.config.json',
    notSave: false,
    content: `{
  "name": "123abc"
}`,
  },
];

export default () => {
  return (
    <FileEditor
      defaultFiles={files}
      defaultSelectedKey={files[0].path}
      style={{ width: '100%', height: 300 }}
      extra={[
        {
          key: 'preview',
          icon: 'codicon codicon-open-preview',
          title: '预览',
          visible(file) {
            return file.extension === '.tsx';
          },
          onClick(file) {
            console.log(file);
          },
        },
      ]}
      onClose={(file) => {
        console.log('onClose', file);
      }}
      onClick={(file) => {
        console.log('onClick', file);
      }}
      onChange={(code) => {
        console.log('onChange', code);
      }}
      onSave={async (code) => {
        await new Promise((res) => setTimeout(res, 1000));
        console.log('onSave', code);
      }}
    />
  );
};
```

## 自定义渲染

```tsx | react
import { FileEditor } from '@yl-d/code-editor';
import { Button } from '@yl-d/design';

const files = [
  {
    type: 'file',
    path: '/User/project/src/demo.tsx',
    extension: '.tsx',
    name: 'demo.tsx',
    content: `export default () => {
  return 'demo'
}`,
  },
  {
    type: 'file',
    path: '/User/project/src/index.ts.preview',
    extension: '.preview',
    name: 'index.ts.preview',
    render() {
      return (
        <div>
          <h1 style={{ color: '#fff' }}>这是自定义渲染</h1>
          <Button>测试</Button>
        </div>
      );
    },
  },
];

export default () => {
  const editorRef = React.useRef({});
  return (
    <>
      <Button
        style={{ marginBottom: 12 }}
        onClick={() => {
          editorRef.current.addTab({
            name: 'user.tsx.preview',
            path: 'src/user.tsx.preview',
            render() {
              return (
                <h2 style={{ color: '#fff' }}>这个是动态添加的自定义渲染</h2>
              );
            },
          });
        }}
      >
        添加一个自定义渲染
      </Button>
      <FileEditor
        defaultFiles={files}
        defaultSelectedKey={files[0].path}
        editorRef={editorRef}
        style={{ width: '100%', height: 300 }}
        onClose={(file) => {
          console.log('onClose', file);
        }}
        onClick={(file) => {
          console.log('onClick', file);
        }}
        onChange={(code) => {
          console.log('onChange', code);
        }}
        onSave={async (code) => {
          await new Promise((res) => setTimeout(res, 1000));
          console.log('onSave', code);
        }}
      />
    </>
  );
};
```