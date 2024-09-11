import { SpaceProps } from './type';
import './index.less';

export default ({
  style = {},
  gap = 10,
  children,
  direction = 'horizontal',
}: SpaceProps) => {
  return (
    <div
      className={`yld-space yld-space-${direction}`}
      style={{ ...style, gap }}
    >
      {children}
    </div>
  );
};
