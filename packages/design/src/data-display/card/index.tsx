import { CardProps } from './type';
import { IconDown, IconRight } from '@yl-d/icon';
import { useState } from 'react';
import './index.less';

export default ({
  title = '',
  className,
  bodyStyle = {},
  bordered = true,
  hoverable = true,
  expandable = false,
  style = {},
  extra,
  footer,
  children,
}: CardProps) => {
  const classNames = ['yld-card'];
  if (bordered) {
    classNames.push('yld-card-bordered');
  }
  if (footer) {
    classNames.push('yld-card-hasFooter');
  }
  if (hoverable) {
    classNames.push('yld-card-hoverable');
  }
  if (expandable) {
    classNames.push('yld-card-expandable');
  }
  if (className) {
    classNames.push(className);
  }
  const [collspan, setCollspan] = useState(true);
  if (!collspan) {
    classNames.push('yld-card-mini');
  }
  const IconDownOrRight = collspan ? IconDown : IconRight;
  return (
    <div className={classNames.join(' ')} style={style}>
      <div className="yld-card-head">
        <div className="yld-card-head-title">
          {title}
          {expandable && (
            <IconDownOrRight
              style={{ marginLeft: 6 }}
              hover
              onClick={() => {
                setCollspan(!collspan);
              }}
            />
          )}
        </div>
        <div className="yld-card-head-extra">{extra}</div>
      </div>
      <div className="yld-card-body" style={bodyStyle}>
        {children}
      </div>
      {footer && <div className="yld-card-footer">{footer}</div>}
    </div>
  );
};
