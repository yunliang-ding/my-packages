import { BreadcrumbProps } from './type';
import { Fragment } from 'react';
import './index.less';

export default ({
  onClick = () => undefined,
  style = {},
  separator = '/',
  items = [],
}: BreadcrumbProps) => {
  return (
    <div className="yld-breadcrumb" style={style}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Fragment key={item.breadcrumbName}>
            <div
              className="yld-breadcrumb-item"
              onClick={() => {
                onClick?.(item);
              }}
            >
              {item.icon}
              {item.breadcrumbName}
            </div>
            {!isLast && (
              <div className="yld-breadcrumb-item-separator">{separator}</div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
