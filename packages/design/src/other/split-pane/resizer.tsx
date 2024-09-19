import { CSSProperties } from 'react';

interface ResizeProps {
  direction: 'vertical' | 'horizontal';
  style?: CSSProperties;
  onTouchStart: Function;
  onTouchEnd: Function;
  onMouseDown: Function;
}

export default ({
  onMouseDown,
  onTouchStart,
  onTouchEnd,
  direction,
  style,
}: ResizeProps) => {
  return (
    <span
      role="presentation"
      className={['resizer', direction].join(' ')}
      style={style}
      onMouseDown={(event) => onMouseDown(event)}
      onTouchStart={(event) => {
        event.preventDefault();
        onTouchStart(event);
      }}
      onTouchEnd={(event) => {
        event.preventDefault();
        onTouchEnd(event);
      }}
    />
  );
};
