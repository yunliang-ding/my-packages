import ReactSplitPane from 'react-split-pane';
import { SplitPaneProps } from './type';
import './index.less';

export default ({
  style = {},
  split = 'vertical',
  defaultSize = 100,
  minSize = 50,
  ...rest
}: SplitPaneProps) => {
  return (
    <div className="yld-split-pane" style={style}>
      <ReactSplitPane
        split={split}
        minSize={minSize}
        defaultSize={defaultSize}
        {...rest}
      />
    </div>
  );
};
