import { cloneDeep } from '../../util';
import { DragForm, Table } from '@yl-d/design';
import { parseTableColumns, parseTableSchema } from '../util';
import { useEffect, useState } from 'react';
import store from '../store';
import { babelParse } from '@yl-d/shared';

export default () => {
  const {
    schema,
    formProps,
    tableProps,
    columns,
    selectTable,
    selectedKey,
    preview,
  } = store.useSnapshot();
  /** request 变化刷新下 table */
  const [refreshTable, setRefreshTable] = useState(Math.random());
  useEffect(() => {
    setRefreshTable(Math.random());
  }, [columns]);
  let pureProps;
  try {
    pureProps = babelParse({
      code: store.getStandardSchema(),
    });
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="table-canvas">
      {preview ? (
        <Table {...pureProps} />
      ) : (
        <>
          <DragForm
            {...formProps}
            items={schema}
            type="search"
            onChange={(value) => {
              store.schema = value;
            }}
            selectedKey={selectedKey}
            onSelected={(key: string) => {
              store.selectTable = false;
              store.selectedKey = key;
            }}
          />
          <div
            onClick={() => {
              store.selectTable = true;
              store.selectedKey = undefined;
            }}
          >
            <Table
              key={refreshTable}
              style={{
                border: selectTable
                  ? '2px dashed var(--primary-color)'
                  : '2px dashed #ccc',
              }}
              {...parseTableSchema(cloneDeep(tableProps))}
              columns={parseTableColumns(cloneDeep(columns))}
              searchSchema={{ hidden: true }}
            />
          </div>
        </>
      )}
    </div>
  );
};
