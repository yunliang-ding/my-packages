import { IconDelete, IconDragDotVertical, IconPlus } from '@yl-d/icon';
import { memo, useEffect, useMemo, useState } from 'react';
import { Button, Form, FormItemProps, Space } from '../..';

export interface FormListProps {
  column: 1 | 2 | 3 | 4;
  title?: string;
  maxCount?: number;
  leastOne?: boolean;
  children: FormItemProps[];
  [key: string]: any;
}

const FormBody = ({
  schema,
  column,
  values,
  onValuesChange,
  disabled,
  form,
  name,
  index,
}) => {
  const subForm = Form.useForm();
  useEffect(() => {
    form.formlist[name][index] = {
      validator: subForm.validateFields,
    };
  }, []);
  return (
    <Form
      form={subForm}
      disabled={disabled}
      schema={schema}
      column={column}
      values={values}
      onValuesChange={onValuesChange}
    />
  );
};

export default memo(
  ({
    title = '',
    children = [],
    column = 1,
    maxCount = 5,
    leastOne = false,
    disabled = false,
    onChange,
    name,
    form,
    ...rest
  }: FormListProps) => {
    const [value, setValue] = useState(rest.value || []);
    useEffect(() => {
      setValue(rest.value || []);
    }, [rest.value]);
    // 初始化一下
    useMemo(() => (form.formlist[name] = []), []);
    return (
      <div className="yld-form-list">
        {value?.map((item: any, index: number) => {
          return (
            <div className="yld-form-list-item">
              <div className="yld-form-list-item-head">
                <label>
                  {title || "选项"}-{index + 1}
                </label>
                <Space>
                  <IconDelete
                    hover
                    onClick={() => {
                      value.splice(index, 1);
                      setValue([...value]);
                      onChange(value);
                    }}
                  />
                  <IconDragDotVertical hover style={{ cursor: 'move' }} />
                </Space>
              </div>
              <div className="yld-form-list-item-body">
                <FormBody
                  form={form}
                  index={index}
                  name={name}
                  schema={children}
                  column={column}
                  disabled={disabled}
                  values={item}
                  onValuesChange={(v, vs) => {
                    Object.assign(item, vs);
                    onChange([...value]);
                  }}
                />
              </div>
            </div>
          );
        })}
        <Button
          icon={<IconPlus />}
          disabled={value?.length >= maxCount}
          type="dashed"
          style={{
            width: '100%',
            margin: '8px 0',
          }}
          onClick={() => {
            setValue([...value, {}]);
            onChange([...value, {}]);
          }}
        />
      </div>
    );
  },
  (props1, props2) => props1.refresh === props2.refresh,
);
