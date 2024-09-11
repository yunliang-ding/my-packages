import { IconCode, IconCodeBlock, IconSettings } from '@yl-d/icon';
import store from '../store';

export default () => {
  return (
    <div className="form-designer-body-sider">
      <div className="form-designer-body-sider-item">
        <IconCode
          hover
          style={{ fontSize: 24 }}
          onClick={() => {
            store.activeBar = 1;
          }}
        />
      </div>
      <div className="form-designer-body-sider-footer">
        <IconCodeBlock
          style={{ fontSize: 24 }}
          onClick={() => {
            store.activeBar = 2;
          }}
        />
        <IconSettings
          style={{ fontSize: 24 }}
          onClick={() => {
            store.activeBar = 3;
          }}
        />
      </div>
    </div>
  );
};
