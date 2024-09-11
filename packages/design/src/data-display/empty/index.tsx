import { IconEmpty } from '@yl-d/icon';
import { EmptyProps } from './type';
import './index.less';

export default ({
  label = '暂无数据',
  icon = <IconEmpty style={{ fontSize: 50 }} />,
}: EmptyProps) => {
  return (
    <div className="yld-empty-wrapper">
      {icon}
      <span className="yld-empty-wrapper-label">{label}</span>
    </div>
  );
};
