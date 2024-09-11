import { IconClose } from '@yl-d/icon';
import { CodeEditor } from '@yl-d/code-editor';
import store from '../store';

export default () => {
  return (
    <div className="table-designer-absolute-panel">
      <div className="panel-header">
        <span className="panel-title">JsonSchema</span>
        <IconClose
          hover
          onClick={() => {
            store.activeBar = undefined;
          }}
        />
      </div>
      <div className="panel-body">
        <CodeEditor
          value={store.getStandardSchema()}
          minimapEnabled={false}
          readOnly
        />
      </div>
    </div>
  );
};
