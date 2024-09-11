import { useEffect, useRef, useState } from 'react';
import { Button, Form, Search, Spin } from '../..';
import { IconSettings, IconRefresh } from '@yl-d/icon';
import { transformColumns } from './util';
import { TableProps } from './type';
import FilterDrawer from './filter-drawer';
import Table from './table';
import './index.less';

const Contianer = ({ search, form, tableRef, columns, ...rest }: any) => {
  const [loading, setLoading] = useState(false); // 控制loading
  return (
    <Spin loading={loading}>
      {search.schema.length > 0 && (
        <Search
          {...search}
          onReset={async () => {
            form.clearValues({});
            await tableRef.current.search(form.getValues());
          }}
          onSearch={async () => {
            await tableRef.current.search(form.getValues());
          }}
        />
      )}
      <Table
        tableRef={tableRef}
        setLoading={setLoading}
        {...rest}
        columns={columns}
      />
    </Spin>
  );
};

export default ({
  tableRef = useRef({}),
  search = {
    schema: [],
    column: 3,
  },
  tools = [],
  filterIds = [],
  rowOperations,
  useRefresh = true,
  useFilter = true,
  style = {},
  autoNo = false,
  ...rest
}: TableProps) => {
  /** 内部维护下列 */
  const [columns, setColumns] = useState(rest.columns || []);
  useEffect(() => {
    setColumns(rest.columns || []);
  }, [rest.columns]);
  const [_filterIds, setFilterIds] = useState(filterIds || []);
  const innerTools = [...tools];
  if (useFilter) {
    innerTools.push({
      icon: <IconSettings />,
      className: 'btn-tool',
      onClick() {
        FilterDrawer({
          filterIds: _filterIds,
          setFilterIds,
          columns,
          setColumns,
        }).open();
      },
    });
  }
  if (useRefresh) {
    innerTools.push({
      icon: <IconRefresh />,
      type: 'primary',
      className: 'btn-tool',
      async onClick() {
        await tableRef.current.refresh();
      },
    });
  }
  // 查询表单实例
  const form = Form.useForm();
  // 解析 cloums
  const lastColums = [...transformColumns(columns)].filter(
    (i) => !_filterIds.includes(i.dataIndex),
  );
  // 自增序号
  if (autoNo) {
    lastColums.unshift({
      title: '序号',
      fixed: 'left',
      dataIndex: 'yld-serial-number',
      width: 80,
      render: (a: any, b: any, index: number) => {
        if (rest.pagination) {
          return (
            (rest.pagination.pageNum - 1) * rest.pagination.pageSize + index + 1
          );
        }
        return index + 1;
      },
    });
  }
  if (rowOperations) {
    const { width, menus } = rowOperations;
    lastColums.push({
      title: '操作',
      width,
      dataIndex: 'yld-table-row-operation',
      fixed: 'right',
      render(e: any, record: any, index: number) {
        return (
          <div className="yld-table-row-operation">
            {menus({
              record,
              refresh: tableRef.current.refresh,
              search: tableRef.current.search,
              index,
            }).map((item) => {
              return (
                <Button key={item.label} {...item} type={item.type || 'link'}>
                  {item.label}
                </Button>
              );
            })}
          </div>
        );
      },
    });
  }
  return (
    <div className="yld-table-contianer" style={style}>
      <Contianer
        tableRef={tableRef}
        form={form}
        search={search}
        tools={innerTools}
        {...rest}
        columns={lastColums}
      />
    </div>
  );
};
