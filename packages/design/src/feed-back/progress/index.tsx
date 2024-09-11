import { useEffect, useRef, useState } from 'react';
import { ProgressProps } from './type';
import './index.less';

export default ({
  percent = 0,
  strokeColor = 'var(--primary-color)',
  progressRef = useRef({}),
  active = false,
}: ProgressProps) => {
  const [value, setValue] = useState(percent);
  useEffect(() => {
    progressRef.current.percent = value;
    progressRef.current.setPercent = (v) => {
      if (v <= 100 && v >= 0) {
        setValue(v);
      }
    };
  }, [value]);
  const className = ['yld-progress'];
  if (active) {
    className.push('yld-progress-active');
  }
  return (
    <div className={className.join(' ')}>
      <div className="yld-progress-stroke">
        <div
          className="yld-progress-stroke-inner"
          style={{
            backgroundColor: strokeColor,
            width: `${value}%`,
          }}
        />
      </div>
      <div className="yld-progress-text">{value}%</div>
    </div>
  );
};
