import { useState, useRef } from 'react';
import { AnchorProps } from './type';
import './index.less';

export default ({
  list,
  height = 500,
  minusHeight = 0,
  defaultActivityKey,
  children = null,
  scrollElement = '.yld-anchor-right',
}: AnchorProps) => {
  const tabs = list.map((item: any) => {
    return {
      key: item.title,
      ...item,
    };
  });
  const [activeKey, setActiveKey] = useState(defaultActivityKey);
  const wrapperRef: any = useRef({});
  const onAnchorClick = (key: string) => {
    const el: any = document.querySelector(`#${key}`);
    if (el) {
      setActiveKey(key);
      wrapperRef.current.querySelector(scrollElement).scrollTo({
        top: el.offsetTop - minusHeight,
        behavior: 'smooth',
      });
    }
  };
  // 左侧锚点模块的高度
  return (
    <div
      className="yld-anchor"
      style={{ height }}
      ref={wrapperRef}
    >
      <div className="yld-anchor-left">
        {tabs.map((item) => {
          return (
            <div
              className={
                item.key === activeKey
                  ? 'yld-anchor-left-nav-active'
                  : 'yld-anchor-left-nav'
              }
              key={item.key}
              onClick={onAnchorClick.bind(null, item.key)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="yld-anchor-right">
        {children ||
          tabs.map((item) => {
            return (
              <div
                key={item.key}
                id={item.key}
                className="yld-anchor-right-item"
              >
                <div className="yld-anchor-right-item-head">{item.title}</div>
                <div className="yld-anchor-right-item-body">{item.content}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
