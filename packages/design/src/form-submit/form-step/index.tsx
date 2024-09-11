import { Steps, Form } from '../..';
import { StepFormProps } from './type';
import Footer from '../footer';
import './index.less';

export default ({
  current = 0,
  onStepsClick = () => {},
  form = Form.useForm()[0],
  steps,
  ...rest
}: StepFormProps) => {
  /** validatorForm */
  const validatorForm = async () => {
    try {
      const datas = await form.validateFields(); // 提交数据验证
      return datas;
    } catch (errorInfo) {
      console.error('validatorForm fail ->', errorInfo);
      throw errorInfo;
    }
  };
  /** actionClick */
  const actionClick = async (action) => {
    if (typeof action.onClick === 'function') {
      let data = form.getValues(true);
      if (action.validator) {
        data = await validatorForm();
      }
      await action.onClick(data);
    }
  };
  return (
    <div className="yld-step-form">
      <div className="yld-step-form-header">
        <Steps current={current + 1} items={steps} />
      </div>
      <div className="yld-step-form-body">
        <Form
          {...rest}
          schema={steps
            .map((step, index) => {
              return step.schema.map((field) => {
                return {
                  ...field,
                  // 其他步骤不展示
                  itemStyle: {
                    display: index !== current ? 'none' : 'flex',
                  },
                  // 其他步骤不校验
                  required: index !== current ? false : field.required,
                  // rules: index !== current ? [] : field.rules, // 其他步骤不校验
                };
              });
            })
            .flat()}
          form={form}
          column={steps[current].column as any}
        />
      </div>
      <div className="yld-step-form-footer">
        <Footer
          actions={steps[current].actions}
          actionClick={actionClick}
          validatorForm={validatorForm}
          form={form}
        />
      </div>
    </div>
  );
};
