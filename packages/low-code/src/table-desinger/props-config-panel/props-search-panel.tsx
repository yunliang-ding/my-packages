import { RadioGroup, Form } from '@yl-d/design';
import { CodeEditor } from '@yl-d/code-editor';
import { useMemo } from 'react';

export default ({
  setCompontentType,
  compontentType,
  FormPropsConfig,
  onFormValuesChange,
  ItemPropsConfig,
  onItemValuesChange,
  propsConfig,
  onWidgetValuesChange,
  formProps,
  selectedSchema,
}) => {
  const FormRender = useMemo(
    () => (
      <Form
        schema={FormPropsConfig}
        initialValues={formProps}
        onValuesChange={onFormValuesChange}
        widgets={{ CodeEditor }}
      />
    ),
    [],
  );
  const FormItemRender = useMemo(
    () => (
      <Form
        schema={ItemPropsConfig()}
        initialValues={selectedSchema || {}}
        onValuesChange={onItemValuesChange}
        widgets={{ CodeEditor }}
      />
    ),
    [selectedSchema],
  );
  const FormFieldRender = useMemo(
    () => (
      <Form
        schema={propsConfig}
        initialValues={selectedSchema?.props || {}}
        onValuesChange={onWidgetValuesChange}
        widgets={{ CodeEditor }}
      />
    ),
    [selectedSchema],
  );
  return (
    <>
      <div className="props-config-panel-header">
        <RadioGroup
          style={{ width: '100%', height: 44 }}
          onChange={setCompontentType}
          value={compontentType}
          type="button"
          options={['表单属性', '表单项属性', '部件属性'].map((value) => {
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
          display: compontentType === '表单属性' ? 'block' : 'none',
        }}
      >
        {FormRender}
      </div>
      <div
        className="props-config-panel-body"
        style={{
          display: compontentType === '表单项属性' ? 'block' : 'none',
        }}
      >
        {FormItemRender}
      </div>
      <div
        className="props-config-panel-body"
        style={{
          display: compontentType === '部件属性' ? 'block' : 'none',
        }}
      >
        {FormFieldRender}
      </div>
    </>
  );
};
