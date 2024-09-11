> GitManager 源码管理

## 基本使用

```tsx | react
import { GitManager } from '@yl-d/code-editor';

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
        gitStatus: 'U',
        status: 'nomal',
        children: [],
        content: '',
      },
      {
        path: '/User/project/app.tsx',
        type: 'file',
        extension: '.tsx',
        name: 'app.tsx',
        gitStatus: 'M',
        status: 'nomal',
        size: 102,
        notSave: false,
        children: [],
        content: '',
      },
    ]);
    explorerRef.current.closeSpin();
  };
  React.useEffect(() => {
    init();
  }, []);
  return (
    <GitManager
      style={{ width: 260, height: 400 }}
      explorerRef={explorerRef}
      onRefresh={init}
      treeData={treeData}
      onClick={(file) => {
        console.log('onClick', file);
      }}
    />
  );
};