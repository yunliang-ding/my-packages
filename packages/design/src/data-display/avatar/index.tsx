import { useEffect, useRef } from 'react';
import { AvatarProps } from './type';
import './index.less';

export default ({
  style = {},
  shape = 'circle',
  children = null,
  size = 40,
}: AvatarProps) => {
  const avatarRef = useRef<HTMLDivElement>();
  const textRef = useRef<HTMLSpanElement>();
  // 调整大小
  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.clientWidth;
      const scale = size / (textWidth + 8);
      if (size && scale < 1) {
        textRef.current.style.transform = `scale(${scale}) translateX(-50%)`;
      }
    }
  }, []);
  return (
    <div
      ref={avatarRef}
      style={Object.assign(style, {
        width: size,
        height: size,
      })}
      className={`yld-avatar yld-avatar-${shape}`}
    >
      {typeof children === 'string' ? (
        <span ref={textRef} className="yld-avatar-text">
          {children}
        </span>
      ) : (
        children
      )}
    </div>
  );
};
