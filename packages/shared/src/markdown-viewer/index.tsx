import { forwardRef, useImperativeHandle, useMemo, ReactNode } from 'react';
import babelParse from '../babel-parse';
import ComponentWrap from './component-wrap';
import SyntaxHighlight from './syntax-highlight';
import { Table } from '@yl-d/design';
import remarkGfm from 'remark-gfm';
import './index.less';

export interface MarkDownViewerProps {
  /** 文件内容 */
  content: string;
  /** 解析 React 组件的依赖 */
  require?: any;
  /** 依赖的源码 */
  source?: any;
  /** api类型数据源 */
  typesAPI?: any;
  /** 扩展按钮 */
  extraRender?: (params: any) => ReactNode;
}

export default forwardRef(
  (
    {
      content,
      require = {},
      source = {},
      typesAPI = {},
      extraRender = () => null,
    }: MarkDownViewerProps,
    ref,
  ) => {
    if (!(window as any)?.ReactMarkdown) {
      console.log('缺少资源: ReactMarkdown');
      return null;
    }
    const { default: ReactMarkdown } = (window as any)?.ReactMarkdown;
    const navs: any = useMemo(() => [], [content]);
    useImperativeHandle(ref, () => {
      return {
        getNavs: () => {
          return navs;
        },
      };
    });
    return (
      <div className="markdown-viewer" style={{ position: 'relative' }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a({ children, href }) {
              return (
                <a target="_blank" href={href}>
                  {children}
                  <svg
                    viewBox="0 0 100 100"
                    width="15"
                    height="15"
                    style={{
                      position: 'relative',
                      top: 3,
                      marginLeft: 4,
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                    ></path>
                    <polygon
                      fill="currentColor"
                      points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                    ></polygon>
                  </svg>
                </a>
              );
            },
            h1({ children }) {
              return <h1 className="markdown-viewer-h1">{children}</h1>;
            },
            h2({ children }) {
              const title = (children[0] as string).replaceAll(' ', '');
              navs.push(title);
              return (
                <h2 className="markdown-viewer-h2" id={title}>
                  {children}
                </h2>
              );
            },
            h3({ children }) {
              return <h3 className="markdown-viewer-h3">{children}</h3>;
            },
            ol({ children }) {
              return <ol className="markdown-viewer-ol">{children}</ol>;
            },
            ul({ children }) {
              return <ul className="markdown-viewer-ul">{children}</ul>;
            },
            li({ children }) {
              return <li className="markdown-viewer-li">{children}</li>;
            },
            strong({ children }) {
              return <div className="markdown-viewer-strong">{children}</div>;
            },
            blockquote({ children }) {
              return (
                <div className="markdown-viewer-blockquote">{children}</div>
              );
            },
            pre({ children }) {
              return <div className="markdown-viewer-pre">{children}</div>;
            },
            code({ node, inline, className, children, ...props }) {
              // 渲染 React 组件
              if ((node?.data?.meta as string)?.startsWith?.('| react')) {
                const style: any = {};
                const splitString = (node?.data?.meta as string).split?.(' | ');
                if (splitString.length > 1) {
                  style.backgroundColor = splitString[1];
                }
                if (splitString.length > 1) {
                  style.backgroundColor = splitString[1];
                }
                return (
                  <ComponentWrap
                    extraRender={extraRender}
                    code={children[0]}
                    require={require}
                    style={style}
                    source={source}
                    expand={(node?.data?.meta as string)?.startsWith?.(
                      '| reactExpand',
                    )}
                  />
                );
              }
              // 仅 渲染 React 组件
              if ((node?.data?.meta as string)?.startsWith?.('| pureReact')) {
                const Comp = babelParse({
                  code: children[0] as string,
                  require,
                });
                const style: any = {};
                const splitString = (node?.data?.meta as string).split?.(' | ');
                if (splitString.length > 1) {
                  style.backgroundColor = splitString[1];
                }
                return <Comp />;
              }
              const match = /language-(\w+)/.exec(className || '');
              const code = String(children).replace(/\n$/, '');
              // 渲染API表格
              if (match?.[1] === 'API') {
                const data =
                  typesAPI[(children[0] as string).replaceAll('\n', '')];
                return (
                  <Table
                    pagination={false}
                    useFilter={false}
                    useRefresh={false}
                    request={async () => {
                      return {
                        total: data.length,
                        data,
                        success: true
                      }
                    }}
                    columns={[
                      {
                        title: '属性名',
                        dataIndex: 'name',
                        width: 160,
                      },
                      {
                        title: '描述',
                        dataIndex: 'description',
                        width: 120,
                      },
                      {
                        title: '类型',
                        dataIndex: 'type',
                        render(type) {
                          return (
                            <code
                              title={type}
                              style={{
                                padding: '2px 5px',
                                color: '#d56161',
                                background: ' var(--bg-color-3)',
                                borderRadius: 2,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {type}
                            </code>
                          );
                        },
                      },
                      {
                        title: '默认值',
                        dataIndex: 'defaultValue',
                        width: 100,
                        render(defaultValue) {
                          return defaultValue ? (
                            <code
                              style={{
                                padding: '2px 5px',
                                color: '#d56161',
                                background: ' var(--bg-color-2)',
                                borderRadius: 2,
                              }}
                            >
                              {defaultValue}
                            </code>
                          ) : (
                            '-'
                          );
                        },
                      },
                      {
                        title: '是否必选',
                        dataIndex: 'required',
                        width: 100,
                        render(required) {
                          return required ? (
                            <span
                              style={{
                                background: '#35cd4b',
                                color: "#fff",
                                padding: 4,
                              }}
                            >
                              是
                            </span>
                          ) : (
                            <span
                              style={{
                                background: '#fdbc40',
                                color: "#fff",
                                padding: 4,
                              }}
                            >
                              否
                            </span>
                          );
                        },
                      },
                    ]}
                  />
                );
              }
              return !inline && match ? (
                <div style={{ position: 'relative' }}>
                  <SyntaxHighlight code={code} language={match[1]} />
                </div>
              ) : (
                <code
                  style={{
                    padding: '2px 5px',
                    color: '#d56161',
                    background: 'var(--color-fill-2)',
                    borderRadius: 2,
                  }}
                >
                  {children}
                </code>
              );
            },
            table({ children }) {
              return (
                <table className="markdown-viewer-table">{children}</table>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  },
);
