import { AnchorFormProps } from './type';
import { Form, CardForm, Anchor } from '../../';
import { useMemo } from 'react';
import { uuid } from '../../tools';
import './index.less';

export default ({
  height = 500,
  formProps = {
    schema: [],
  },
  ...rest
}: AnchorFormProps) => {
  const className = useMemo(() => `archor-form-${uuid(10)}`, []);
  const form = Form.useForm();
  const schema =
    typeof formProps.schema === 'function'
      ? formProps.schema(form)
      : formProps.schema;
  return (
    <div className="yld-anchor-card-form">
      <Anchor
        height={height + 100}
        scrollElement={`.${className} .yld-card-form-body`}
        minusHeight={56}
        list={schema
          .filter((item) => item.visible?.(formProps.initialValues || {}) !== false)
          .map((item: any) => {
            return {
              key: item.name,
              title: item.label,
            };
          })}
        {...rest}
      >
        <CardForm
          {...formProps}
          className={className}
          form={form}
          bodyStyle={{ height, overflow: 'auto' }}
        />
      </Anchor>
    </div>
  );
};
