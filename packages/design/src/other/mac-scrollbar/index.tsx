/* eslint-disable no-undef */
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { isEnableStyle, scrollTo } from './util';
import type { ScrollbarProps } from './type';
import { useScrollbar } from './use-scrollbar';
import './index.less';

export interface MacScrollbarProps extends ScrollbarProps, React.HtmlHTMLAttributes<HTMLElement> {
  /**
   * Custom element type.
   * @defaultValue 'div'
   */
  as?: keyof JSX.IntrinsicElements | string;
}

export default forwardRef<HTMLElement, MacScrollbarProps>(
  (
    {
      className = '',
      onScroll,
      children,
      style,
      skin,
      trackGap,
      trackStyle,
      thumbStyle,
      minThumbSize,
      suppressScrollX,
      suppressScrollY,
      as = 'div',
      ...props
    },
    ref,
  ) => {
    const scrollBoxRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => scrollBoxRef.current as HTMLElement);

    const [scrollbarNode, moveTo] = useScrollbar(
      scrollBoxRef,
      (scrollOffset, horizontal) => scrollTo(scrollBoxRef.current, scrollOffset, horizontal),
      {
        skin,
        trackGap,
        trackStyle,
        thumbStyle,
        minThumbSize,
        suppressScrollX,
        suppressScrollY,
      },
    );

    function handleScroll(evt: React.UIEvent<HTMLElement, UIEvent>) {
      if (onScroll) {
        onScroll(evt);
      }
      moveTo(evt.target as HTMLElement);
    }

    const Wrapper = as as unknown as React.HTMLFactory<HTMLElement>;

    return (
      <Wrapper
        className={`ms-container${className && ` ${className}`}`}
        ref={scrollBoxRef}
        onScroll={handleScroll}
        style={{
          overflowX: isEnableStyle(suppressScrollX),
          overflowY: isEnableStyle(suppressScrollY),
          ...style,
        }}
        {...props}
      >
        {scrollbarNode}
        {children}
      </Wrapper>
    );
  },
);
