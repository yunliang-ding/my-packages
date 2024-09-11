> FileExplorer 文件目录

## 文件图标库

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/monaco-file-icon.css"
/>
```

## 基本使用

```tsx | react
import { FileExplorer } from '@yl-d/code-editor';
import files from '@/code-editor/files.ts';

export default () => {
  const explorerRef = React.useRef({});
  const [treeData, setTreeData] = React.useState(files);
  return (
    <FileExplorer
      treeData={treeData}
      projectName="my-code-space"
      style={{ width: 260, height: 400 }}
      explorerRef={explorerRef}
      onRefresh={async () => {
        explorerRef.current.openSpin();
        await new Promise((res) => setTimeout(res, 1000));
        setTreeData(files);
        explorerRef.current.closeSpin();
      }}
      onClick={(file) => {
        console.log('onClick', file);
      }}
      onCreateFile={async (file) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log(file);
      }}
      onRenameFile={async (file) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log(file);
      }}
      onDeleteFile={async (file) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log(file);
      }}
    />
  );
};
```

## git 标记

```tsx | react
import { FileExplorer } from '@yl-d/code-editor';
import files from '@/code-editor/files-git.ts';

export default () => {
  const explorerRef = React.useRef({});
  const [treeData, setTreeData] = React.useState(files);
  return (
    <FileExplorer
      treeData={treeData}
      projectName="my-code-space"
      style={{ width: 260, height: 400 }}
      explorerRef={explorerRef}
      onRefresh={async () => {
        explorerRef.current.openSpin();
        await new Promise((res) => setTimeout(res, 1000));
        setTreeData(files);
        explorerRef.current.closeSpin();
      }}
      onClick={(file) => {
        console.log('onClick', file);
      }}
      onCreateFile={async (file) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log(file);
      }}
      onRenameFile={async (file) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log(file);
      }}
      onDeleteFile={async (file) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log(file);
      }}
    />
  );
};
```
