import { useState, useEffect } from 'react';
import { IconLeft, IconRight } from '@yl-d/icon';
import './index.less';
import { CarouselProps } from './type';

let swipeX = false;

const position = {
  x: 0,
  y: 0,
  x1: 0,
  y1: 0,
};

export default ({
  style = {},
  pages = [],
  fade = false,
  currentPage = 1,
  onChange,
  autoPlay = false,
  autoPlayTime = 3000,
  showArrow = false,
  legend = true,
  loop = true,
  swipe = true,
}: CarouselProps) => {
  let timer: any;
  /** update */
  useEffect(() => {
    setcurrentPage(currentPage);
  }, [currentPage]);
  const [_currentPage, setcurrentPage] = useState(currentPage);
  const updateCurrentPage = (page: number) => {
    clearTimeout(timer); // clear
    let currentPage = 1;
    if (page < 1) {
      currentPage = loop ? pages.length : 1;
    } else if (page > pages.length) {
      currentPage = loop ? 1 : pages.length;
    } else {
      currentPage = page;
    }
    setcurrentPage(currentPage);
    onChange?.(currentPage);
  };
  const Play = () => {
    timer = setTimeout(() => {
      updateCurrentPage(_currentPage + 1 > pages.length ? 1 : _currentPage + 1);
    }, autoPlayTime);
  };
  useEffect(() => {
    autoPlay && Play();
  }, [_currentPage]);
  /**
   * H5左右滑动触发
   */
  const touchstart = (event: any) => {
    if (!swipe) return;
    position.x = event.changedTouches[0].pageX;
    position.y = event.changedTouches[0].pageY;
    swipeX = true;
  };
  const touchmove = (event: any) => {
    if (!swipe) return;
    position.x1 = event.changedTouches[0].pageX;
    position.y1 = event.changedTouches[0].pageY;
    // 左右滑动
    if (
      swipeX &&
      Math.abs(position.x1 - position.x) - Math.abs(position.y1 - position.y) >
        0
    ) {
      // 阻止事件冒泡
      event.stopPropagation();
      if (position.x - position.x1 > 10) {
        // 往左拖拽
        updateCurrentPage(_currentPage + 1);
        event.preventDefault();
        swipeX = false;
      }
      if (position.x1 - position.x > 10) {
        // 往右拖拽
        updateCurrentPage(_currentPage - 1);
        event.preventDefault();
        swipeX = false;
      }
    }
  };
  return (
    <>
      <div
        className={`yld-carousel`}
        style={style}
        onTouchStart={touchstart}
        onTouchMove={touchmove}
      >
        {showArrow && (
          <>
            <div
              className="yld-carousel-before"
              onClick={() => {
                updateCurrentPage(_currentPage - 1);
              }}
            >
              <IconLeft />
            </div>
            <div
              className="yld-carousel-next"
              onClick={() => {
                updateCurrentPage(_currentPage + 1);
              }}
            >
              <IconRight />
            </div>
          </>
        )}
        {pages.map((page, index) => {
          return (
            <div
              key={index}
              className={
                _currentPage === index + 1
                  ? 'yld-carousel-page yld-carousel-page-current'
                  : 'yld-carousel-page'
              }
              style={{
                left: fade
                  ? 0
                  : index + 1 === _currentPage
                  ? 0
                  : 100 * (index + 1 - _currentPage) + '%',
                opacity: fade ? (index + 1 === _currentPage ? 1 : 0) : 1,
              }}
            >
              {page}
            </div>
          );
        })}
        {legend && (
          <div className="yld-carousel-legend">
            <div className="yld-carousel-legend-box">
              {pages.map((page, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index + 1 === _currentPage
                        ? 'yld-carousel-legend-box-item-active'
                        : 'yld-carousel-legend-box-item'
                    }
                    onClick={() => {
                      updateCurrentPage(index + 1);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
