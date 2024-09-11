import { DescriptionsProps } from './type';
import './index.less';

export default ({
  style = {},
  title = '',
  column = 3,
  data = [],
  direction = 'horizontal',
}: DescriptionsProps) => {
  return (
    <div className={`yld-desc yld-desc-${direction}`} style={style}>
      {title && <div className="yld-desc-title">{title}</div>}
      <div className={`yld-desc-grid yld-desc-grid-${column}`}>
        {data?.map((item) => {
          return (
            <div
              key={item.label}
              className="yld-desc-item"
              style={{
                gridColumnStart: `span ${item.span || 1}`,
              }}
            >
              <span className="yld-desc-item-label">{item.label}</span>
              <span className="yld-desc-item-value">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
