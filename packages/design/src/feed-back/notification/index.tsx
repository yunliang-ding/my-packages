import ReactDOM from 'react-dom';
import { isValidElement, ReactNode } from 'react';
import {
  IconClose,
  IconCheckCircleFill,
  IconInfoCircleFill,
  IconQuestionCircleFill,
  IconCloseCircleFill,
} from '@yl-d/icon';
import './index.less';

const $: any = document.querySelector.bind(document);
const $$: any = document.querySelectorAll.bind(document);

const iconMapping = {
  1: <IconCheckCircleFill style={{ fontSize: 18, color: '#00b42a' }} />,
  2: <IconCloseCircleFill style={{ fontSize: 18, color: '#d81e06' }} />,
  3: <IconQuestionCircleFill style={{ fontSize: 18, color: '#ff7d00' }} />,
  4: <IconInfoCircleFill style={{ fontSize: 18, color: '#39a9f4' }} />,
};

export interface NotificationProps {
  title?: string;
  duration?: number;
  content?: ReactNode;
}

export default () => {
  const open = (type: number, option: NotificationProps | ReactNode) => {
    const defaultOption: NotificationProps = {
      duration: 3,
    };
    if (
      typeof option === 'object' &&
      option !== null &&
      !isValidElement(option)
    ) {
      Object.assign(defaultOption, option);
    } else {
      defaultOption.content = option;
    }
    let messageContainer = document.createElement('div');
    let length = $$('.yld-notification').length;
    messageContainer.className = 'yld-notification';
    messageContainer.style.top = 30 + length * 120 + 'px';
    $('body').appendChild(messageContainer);
    setTimeout(() => {
      messageContainer.remove();
    }, defaultOption.duration * 1000);
    ReactDOM.render(
      renderMessage(type, defaultOption, () => {
        messageContainer.remove();
      }),
      messageContainer,
    );
  };
  const renderMessage = (
    type: number,
    option: NotificationProps,
    closeNotify: Function,
  ) => {
    return (
      <div className="yld-notification-content">
        <div className="yld-notification-content-header">
          <div className="yld-notification-content-header-title">
            {iconMapping[type]}
            <span>{option.title || '提示'}</span>
          </div>
          <div className="yld-notification-content-header-close">
            <IconClose onClick={closeNotify} />
          </div>
        </div>
        <div className="yld-notification-content-info">
          {option.content}
        </div>
      </div>
    );
  };
  return {
    success: (option: ReactNode | NotificationProps) => {
      open(1, option);
    },
    error: (option: ReactNode | NotificationProps) => {
      open(2, option);
    },
    warning: (option: ReactNode | NotificationProps) => {
      open(3, option);
    },
    info: (option: ReactNode | NotificationProps) => {
      open(4, option);
    },
    clear: () => {
      $$('.yld-notification')?.forEach((el) => {
        el.remove();
      });
    },
  };
};
