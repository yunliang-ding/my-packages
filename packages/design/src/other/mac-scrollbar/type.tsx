import type React from 'react';

export interface BoxSize {
  // clientWidth
  CW: number;
  // scrollWidth
  SW: number;
  // clientHeight
  CH: number;
  // scrollHeight
  SH: number;
  // paddingTop
  PT: number;
  // paddingRight
  PR: number;
  // paddingBottom
  PB: number;
  // paddingLeft
  PL: number;
}

export interface ScrollPosition {
  scrollTop: number;
  scrollLeft: number;
}

export interface ActionPosition {
  pinX?: boolean;
  pinY?: boolean;
  // lastScrollTop
  lastST: number;
  // lastScrollLeft
  lastSL: number;
  startX: number;
  startY: number;
}

export type TrackGap = [startX: number, endX: number, startY: number, endY: number];

export interface ScrollbarBase {
  /**
   * Adapt to the background color of the container.
   * @defaultValue 'light'
   */
  skin?: 'light' | 'dark';
  /**
   * Gap at the cross end of the scroll bar.
   * @defaultValue 16
   */
  trackGap?: number | TrackGap | ((showBarX: boolean, showBarY: boolean) => TrackGap);
  /**
   * Track style.
   */
  trackStyle?: (horizontal?: boolean) => React.CSSProperties;
  /**
   * Thumb bar style.
   */
  thumbStyle?: (horizontal?: boolean) => React.CSSProperties;
  /**
   * Minimum thumb bar size.
   * @defaultValue 20
   */
  minThumbSize?: number;
}

export interface ScrollbarProps extends ScrollbarBase {
  /**
   * When set to true, the scrollbar in X-axis will not be available, regardless of the content width.
   */
  suppressScrollX?: boolean;
  /**
   * When set to true, the scroll bar in Y-axis will not be available, regardless of the content height.
   */
  suppressScrollY?: boolean;
}
