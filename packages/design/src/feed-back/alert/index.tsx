import { useState } from 'react';
import {
  IconCheckCircleFill,
  IconInfoCircleFill,
  IconQuestionCircleFill,
  IconCloseCircleFill,
  IconClose,
} from '@yl-d/icon';
import './index.less';
import { AlertProps } from './type';

export const iconMapping = {
  success: <IconCheckCircleFill />,
  info: <IconInfoCircleFill />,
  warning: <IconQuestionCircleFill />,
  error: <IconCloseCircleFill />,
};

export default ({
  message,
  closable = false,
  type = 'info',
  style,
}: AlertProps) => {
  const [open, setopen] = useState(true);
  return (
    <>
      {open && (
        <div className={`yld-alert yld-alert-${type}`} style={style}>
          <div className="yld-alert-message">
            {iconMapping[type]}
            <span>{message}</span>
          </div>
          {closable && (
            <IconClose
              onClick={setopen.bind(null, false)}
            />
          )}
        </div>
      )}
    </>
  );
};
