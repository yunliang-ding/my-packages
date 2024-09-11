import axios from 'axios';
import store from '../store';
import { CodeEditor } from '@yl-d/code-editor';
import { IconClose } from '@yl-d/icon';

export default () => {
  const { storeCode } = store.useSnapshot();
  return (
    <div className="form-designer-absolute-panel">
      <div className="panel-header">
        <span className="panel-title">状态管理</span>
        <IconClose
          hover
          onClick={() => {
            store.activeBar = undefined;
          }}
        />
      </div>
      <div className="panel-body">
        <CodeEditor
          style={{
            height: '100%',
            width: '100%',
          }}
          mode="function"
          debounceTime={0}
          onChange={(value) => {
            store.storeCode = value;
          }}
          require={{
            axios,
          }}
          value={storeCode}
        />
      </div>
    </div>
  );
};
