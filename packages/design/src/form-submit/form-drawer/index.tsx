import { DrawerFormProps } from './type';
import { Drawer, Form } from '../..';
import Footer from '../footer';
import { useRef } from 'react';
import './index.less';

export default ({
  title = '提交表单',
  style = {},
  bodyStyle = {},
  form,
  schema = [],
  onSubmit = () => {},
  onClose = () => {},
  footer = true,
  cancelText = '取消',
  okText = '保存',
  className,
  ...rest
}: DrawerFormProps) => {
  const drawer = Drawer({
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
          <div className="yld-drawer-form-body" ref={bodyRef} style={bodyStyle}>
            <Form {...rest} schema={schema} form={form} />
          </div>
          <div className="yld-drawer-form-footer">
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
    className: ['yld-drawer-form-layer', className].filter(Boolean).join(' '),
    /** 不渲染footer */
    footer: false,
  });
  return drawer;
};
