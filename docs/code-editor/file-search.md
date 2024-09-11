> FileSearch 文件查找

## 基本使用

```tsx | react
import { FileSearch } from '@yl-d/code-editor';

export default () => {
  const explorerRef = React.useRef({});
  const [treeData, setTreeData] = React.useState([]);
  const init = async () => {
    explorerRef.current.openSpin();
    await new Promise((res) => setTimeout(res, 1000));
    setTreeData([
      {
        path: '/User/project/config.json',
        type: 'file',
        extension: '.json',
        name: 'config.json',
        size: 102,
        notSave: false,
        status: 'nomal',
        content: '',
      },
      {
        path: '/User/project/app.tsx',
        type: 'file',
        extension: '.tsx',
        name: 'app.tsx',
        status: 'nomal',
        size: 102,
        notSave: false,
        content: '',
      },
    ]);
    explorerRef.current.closeSpin();
  };
  React.useEffect(() => {
    init();
  }, []);
  return (
    <FileSearch
      explorerRef={explorerRef}
      style={{ width: 260, height: 400 }}
      treeData={treeData}
      onClick={(file) => {
        console.log('onClick', file);
      }}
      onSearch={async (keyword) => {
        await init();
      }}
    />
  );
};
```