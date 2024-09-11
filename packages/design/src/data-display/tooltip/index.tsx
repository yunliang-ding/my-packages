import { useState, useEffect, useRef } from 'react';
import { debounce } from '../../tools';
import { TooltipProps } from './type';
import './index.less';

export default ({
  children,
  title,
  placement = 'top',
  overlayClassName,
  overlayStyle = {},
  visible,
  onVisibleChange,
  innerStyle,
}: TooltipProps) => {
  const [open, setOpen] = useState(visible);
  const [style, setStyle]: any = useState({});
  const toolTipRef: any = useRef();
  const toolTipInnerRef: any = useRef();
  useEffect(() => {
    updatePosition();
  }, [title]);
  const updatePosition = () => {
    if (toolTipRef.current) {
      let style: any = {};
      let element = toolTipRef.current.firstElementChild
        ? toolTipRef.current.firstElementChild
        : toolTipRef.current;
      const { left, width, height, top } = element.getBoundingClientRect();
      if (placement === 'top') {
        style.top = top;
        style.left = left + width / 2;
      } else if (placement === 'bottom') {
        style.top = top + height;
        style.left = left + width / 2;
      } else if (placement === 'left') {
        style.top = top + height / 2;
        style.left = left;
      } else if (placement === 'right') {
        style.top = top + height / 2;
        style.left = left + width;
      } else {
        // top default
        style.top = top;
        style.left = left + width / 2;
      }
      setStyle(style);
    }
  };
  useEffect(() => {
    const onResize = debounce(() => {
      updatePosition();
    });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  /**
   * 组装clasName
   */
  let className = ['yld-tooltip'];
  if (placement === 'top') {
    className.push('yld-tooltip-placement-top');
  } else if (placement === 'left') {
    className.push('yld-tooltip-placement-left');
  } else if (placement === 'right') {
    className.push('yld-tooltip-placement-right');
  } else if (placement === 'bottom') {
    className.push('yld-tooltip-placement-bottom');
  }
  if (overlayClassName) {
    className.push(overlayClassName);
  }
  return (
    <div
      className={open ? 'yld-tooltip-wrapper' : 'yld-tooltip-wrapper-hidden'}
    >
      <span
        ref={toolTipRef}
        onMouseOver={() => {
          setOpen(true);
          updatePosition();
          typeof onVisibleChange === 'function' && onVisibleChange(true);
        }}
        onMouseOut={() => {
          setOpen(false);
          typeof onVisibleChange === 'function' && onVisibleChange(false);
        }}
      >
        {children}
      </span>
      <div
        style={{ ...overlayStyle, ...style }}
        className={className.join(' ')}
      >
        <div className="yld-tooltip-content">
          <div className="yld-tooltip-arrow"></div>
          <div
            style={innerStyle}
            className="yld-tooltip-inner"
            ref={toolTipInnerRef}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};
