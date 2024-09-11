import { TimePicker, Space, TimePickerProps } from '../..';
import './index.less';

export interface RangeTimePickerProps
  extends Omit<TimePickerProps, 'value' | 'placeholder'> {
  /** 值 */
  value?: string[];
  /** 提示文案 */
  placeholder?: string[];
}

export default ({
  value = [],
  onChange,
  placeholder = ['开始时间', '结束时间'],
  style = {},
  allowClear = true,
  disabled = false,
}: RangeTimePickerProps) => {
  const handelChange = (v: string[]) => {
    const dates = v[0] > v[1] ? v.reverse() : v;
    onChange(dates);
  };
  return (
    <div className="yld-time-picker-range" style={style}>
      <Space style={{ width: '100%' }}>
        <TimePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[0]}
          value={value[0]}
          onChange={(v: string) => {
            handelChange([v, value[1]]);
          }}
        />
        <span>-</span>
        <TimePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[1]}
          value={value[1]}
          onChange={(v: string) => {
            handelChange([value[0], v]);
          }}
        />
      </Space>
    </div>
  );
};
