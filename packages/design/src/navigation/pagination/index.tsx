import { useState, useEffect } from 'react';
import { Select, InputNumber } from '../..';
import { IconMore, IconLeft, IconRight } from '@yl-d/icon';
import { PaginationProps } from './type';
import './index.less';

export default ({
  pageNum = 1,
  pageSize = 10,
  total,
  onChange,
  pageSizeOptions,
  onPageSizeChange,
  showJumper,
}: PaginationProps) => {
  const [_pageNum, setpageNum] = useState(pageNum);
  const [_pageSize, setPageSize] = useState(pageSize);
  /**
   * update
   */
  useEffect(() => {
    setpageNum(pageNum);
  }, [pageNum]);
  useEffect(() => {
    setPageSize(pageSize);
  }, [pageSize]);
  const pageChange = (pageNum) => {
    setpageNum(pageNum);
    onChange?.(pageNum);
  };
  let totalPage = Math.ceil(total / _pageSize);
  let page = [];
  let arr = [1];
  if (totalPage > 8) {
    // 默认大于8 转为更多模式
    if (_pageNum > 5 && _pageNum + 5 < totalPage) {
      arr.push(
        -1,
        _pageNum - 2,
        _pageNum - 1,
        _pageNum,
        _pageNum + 1,
        _pageNum + 2,
        -2,
      );
    } else if (_pageNum + 5 >= totalPage) {
      arr.push(
        -1,
        totalPage - 5,
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
      );
    } else {
      arr.push(2, 3, 4, 5, 6, -2);
    }
    arr.push(totalPage);
    arr.forEach((item) => {
      page.push(
        <div
          key={Math.random()}
          className={
            _pageNum === item
              ? 'yld-pagination-item-active'
              : 'yld-pagination-item'
          }
          onClick={() => {
            if (item === -1) {
              pageChange(_pageNum - 5);
            } else if (item === -2) {
              pageChange(_pageNum + 5);
            } else {
              pageChange(item);
            }
          }}
        >
          {[-1, -2].indexOf(item) > -1 ? <IconMore /> : item}
        </div>,
      );
    });
  } else {
    for (let i = 1; i < totalPage + 1; i++) {
      page.push(
        <div
          key={Math.random()}
          className={
            _pageNum === i
              ? 'yld-pagination-item-active'
              : 'yld-pagination-item'
          }
          onClick={() => {
            pageChange(i);
          }}
        >
          {i}
        </div>,
      );
    }
  }
  return (
    <>
      <div className="yld-pagination">
        <div
          className={
            _pageNum == 1 ? 'yld-pagination-pre-disabled' : 'yld-pagination-pre'
          }
          onClick={() => {
            if (_pageNum != 1) {
              pageChange(_pageNum - 1);
            }
          }}
        >
          <IconLeft />
        </div>
        {page}
        <div
          className={
            _pageNum == totalPage
              ? 'yld-pagination-next-disabled'
              : 'yld-pagination-next'
          }
          onClick={() => {
            if (_pageNum !== totalPage) {
              pageChange(_pageNum + 1);
            }
          }}
        >
          <IconRight />
        </div>
        {pageSizeOptions && (
          <div className="yld-pagination-jump">
            <Select
              style={{ width: 104, height: 32 }}
              value={_pageSize}
              allowClear={false}
              onChange={(pageSize: number) => {
                setpageNum(1);
                setPageSize(pageSize);
                typeof onPageSizeChange === 'function' &&
                  onPageSizeChange(pageSize);
              }}
              options={pageSizeOptions.map((value) => {
                return {
                  label: `每页${value}条`,
                  value,
                };
              })}
            />
          </div>
        )}
        {showJumper && (
          <div className="yld-pagination-jump">
            <span className="yld-pagination-jump-label">跳转至</span>
            <InputNumber
              style={{ width: 80 }}
              min={1}
              max={totalPage}
              control={false}
              onBlur={(e) => {
                let num = parseInt(e.target.value);
                if (!isNaN(num)) {
                  const pageNum = num > totalPage ? totalPage : num;
                  setpageNum(pageNum);
                  onChange?.(pageNum);
                }
              }}
            />
            <span>页</span>
          </div>
        )}
        <span className="yld-pagination-total">共 {total} 条</span>
      </div>
    </>
  );
};
