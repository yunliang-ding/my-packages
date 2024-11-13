/* eslint-disable react-hooks/rules-of-hooks */
import { ModalFormProps } from './type';
import { Modal, Form } from '../..';
import Footer from '../footer';
import { useRef } from 'react';
import './index.less';

export default ({
  style = {},
  title = '提交表单',
  form,
  schema = [],
  onSubmit = () => {},
  onClose = () => {},
  footer = true,
  cancelText = '取消',
  okText = '保存',
  ...rest
}: ModalFormProps) => {
  const drawer = Modal({
    title,
    style,
    render() {
      const form = Form.useForm();
      const bodyRef = useRef<HTMLDivElement>();
      const actions = rest.actions || [
        {
          label: cancelText,
          onClick: () => {
            drawer.close();
            onClose?.();
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
          drawer.close();
        }
      };
      return (
        <>
          <div className="yld-modal-form-body" ref={bodyRef}>
            <Form {...rest} schema={schema} form={form} />
          </div>
          <div className="yld-modal-form-footer">
            <Footer
              actions={actions}
              actionClick={actionClick}
              validatorForm={validatorForm}
              form={form}
            />
          </div>
        </>
      );
    },
    ...rest,
    /** 不渲染footer */
    className: 'yld-modal-form-layer',
    footer: false,
  });
  return drawer;
};
