import { useMemo, useState } from 'react';
import { Form, Empty, RadioGroup } from '@yl-d/design';
import FormPropsConfig from './config/props-form';
import ItemPropsConfig from './config/props-item';
import { isEmpty } from '@yl-d/shared';
import debounce from 'lodash.debounce';
import { CodeEditor } from '@yl-d/code-editor';
import store from '../store';

export interface PropsConfigPanelTypes {
  /**
   * 设置防抖时间 (ms)
   * @default 100
   */
  debounceTime?: number;
  /** 主容器样式 */
  style?: any;
}

export default ({ style = {}, debounceTime = 100 }: PropsConfigPanelTypes) => {
  const [compontentType, setCompontentType]: any = useState('表单项配置');
  const { selectedKey, formProps } = store.useSnapshot();
  const { propsConfig, selectedSchema } = store.getPropsConfig();
  /** 防抖0.1s */
  const onFormValuesChange = debounce((_, values) => {
    store.formProps = values;
  }, debounceTime);
  /** 防抖0.1s */
  const onItemValuesChange = debounce((value) => {
    Object.assign(selectedSchema, value);
    store.schema = [...store.schema];
  }, debounceTime);
  /** 防抖0.1s */
  const onPropsValuesChange = debounce((value) => {
    Object.assign(selectedSchema.props, value);
    store.schema = [...store.schema];
  }, debounceTime);
  const FormRender = useMemo(
    () => (
      <Form
        schema={FormPropsConfig}
        initialValues={formProps}
        onValuesChange={onFormValuesChange}
        widgets={{
          CodeEditor,
        }}
      />
    ),
    [],
  );
  const FormItemRender = useMemo(
    () => (
      <Form
        schema={ItemPropsConfig()}
        initialValues={selectedSchema}
        onValuesChange={onItemValuesChange}
        widgets={{
          CodeEditor,
        }}
      />
    ),
    [selectedSchema],
  );
  const FormFieldRender = useMemo(
    () => (
      <Form
        schema={propsConfig}
        initialValues={selectedSchema?.props || {}}
        onValuesChange={onPropsValuesChange}
        widgets={{
          CodeEditor,
        }}
      />
    ),
    [selectedSchema],
  );
  return (
    <div className="props-config-panel" style={style} key={selectedKey}>
      {isEmpty(selectedKey) ? (
        <Empty label="请选择需要设置的表单项" />
      ) : (
        <>
          <div className="props-config-panel-header">
            <RadioGroup
              style={{ width: '100%', height: 44 }}
              onChange={setCompontentType}
              value={compontentType}
              type="button"
              options={['表单配置', '表单项配置', '输入项配置'].map((value) => {
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
              display: compontentType === '表单配置' ? 'block' : 'none',
            }}
          >
            {FormRender}
          </div>
          <div
            className="props-config-panel-body"
            style={{
              display: compontentType === '表单项配置' ? 'block' : 'none',
            }}
          >
            {FormItemRender}
          </div>
          <div
            className="props-config-panel-body"
            style={{
              display: compontentType === '输入项配置' ? 'block' : 'none',
            }}
          >
            {FormFieldRender}
          </div>
        </>
      )}
    </div>
  );
};
