import { useState, useRef, useEffect } from 'react';
import { IconMore, IconClose, IconDown } from '@yl-d/icon';
import { Dropdown, Menu, Space } from '../..';
import { TabsProps } from './type';
import './index.less';

export default ({ style, closable, onClick, onRemove, ...rest }: TabsProps) => {
  const [tabs, setTabs] = useState(Array.isArray(rest.tabs) ? rest.tabs : []);
  const [splitIndex, setSplitIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(rest.activeKey || tabs[0]?.key);
  useEffect(() => {
    if (rest.activeKey !== undefined && rest.activeKey !== activeKey) {
      setActiveKey(rest.activeKey);
    }
  }, [rest.activeKey]);
  const innerRef = useRef<any>({});
  const tabsRef = useRef<HTMLDivElement>();
  const headRef = useRef<HTMLDivElement>();
  const borderRef = useRef<HTMLDivElement>();
  const activeItemRef = useRef<HTMLDivElement>();
  /** 选中的下标 */
  const activeIndex = tabs.findIndex((i) => i.key === activeKey);
  /**
   * 调整下划线位置
   */
  useEffect(() => {
    if (activeItemRef.current) {
      borderRef.current.style.width =
        activeItemRef.current.getBoundingClientRect().width + 'px';
      borderRef.current.style.left =
        activeItemRef.current.getBoundingClientRect().left -
        tabsRef.current.getBoundingClientRect().left +
        'px';
    }
  }, [activeKey, activeIndex, splitIndex]);
  useEffect(() => {
    const adjustTabs = () => {
      const headerWidth = headRef.current.getBoundingClientRect()?.width;
      /** 遍历tab，是否超出范围 */
      let itemWidth = 0;
      if (!innerRef.current.items) {
        innerRef.current.items = Array.from(
          headRef.current.getElementsByClassName('yld-tabs-header-item'),
        ).map((item) => {
          return item.getBoundingClientRect()?.width;
        });
      }
      const { items } = innerRef.current;
      for (let i = 0; i < items.length; i++) {
        itemWidth += items[i];
        /** 超出范围需要做 DropDown */
        if (itemWidth + 78 > headerWidth) {
          setSplitIndex(i);
          break;
        }
      }
    };
    adjustTabs();
    // window.addEventListener('resize', adjustTabs);
    // return () => {
    //   window.removeEventListener('resize', adjustTabs);
    // };
  }, []);
  return (
    <>
      <div className="yld-tabs" style={style} ref={tabsRef}>
        <div className="yld-tabs-header" ref={headRef}>
          {(splitIndex > 0 ? tabs.slice(0, splitIndex) : tabs).map(
            (tab, index) => {
              const className = ['yld-tabs-header-item'];
              if (tab.key === activeKey) {
                className.push('yld-tabs-header-item-active');
              }
              return (
                <div
                  ref={tab.key === activeKey ? activeItemRef : null}
                  key={tab.key}
                  className={className.join(' ')}
                  onClick={() => {
                    setActiveKey(tab.key);
                    onClick?.(tab.key);
                  }}
                >
                  <span className="yld-tabs-header-item-label">
                    {tab.label}
                    {closable && (
                      <IconClose
                        style={{ fontSize: 12 }}
                        onClick={(e) => {
                          e.stopPropagation(); // 阻止往上冒泡
                          tabs.splice(index, 1);
                          setTabs([...tabs]);
                          setActiveKey(tabs[0]?.key);
                          onRemove?.(tab);
                        }}
                      />
                    )}
                  </span>
                </div>
              );
            },
          )}
          {/** 展示 Dropdown */}
          {splitIndex > 0 && (
            <Dropdown
              droplist={
                <Menu
                  nav
                  menus={(tabs.slice(splitIndex) as any).map((item) => {
                    return {
                      path: item.key,
                      ...item,
                    };
                  })}
                  menuClick={(a, selectKey) => {
                    setActiveKey(selectKey);
                    onClick?.(selectKey);
                  }}
                />
              }
            >
              <div
                ref={activeIndex >= splitIndex ? activeItemRef : null}
                className={
                  activeIndex >= splitIndex
                    ? 'yld-tabs-header-item yld-tabs-header-item-active'
                    : 'yld-tabs-header-item'
                }
              >
                <span className="yld-tabs-header-item-label">
                  <Space>
                    <IconMore />
                    <IconDown />
                  </Space>
                </span>
              </div>
            </Dropdown>
          )}
          {/* 展示选中边框 */}
          {tabs.length > 0 && (
            <>
              <div className="yld-tabs-header-border" />
              <div className="yld-tabs-item-active-border" ref={borderRef} />
            </>
          )}
        </div>
        <div className="yld-tabs-content">
          {/* {tabs &&
            tabs.map((tab, index) => {
              return (
                <div
                  key={tab.key}
                  className={'yld-tabs-content-item'}
                  style={{
                    left: (index - activeIndex) * 100 + '%',
                  }}
                >
                  {tab.content}
                </div>
              );
            })} */}
          <div className={'yld-tabs-content-item'}>
            {tabs[activeIndex]?.content}
          </div>
        </div>
      </div>
    </>
  );
};
