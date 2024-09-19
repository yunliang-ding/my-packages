import { CSSProperties, ReactNode } from 'react';

interface PaneProps {
  className?: string;
  children: ReactNode;
  direction: 'vertical' | 'horizontal';
  style?: CSSProperties;
  size: string | number;
  eleRef?: any;
}
export default ({
  children,
  direction,
  style: styleProps,
  size,
  eleRef,
}: PaneProps) => {
  let style: CSSProperties = {
    flex: 1,
    position: 'relative',
    outline: 'none',
  };
  if (size !== undefined) {
    if (direction === 'vertical') {
      style.width = size;
    } else {
      style.height = size;
      style.display = 'flex';
    }
    style.flex = 'none';
  }
  style = Object.assign({}, style, styleProps || {});
  return (
    <div ref={eleRef} className={['Pane', direction].join(' ')} style={style}>
      {children}
    </div>
  );
};
