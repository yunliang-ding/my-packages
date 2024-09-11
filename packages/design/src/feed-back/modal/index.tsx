import ReactDOM from 'react-dom';
import { ReactNode } from 'react';
import { ButtonProps, Button, Space } from '../..';
import { uuid } from '../../tools';
import { IconClose, IconInfoCircle } from '@yl-d/icon';
import { ModalProps } from './type';
import './index.less';

export const $: any = document.querySelector.bind(document);

const ModalRender = ({
  title = '',
  closable = true,
  onClose = () => {},
  onOk = () => {},
  mask = true,
  style = {},
  footer = true,
  footerRender,
  render = () => null,
  okText,
  cancelText,
  actions = [
    {
      label: cancelText || '取消',
      onClick: onClose,
    },
    {
      label: okText || '确定',
      onClick: onOk,
      type: 'primary',
    },
  ],
}: ModalProps) => {
  return (
    <>
      <div className="yld-modal" style={style}>
        <div className="yld-modal-header">
          <b>{title}</b>
          <IconClose onClick={onClose} />
        </div>
        <div
          className="yld-modal-body"
          style={{
            height:
              footer === false ? 'calc(100% - 50px)' : 'calc(100% - 100px)',
          }}
        >
          {render({
            onClose,
          })}
        </div>
        {footer !== false && (
          <div className="yld-modal-footer">
            {typeof footerRender === 'function'
              ? footerRender({
                  onClose,
                })
              : actions.map((item) => {
                  return (
                    <Button {...item} key={item.label}>
                      {item.label}
                    </Button>
                  );
                })}
          </div>
        )}
      </div>
      {mask && (
        <div className="yld-modal-mask" onClick={() => closable && onClose()} />
      )}
    </>
  );
};

const Modal = ({ className, ...props }: ModalProps) => {
  const containId = `modal_${uuid(6)}`;
  return {
    open: (options?: ModalProps) => {
      const modalProps = {
        ...props,
        ...options,
      };
      const closeModal = () => {
        $(`#${containId} .yld-modal`).style.top = '-9999px';
        setTimeout(() => {
          $(`#${containId}`)?.remove();
        }, 200);
      };
      const tag = document.createElement('div');
      tag.setAttribute('id', containId);
      const classNames = ['yld-modal-wrapper'];
      if (className) {
        classNames.push(className);
      }
      tag.setAttribute('class', classNames.join(' '));
      $('body').appendChild(tag);
      ReactDOM.render(
        <ModalRender
          {...modalProps}
          onClose={() => {
            closeModal();
            modalProps.onClose?.();
          }}
          onOk={async () => {
            await modalProps.onOk?.(); // 等待关闭 resolve
            closeModal();
          }}
        />,
        tag,
      );
    },
    close() {
      $(`#${containId} .yld-modal`).style.top = '-9999px';
      setTimeout(() => {
        $(`#${containId}`)?.remove();
      }, 200);
    },
  };
};

/** confirm 提示 */
Modal.confirm = ({
  title = '提示',
  content,
  onOk,
  onClose,
  okButtonProps = {
    type: 'primary',
  },
}: {
  title?: string;
  content: ReactNode;
  onOk?: Function;
  onClose?: Function;
  okButtonProps?: ButtonProps;
}) => {
  const containId = `confirm_${uuid(6)}`;
  const closeConfirm = () => {
    $(`#${containId} .yld-confirm`).style.top = '-9999px';
    setTimeout(() => {
      $(`#${containId}`)?.remove();
    }, 200);
  };
  const tag = document.createElement('div');
  tag.setAttribute('id', containId);
  tag.setAttribute('class', 'yld-confirm-wrapper');
  $('body').appendChild(tag);
  ReactDOM.render(
    <>
      <div className="yld-confirm">
        <div className="yld-confirm-title">
          <IconInfoCircle
            style={{ fontSize: 18, marginRight: 10, color: '#ff7d00' }}
          />
          <b>{title}</b>
        </div>
        <div className="yld-confirm-content">{content}</div>
        <div className="yld-confirm-footer">
          <Space>
            <Button
              onClick={() => {
                closeConfirm();
              }}
            >
              取消
            </Button>
            <Button
              {...okButtonProps}
              onClick={async () => {
                await onOk?.();
                closeConfirm();
              }}
            >
              确定
            </Button>
          </Space>
        </div>
      </div>
      <div className="yld-modal-mask" />
    </>,
    tag,
  );
};

export default Modal;
