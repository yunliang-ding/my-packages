/* eslint-disable no-alert */
import { iconMapping } from '../icon-mapping';
import { FileProps } from '../file-explorer/types';

const prefix = 'ide-editor-file-editor-header';

export default ({
  tabs = [],
  selectedKey,
  onClick,
  onTabClose,
  extra,
}: any) => {
  const currentFile: FileProps = tabs.find((file) => file.path === selectedKey);
  if (currentFile === undefined) {
    return null;
  }
  let dir = selectedKey.split('/');
  dir = dir.slice(0, dir.length - 1).filter((i) => i);
  return (
    <div className="ide-editor-file-editor-header">
      <div className={`${prefix}-tabs`}>
        <div className={`${prefix}-tabs-left`}>
          {tabs.map((tab: FileProps, index) => {
            return (
              <div
                key={tab.path}
                className={
                  tab.path === selectedKey
                    ? `${prefix}-tabs-left-item ${prefix}-tabs-left-item-selected`
                    : `${prefix}-tabs-left-item`
                }
                onClick={() => {
                  onClick(tab);
                }}
              >
                <i className={`file-icon ${iconMapping[tab.extension]}`} />
                <span
                  className={`${prefix}-tabs-left-item-label${tab.gitStatus}`}
                >
                  {tab.name}
                  {tab.path.startsWith('~diff/') && ' (Working Tree)'}
                  &nbsp;&nbsp;{tab.gitStatus}
                </span>
                {tab.notSave && (
                  <div className={`${prefix}-tabs-left-item-dot`} />
                )}
                <div
                  className={`${prefix}-tabs-left-item-remove`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (tab.notSave) {
                      const result = confirm('当前文件未保存，是否确认关闭?');
                      if (result) {
                        onTabClose(tab, index);
                      }
                    } else {
                      onTabClose(tab, index);
                    }
                  }}
                >
                  <i className="codicon codicon-close" />
                </div>
              </div>
            );
          })}
        </div>
        {extra && (
          <div className={`${prefix}-tabs-right`}>
            {extra.map((item) => {
              return item.visible?.(currentFile) !== false ? (
                <i
                  className={item.icon}
                  title={item.title}
                  key={item.key}
                  onClick={() => {
                    item.onClick?.(currentFile);
                  }}
                />
              ) : null;
            })}
          </div>
        )}
      </div>
      {/* 面包屑 */}
      {selectedKey && (
        <div className={`${prefix}-breadcrumbs`}>
          {dir.map((i) => {
            return (
              <div className={`${prefix}-breadcrumbs-dir`} key={i}>
                {i}
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6066"
                  width="16"
                  height="16"
                >
                  <path
                    d="M648.533333 486.4L426.666667 264.533333c-12.8-12.8-38.4-12.8-51.2 0-12.8 12.8-12.8 38.4 0 51.2l196.266666 192-196.266666 192c-12.8 12.8-12.8 38.4 0 51.2 12.8 12.8 38.4 12.8 51.2 0l226.133333-217.6c12.8-8.533333 12.8-29.866667-4.266667-46.933333z"
                    p-id="6067"
                    fill="#aaa"
                  ></path>
                </svg>
              </div>
            );
          })}
          <div className={`${prefix}-breadcrumbs-dir`}>
            <i className={`file-icon ${iconMapping[currentFile.extension]}`} />
            {currentFile.name}
          </div>
        </div>
      )}
    </div>
  );
};
