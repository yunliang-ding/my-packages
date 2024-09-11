import { IconClose } from '@yl-d/icon';
import { CodeEditor } from '@yl-d/code-editor';
import store from '../store';

export default () => {
  return (
    <div className="form-designer-absolute-panel form-designer-json-schema">
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
