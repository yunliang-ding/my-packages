import { CardFormProps } from './type';
import { Form } from '../..';
import Footer from '../footer';
import { useRef } from 'react';
import './index.less';

export default ({
  width = '100%',
  title = '提交表单',
  bodyStyle = {},
  form = Form.useForm(),
  onSubmit = () => {},
  onClear = () => {},
  footer = true,
  actionAlign = 'end',
  cancelText = '清空',
  okText = '保存',
  className,
  ...rest
}: CardFormProps) => {
  const actions = rest.actions || [
    {
      label: cancelText,
      onClick: () => {
        form.clearValues();
        onClear?.();
      },
    },
    {
      label: okText,
      type: 'primary',
      validator: true,
      onClick: onSubmit,
    },
  ];
  /** validatorForm */
  const validatorForm = async () => {
    try {
      return await form.validateFields(); // 提交数据验证
    } catch (errorInfo) {
      console.warn('validatorForm fail ->', errorInfo);
      throw errorInfo;
    }
  };
  /** actionClick */
  const actionClick = async (action) => {
    if (typeof action.onClick === 'function') {
      let data: any = form.getValues(true);
      if (action.validator) {
        try {
          data = await validatorForm();
        } catch (error) {
          /** 滑动到第一个校验失败的地方 */
          bodyRef.current
            .querySelector('.yld-form-item-error')
            ?.scrollIntoView({
              behavior: 'smooth',
            });
          throw error;
        }
      }
      await action.onClick(data);
    }
  };
  const classNames = ['yld-card-form', `yld-card-form-${actionAlign}`];
  if (className) {
    classNames.push(className);
  }
  const bodyRef = useRef<HTMLDivElement>();
  return (
    <div className={classNames.join(' ')} style={{ width }}>
      <div className="yld-card-form-header">{title}</div>
      <div className="yld-card-form-body" style={bodyStyle} ref={bodyRef}>
        <Form {...rest} form={form} />
      </div>
      <div className="yld-card-form-footer">
        <Footer
          actions={actions}
          actionClick={actionClick}
          validatorForm={validatorForm}
          form={form}
        />
      </div>
    </div>
  );
};
