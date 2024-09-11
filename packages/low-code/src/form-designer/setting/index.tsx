import { IconClose } from '@yl-d/icon';
import { CodeEditor } from '@yl-d/code-editor';
import store from '../store';

export default () => {
  const { setting } = store.useSnapshot();
  return (
    <div className="form-designer-absolute-panel">
      <div className="panel-header">
        <span className="panel-title">设置</span>
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
          mode="json"
          debounceTime={0}
          onChange={(value) => {
            store.setting = value;
          }}
          value={setting as any}
        />
      </div>
    </div>
  );
};
