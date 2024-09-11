import React, { useRef, useMemo, useState, useEffect } from 'react';
import { MarkdownViewer, encode } from '@yl-d/shared';
import MarkdownViewerSource from './markdown-viewer-source';
import MarkdownViewerType from './markdown-viewer-type';
import { Menu, Tooltip } from '@yl-d/design';
import { IconCodepen, IconLaunch } from '@yl-d/icon';

export default ({ github, updateTime, ...rest }: any) => {
  const [, setReload] = useState(Math.random());
  const mdRef: any = useRef({});
  const defaultSelectedKeys = decodeURIComponent(location.hash.split('#')[2]);
  useEffect(() => {
    if (defaultSelectedKeys) {
      setTimeout(() => {
        document.getElementById(defaultSelectedKeys)?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    }
  }, []);
  // 等待 md 解析完毕拿到导航信息再重新render一次
  useEffect(() => {
    setTimeout(() => {
      setReload(Math.random());
    }, 300);
  }, [rest.content]);
  return (
    <div
      style={{ display: 'flex', backgroundColor: 'var(--bg-color)' }}
    >
      <div style={{ width: 'calc(100% - 180px)' }}>
        {useMemo(
          () => (
            <MarkdownViewer
              {...rest}
              ref={mdRef}
              source={MarkdownViewerSource}
              typesAPI={MarkdownViewerType}
              extraRender={({ tabs, code }: any) => {
                return (
                  <>
                    <Tooltip title="打开 Playground ">
                      <IconCodepen
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          const params = encode(
                            JSON.stringify({
                              tabs,
                              code,
                            }),
                          );
                          window.open(
                            `${location.pathname}#/~playground?${params}`,
                          );
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="新窗口预览">
                      <IconLaunch
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          const params = encode(
                            JSON.stringify({
                              code,
                              tabs,
                              previewOnly: true,
                            }),
                          );
                          window.open(
                            `${location.pathname}#/~playground?${params}`,
                          );
                        }}
                      />
                    </Tooltip>
                  </>
                );
              }}
            />
          ),
          [rest.content],
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12.5px 80px',
          }}
        >
          <a href={github} target="_blank">
            在 GitHub 上编辑此页
          </a>
          <span>
            <a>最后更新时间: </a> {new Date(updateTime).toLocaleString()}
          </span>
        </div>
      </div>
      <div className="markdown-viewer-navs">
        <Menu
          selectKey={defaultSelectedKeys}
          style={{ borderLeft: '1px solid var(--border-color)' }}
          menuClick={(e, nav) => {
            document.getElementById(nav)?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          menus={
            mdRef.current.getNavs?.()?.map?.((nav: string) => {
              return {
                path: nav,
                label: nav,
              };
            }) || []
          }
        />
      </div>
    </div>
  );
};
