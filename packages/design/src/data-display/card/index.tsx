import { CardProps } from './type';
import './index.less';

export default ({
  title = '',
  className,
  bodyStyle = {},
  bordered = true,
  hoverable = true,
  style = {},
  extra,
  footer,
  children,
}: CardProps) => {
  const classNames = ['yld-card'];
  if(bordered){
    classNames.push('yld-card-bordered');
  }
  if (footer) {
    classNames.push('yld-card-hasFooter');
  }
  if(hoverable){
    classNames.push('yld-card-hoverable');
  }
  if (className) {
    classNames.push(className);
  }
  return (
    <div className={classNames.join(' ')} style={style}>
      <div className="yld-card-head">
        <div className="yld-card-head-title">{title}</div>
        <div className="yld-card-head-extra">{extra}</div>
      </div>
      <div className="yld-card-body" style={bodyStyle}>
        {children}
      </div>
      {footer && <div className="yld-card-footer">{footer}</div>}
    </div>
  );
};
