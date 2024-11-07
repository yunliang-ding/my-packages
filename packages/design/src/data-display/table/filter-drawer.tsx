/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { IconDragDotVertical } from '@yl-d/icon';
import { Checkbox, DragWrapper, Drawer, Space } from '../..';

export default ({ columns, filterIds, setFilterIds, setColumns }) => {
  return Drawer({
    title: '列设置',
    width: 300,
    footer: false,
    style: {
      minWidth: 300,
    },
    render() {
      const [hiddenIds, setHiddenIds] = useState<string[]>(filterIds || []);
      const [indeterminate, setIndeterminate] = useState(false);
      useEffect(() => {
        setIndeterminate(
          hiddenIds.length > 0 && hiddenIds.length < columns.length,
        );
      }, [hiddenIds]);
      return (
        <div className="yld-table-filter">
          <div className="yld-table-filter-item" style={{ paddingLeft: 9 }}>
            <Checkbox
              indeterminate={indeterminate}
              checked={hiddenIds.length === 0}
              onChange={(e: any) => {
                if (e.target.checked) {
                  setHiddenIds([]);
                  setFilterIds([]);
                } else {
                  setHiddenIds(columns.map((i: any) => i.dataIndex));
                  setFilterIds(columns.map((i: any) => i.dataIndex));
                }
              }}
            >
              全选
            </Checkbox>
          </div>
          <DragWrapper
            style={{
              gap: 20,
            }}
            key={hiddenIds.length}
            onChange={(items: any) => {
              // 调整顺序
              setColumns(items.map((i: any) => i.column));
            }}
            items={columns.map((column: any) => {
              return {
                key: column.dataIndex,
                column,
                content: (
                  <div>
                    <div className="yld-table-filter-item">
                      <Space>
                        <IconDragDotVertical />
                        <Checkbox
                          checked={!hiddenIds.includes(column.dataIndex)}
                          onChange={(e: any) => {
                            if (e.target.checked) {
                              const idx = hiddenIds.findIndex(
                                (i) => i === column.dataIndex,
                              );
                              hiddenIds.splice(idx, 1);
                            } else {
                              hiddenIds.push(column.dataIndex);
                            }
                            setHiddenIds([...hiddenIds]);
                            setFilterIds([...hiddenIds]);
                          }}
                        >
                          {column.title}
                        </Checkbox>
                      </Space>
                    </div>
                  </div>
                ),
              };
            })}
          />
        </div>
      );
    },
  });
};
