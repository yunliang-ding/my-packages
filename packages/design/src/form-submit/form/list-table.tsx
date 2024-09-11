import { IconDelete, IconPlus, IconCopy } from '@yl-d/icon';
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
  length,
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
      style={{
        gridTemplateColumns: `repeat(${length}, 1fr)`,
        gap: 0,
      }}
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
    const tableColumn = children.map((item) => {
      return {
        title: item.label,
        dataIndex: item.name,
        required: item.required,
      };
    });
    return (
      <div className="yld-table-list">
        {value?.length > 0 && (
          <div className="yld-table-list-thead">
            {tableColumn.map((item) => {
              return (
                <div className="yld-table-list-thead-td" key={item.dataIndex}>
                  {item.required === true && (
                    <span className="yld-table-list-thead-td-required">*</span>
                  )}
                  {item.title}
                </div>
              );
            })}
            <div className="yld-table-list-thead-td">操作</div>
          </div>
        )}
        <div className="yld-table-list-body">
          {value?.map((item: any, index: number) => {
            return (
              <div className="yld-table-list-body-item">
                <FormBody
                  length={tableColumn.length + 1}
                  form={form}
                  index={index}
                  name={name}
                  schema={[
                    ...children,
                    {
                      type() {
                        return (
                          <Space>
                            <Button
                              icon={<IconDelete />}
                              circle
                              onClick={() => {
                                value.splice(index, 1);
                                setValue([...value]);
                                onChange(value);
                              }}
                            />
                            <Button
                              icon={<IconCopy />}
                              circle
                              disabled={value?.length >= maxCount}
                              onClick={() => {
                                // copy
                                value.splice(index, 0, {
                                  ...value[index],
                                });
                                setValue([...value]);
                                onChange(value);
                              }}
                            />
                          </Space>
                        );
                      },
                    },
                  ]}
                  column={column}
                  disabled={disabled}
                  values={item}
                  onValuesChange={(v, vs) => {
                    Object.assign(item, vs);
                    onChange([...value]);
                  }}
                />
              </div>
            );
          })}
        </div>
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
