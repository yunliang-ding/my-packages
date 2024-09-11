import { Form } from '@yl-d/design';
import { RadioGroup } from '@yl-d/design';
import { CodeEditor } from '@yl-d/code-editor';
import { useMemo } from 'react';

export default ({
  tableType,
  setTableType,
  tablePropsConfig,
  onTableValuesChange,
  cellPropsConfig,
  onCellValuesChange,
  tableProps,
  columns,
}) => {
  const FormRender = useMemo(
    () => (
      <Form
        widgets={{
          CodeEditor,
        }}
        schema={tablePropsConfig}
        initialValues={tableProps}
        onValuesChange={onTableValuesChange}
      />
    ),
    [],
  );
  const FormCellRender = useMemo(
    () => (
      <Form
        widgets={{
          CodeEditor,
        }}
        schema={cellPropsConfig}
        initialValues={{
          columns,
        }}
        onValuesChange={onCellValuesChange}
      />
    ),
    [],
  );
  return (
    <>
      <div className="props-config-panel-header" id="table-cell-props-config">
        <RadioGroup
          style={{ width: '100%', height: 44 }}
          onChange={setTableType}
          value={tableType}
          type="button"
          options={['表格属性', '表格列属性'].map((value) => {
            return {
              label: value,
              value,
            };
          })}
        />
      </div>
      <div
        className="props-config-panel-body"
        style={{
          display: tableType === '表格属性' ? 'block' : 'none',
        }}
      >
        {FormRender}
      </div>
      <div
        className="props-config-panel-body"
        style={{
          display: tableType === '表格列属性' ? 'block' : 'none',
        }}
      >
        {FormCellRender}
      </div>
    </>
  );
};
