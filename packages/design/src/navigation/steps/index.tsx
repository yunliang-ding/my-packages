import { StepsProps } from './type';
import { useEffect, useState } from 'react';
import { IconCheck } from '@yl-d/icon';
import './index.less';

export default ({
  style = {},
  items = [],
  direction = 'horizontal',
  ...rest
}: StepsProps) => {
  const [current, setCurrent] = useState(rest.current);
  useEffect(() => {
    if (rest.current !== current) {
      setCurrent(rest.current);
    }
  }, [rest.current]);
  const className = ['yld-steps'];
  if (direction === 'vertical') {
    className.push('yld-steps-vertical');
  }
  return (
    <div className={className.join(' ')} style={style}>
      {items?.map((item, index) => {
        const classNames = ['yld-steps-item'];
        if (current > index + 1) {
          classNames.push('yld-steps-item-finish');
        } else if (current === index + 1) {
          classNames.push('yld-steps-item-process', 'yld-steps-item-active');
        } else {
          classNames.push('yld-steps-item-wait');
        }
        return (
          <div className={classNames.join(' ')}>
            <div className='yld-steps-item-tail' />
            <div className="yld-steps-item-icon">
              {item.icon ? (
                <div className="yld-steps-icon">{item.icon}</div>
              ) : current > index + 1 ? (
                <div className="yld-steps-icon">
                  <IconCheck style={{ color: 'var(--primary-color)' }} />
                </div>
              ) : (
                <div className="yld-steps-item-icon-number">{index + 1}</div>
              )}
            </div>
            <div className="yld-steps-item-content">
              <div className="yld-steps-item-title">{item.title}</div>
              <div className="yld-steps-item-description">
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
