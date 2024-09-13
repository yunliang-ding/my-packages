import React, { useRef, useMemo, useState, useEffect } from 'react';
import { MarkdownViewer, encode, copyToClipBoard } from '@yl-d/shared';
import MarkdownViewerSource from './markdown-viewer-source';
import MarkdownViewerType from './markdown-viewer-type';
import { Menu, Tooltip } from '@yl-d/design';
import { IconCodepen, IconCopy, IconLaunch } from '@yl-d/icon';

const syncRequire = {};

export default ({ github, updateTime, require = {}, ...rest }: any) => {
  const mdRef: any = useRef({});
  const [needLoad, setNeedLoad] = useState(
    Object.keys(syncRequire).length === 0,
  );
  const [reload, setReload] = useState(Math.random());
  const [content, setContent] = useState();
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
  useEffect(() => {
    rest.content.then((res: any) => {
      setContent(res.default);
    });
  }, [rest.content]);
  // 等待 md 解析完毕拿到导航信息再重新render一次
  useEffect(() => {
    if (content !== undefined) {
      setTimeout(() => {
        setReload(Math.random());
      }, 300);
    }
  }, [content]);
  // 解析异步 require
  const initRequire = async () => {
    const keys = Object.keys(require);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (Object.prototype.toString.call(require[key]) == '[object Promise]') {
        syncRequire[key] = await require[key];
      } else {
        syncRequire[key] = require[key];
      }
    }
    setNeedLoad(false);
  };
  useEffect(() => {
    if (needLoad) {
      initRequire();
    }
  }, []);
  return (
    <div style={{ display: 'flex', backgroundColor: 'var(--bg-color)' }}>
      <div style={{ width: 'calc(100% - 180px)' }}>
        {useMemo(() => {
          return needLoad ? (
            <h4 style={{ margin: 12 }}>loading...</h4>
          ) : (
            <>
              <MarkdownViewer
                {...rest}
                ref={mdRef}
                content={content}
                require={syncRequire}
                source={MarkdownViewerSource}
                typesAPI={MarkdownViewerType}
                extraRender={({ tabs, code }: any) => {
                  return (
                    <>
                      <Tooltip title="复制代码">
                        <IconCopy
                          hover
                          onClick={() => {
                            copyToClipBoard(code);
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="打开 Playground">
                        <IconCodepen
                          hover
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
                          hover
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
            </>
          );
        }, [content, needLoad, syncRequire])}
      </div>
      {useMemo(
        () => (
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
        ),
        [reload],
      )}
    </div>
  );
};
