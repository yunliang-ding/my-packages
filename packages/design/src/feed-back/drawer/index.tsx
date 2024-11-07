import ReactDOM from 'react-dom';
import { Button } from '../..';
import { uuid } from '../../tools';
import { $ } from '../modal';
import { IconClose } from '@yl-d/icon';
import { DrawerProps } from './type';
import './index.less';

const Drawer = ({
  title = '',
  closable = true,
  placement = 'right',
  style = {},
  bodyStyle = {},
  top = 0,
  width = 500,
  onClose = () => {},
  onOk = () => {},
  footer = true,
  mask = true,
  render = () => null,
  footerRender,
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
}: DrawerProps) => {
  const className = ['yld-drawer'];
  if (placement === 'left') {
    className.push('yld-drawer-left');
  }
  return (
    <>
      <div
        className={className.join(' ')}
        style={{
          ...style,
          width,
          height: `calc(100vh - ${top}px)`,
        }}
      >
        <div className="yld-drawer-header">
          <div>{title}</div>
          {closable && <IconClose onClick={onClose} />}
        </div>
        <div
          className="yld-drawer-body"
          style={{
            ...bodyStyle,
            height:
              footer === false ? 'calc(100% - 50px)' : 'calc(100% - 100px)',
          }}
        >
          {render({ onClose })}
        </div>
        {footer !== false && (
          <div className="yld-drawer-footer">
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
        <div
          style={{ top }}
          className="yld-drawer-mask"
          onClick={() => closable && onClose()}
        />
      )}
    </>
  );
};

export default ({ className, ...props }: DrawerProps) => {
  const containId = `drawer_${uuid(6)}`;
  return {
    open: (options?: DrawerProps) => {
      const drawerProps = {
        placement: 'right',
        ...props,
        ...options,
      } as DrawerProps;
      const closeDrawer = () => {
        $(`#${containId} .yld-drawer`).style[drawerProps.placement] = '-9999px';
        setTimeout(() => {
          $(`#${containId}`)?.remove();
        }, 200);
      };
      const tag = document.createElement('div');
      tag.setAttribute('id', containId);
      const classNames = ['yld-drawer-wrapper'];
      if (className) {
        classNames.push(className);
      }
      tag.setAttribute('class', classNames.join(' '));
      $('body').appendChild(tag);
      ReactDOM.render(
        <Drawer
          {...drawerProps}
          onClose={() => {
            closeDrawer();
            drawerProps.onClose?.();
          }}
          onOk={async () => {
            await drawerProps.onOk?.(); // 等待关闭 resolve
            closeDrawer();
          }}
        />,
        tag,
      );
    },
    close: () => {
      setTimeout(() => {
        $(`#${containId}`)?.remove();
      }, 200);
    },
  };
};
