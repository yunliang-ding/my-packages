import { IconRecord } from '@yl-d/icon';
import { TimelineProps } from './type';
import './index.less';

export default ({ items }: TimelineProps) => {
  return (
    <div className="yld-timeline">
      {items.map((item: any, index: number, arr: any) => {
        return (
          <div className="yld-timeline-item">
            <div className="yld-timeline-item-dot">
              {item.dot || (
                <IconRecord
                  style={{ color: item.color || 'var(--primary-color)' }}
                />
              )}
            </div>
            {index < arr.length - 1 && (
              <div className="yld-timeline-item-line" />
            )}
            <div className="yld-timeline-item-title">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};
