import { useState } from 'react';
import { IconCaretRight } from '@yl-d/icon';
import { Checkbox } from '../..';
import { TreeProps, TreeNode } from './type';
import './index.less';

export default ({
  treeData = [],
  checkable = false,
  disabled = false,
  onCheck,
  onExpand,
  onSelect,
  style = {},
  ...rest
}: TreeProps) => {
  const [expandedKeys, setExpandedKeys] = useState(rest.expandedKeys || []);
  const [checkedKeys, setCheckedKeys] = useState(rest.checkedKeys || []);
  const [selectedKeys, setSelectedKeys] = useState(rest.selectedKey);
  const renderTree = (treeData: TreeNode[], level = 0) => {
    return treeData.map((item) => {
      let className = ['yld-tree-node'];
      if (item.disabled || disabled) {
        className.push('yld-tree-node-disabled');
      }
      let labelClassName = ['yld-tree-node-label'];
      if (expandedKeys.includes(item.key)) {
        labelClassName.push('yld-tree-node-label-open');
      }
      if (item.children) {
        labelClassName.push('yld-tree-node-parent');
      }
      if (item.selectable === false) {
        labelClassName.push('yld-tree-node-not-selectable');
      }
      return (
        <div key={item.key} className={className.join(' ')}>
          <div className={labelClassName.join(' ')}>
            <div className="yld-tree-node-indent">
              {new Array(level).fill('').map((i, index) => {
                return (
                  <div key={index} className="yld-tree-node-indent-block" />
                );
              })}
            </div>
            <div className="yld-tree-node-switcher">
              {item.children && (
                <IconCaretRight
                  onClick={(e) => {
                    if (item.disabled || disabled) return;
                    e.stopPropagation(); // 阻止冒泡
                    if (expandedKeys.includes(item.key)) {
                      expandedKeys.splice(
                        expandedKeys.findIndex((key) => key === item.key),
                        1,
                      ); // 删除
                    } else {
                      expandedKeys.push(item.key);
                    }
                    setExpandedKeys([...expandedKeys]);
                    onExpand?.([...expandedKeys]);
                  }}
                />
              )}
            </div>
            <span className="yld-tree-node-label-left" title={item.title}>
              {checkable ? (
                <Checkbox
                  disabled={item.disabled || disabled || item.selectable === false}
                  checked={checkedKeys.includes(item.key)}
                  onChange={() => {
                    let findIndex = checkedKeys.findIndex((key) => {
                      return key === item.key;
                    });
                    if (findIndex > -1) {
                      checkedKeys.splice(findIndex, 1);
                    } else {
                      checkedKeys.push(item.key);
                    }
                    setCheckedKeys([...checkedKeys]);
                    onCheck?.([...checkedKeys]);
                  }}
                >
                  <span className="yld-tree-node-label-left-text">
                    {item.title}
                  </span>
                </Checkbox>
              ) : (
                <span
                  className={
                    selectedKeys !== item.key
                      ? 'yld-tree-node-label-left-text'
                      : 'yld-tree-node-label-left-text-active'
                  }
                  onClick={() => {
                    if (item.disabled || disabled || item.selectable === false)
                      return;
                    setSelectedKeys(item.key);
                    onSelect?.(item.key);
                  }}
                >
                  {item.title}
                </span>
              )}
            </span>
          </div>
          {item.children && (
            <div
              className={
                !expandedKeys.includes(item.key) ? 'yld-tree-node-hidden' : ''
              }
            >
              {renderTree(item.children, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };
  return (
    <div className="yld-tree" style={style}>
      {renderTree(treeData)}
    </div>
  );
};
