import { useRef, useState } from 'react';
import { Badge, Button, Form, FormInstance, FormItemProps, Space } from '../..';
import { FormProps } from '../form/type.form';
import { IconFindReplace, IconSearch } from '@yl-d/icon';
import './index.less';

export interface SearchProps extends FormProps {
  onReset?: Function;
  onSearch?: Function;
  advance?: {
    schema: FormItemProps[] | ((form: FormInstance) => FormItemProps[]);
    column?: 1 | 2 | 3;
    initialValues?: any;
  };
}

export default ({
  onReset = () => {},
  onSearch = () => {},
  column = 4,
  schema = [],
  horizontal = true,
  initialValues,
  advance,
  ...rest
}: SearchProps) => {
  const loadingRef = useRef<boolean>(false); // 防止重复点击
  const form = rest.form || Form.useForm();
  const schemaSchema = typeof schema === 'function' ? schema(form) : schema;
  const [advanceValue, setAdvanceValue] = useState(
    advance?.initialValues || {},
  ); // 防止重复点击
  return (
    <Form
      horizontal={horizontal}
      form={form}
      className="yld-search"
      column={column}
      initialValues={initialValues}
      schema={[
        ...schemaSchema,
        {
          className: 'yld-search-flex-btn',
          style: {
            gridColumn: column,
          },
          type() {
            return (
              <Space>
                <Button
                  onClick={async () => {
                    if (loadingRef.current) {
                      return;
                    }
                    try {
                      loadingRef.current = true;
                      form.clearValues({});
                      setAdvanceValue({});
                      await onReset?.();
                    } catch (error) {
                      console.log(error);
                    } finally {
                      loadingRef.current = false;
                    }
                  }}
                >
                  重置
                </Button>
                <Button
                  type="primary"
                  icon={<IconSearch />}
                  onClick={async () => {
                    try {
                      if (loadingRef.current) {
                        return;
                      }
                      const values = await form.validateFields();
                      await onSearch?.({
                        ...values,
                        ...advanceValue,
                      });
                    } catch (error) {
                      console.log(error);
                    } finally {
                      loadingRef.current = false;
                    }
                  }}
                >
                  查询
                </Button>
                {advance ? (
                  <Badge count={Object.keys(advanceValue).length}>
                    <Button
                      icon={<IconFindReplace style={{ fontSize: 18 }} />}
                      style={{ padding: '0px 7px' }}
                      modalFormProps={{
                        title: '高级查询',
                        ...advance,
                        initialValues: advanceValue,
                        async onSubmit(values) {
                          setAdvanceValue(values);
                        },
                      }}
                    />
                  </Badge>
                ) : null}
              </Space>
            );
          },
        } as any,
      ]}
    />
  );
};
