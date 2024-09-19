import { useEffect, useState } from 'react';
import { CSSProperties, useRef } from 'react';
import { SplitPaneProps } from './type';
import Resizer from './resizer';
import Pane from './pane';
import './index.less';

const unFocus = (document, window) => {
  if (document.selection) {
    document.selection.empty();
  } else {
    try {
      window.getSelection().removeAllRanges();
    } catch (e) {}
  }
};

export default ({
  style = {},
  direction = 'vertical',
  disabled = false,
  defaultSize = 100,
  minSize = 60,
  maxSize = 400,
  leftPanel = null,
  rightPanel = null,
}: SplitPaneProps) => {
  const splitPaneRef = useRef();
  const pane1Ref = useRef<HTMLDivElement>();
  const pane2Ref = useRef();
  const [store, setStore]: any = useState({
    active: false,
    pane1Size: defaultSize,
    pane2Size: `calc(100% - ${defaultSize}px)`,
  });
  const { pane1Size, pane2Size, active, position } = store;
  const innerStyle: CSSProperties = {
    display: 'flex',
    flex: 1,
    height: '100%',
    position: 'absolute',
    outline: 'none',
    overflow: 'hidden',
    MozUserSelect: 'text',
    WebkitUserSelect: 'text',
    msUserSelect: 'text',
    userSelect: 'text',
  };
  if (direction === 'vertical') {
    Object.assign(innerStyle, {
      flexDirection: 'row',
      left: 0,
      right: 0,
    });
  } else {
    Object.assign(innerStyle, {
      bottom: 0,
      flexDirection: 'column',
      minHeight: '100%',
      top: 0,
      width: '100%',
    });
  }
  const onMouseDown = (event: any) => {
    const eventWithTouches = Object.assign({}, event, {
      touches: [{ clientX: event.clientX, clientY: event.clientY }],
    });
    onTouchStart(eventWithTouches);
  };
  const onTouchStart = (event) => {
    if (!disabled) {
      unFocus(document, window);
      const position = event.touches[0].clientX;
      setStore({
        ...store,
        active: true,
        position,
      });
    }
  };
  const onMouseMove = (event) => {
    const eventWithTouches = Object.assign({}, event, {
      touches: [{ clientX: event.clientX, clientY: event.clientY }],
    });
    const { active } = store;
    if (!disabled && active) {
      if (direction === 'vertical') {
        onTouchMoveX(eventWithTouches);
      } else {
        onTouchMoveY(eventWithTouches);
      }
    }
  };
  /** 垂直线 */
  const onTouchMoveX = (event) => {
    const { position } = store;
    unFocus(document, window);
    const current = event.touches[0].clientX;
    const { width } = pane1Ref.current.getBoundingClientRect();
    const newPane1Width = width - (position - current);
    let newPane1Size: string | number = newPane1Width;
    if (newPane1Width <= minSize) {
      newPane1Size = minSize;
    }
    if (newPane1Width >= maxSize) {
      newPane1Size = maxSize;
    }
    setStore({
      ...store,
      position: position - (position - current),
      pane1Size: newPane1Size,
      pane2Size: `calc(100% - ${newPane1Size}px)`,
    });
  };
  /** 水平线 */
  const onTouchMoveY = (event) => {
    const { position } = store;
    unFocus(document, window);
    const current = event.touches[0].clientY;
    const { height } = pane1Ref.current.getBoundingClientRect();
    const newPane1Height = height - (position - current);
    let newPane1Size: string | number = newPane1Height;
    if (newPane1Height <= minSize) {
      newPane1Size = minSize;
    }
    if (newPane1Height >= maxSize) {
      newPane1Size = maxSize;
    }
    setStore({
      ...store,
      position: position - (position - current),
      pane1Size: newPane1Size,
      pane2Size: `calc(100% - ${newPane1Size}px)`,
    });
  };
  const onMouseUp = () => {
    const { active } = store;
    if (!disabled && active) {
      setStore({ ...store, active: false });
    }
  };
  useEffect(() => {
    const onTouchMove = direction === 'vertical' ? onTouchMoveX : onTouchMoveY;
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
    };
  }, [active, position]);
  return (
    <div className="yld-split-pane" style={style}>
      <div ref={splitPaneRef} style={innerStyle}>
        <Pane eleRef={pane1Ref} direction={direction} size={pane1Size}>
          {leftPanel}
        </Pane>
        {!disabled && (
          <Resizer
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onMouseUp}
            direction={direction}
          />
        )}
        <Pane eleRef={pane2Ref} direction={direction} size={pane2Size}>
          {rightPanel}
        </Pane>
      </div>
    </div>
  );
};
