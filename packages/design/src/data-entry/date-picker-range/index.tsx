import { DatePicker, DatePickerProps, Space } from '../..';
import './index.less';

export interface RangeDatePickerProps
  extends Omit<DatePickerProps, 'value' | 'placeholder'> {
  /** 值 */
  value?: string[];
  /** 提示文案 */
  placeholder?: string[];
}

export default ({
  onChange,
  placeholder = ['开始时间', '结束时间'],
  allowClear = true,
  disabled = false,
  style = {},
  value = [],
  ...rest
}: RangeDatePickerProps) => {
  const handelChange = (v: string[]) => {
    const dates = v[0] > v[1] ? v.reverse() : v;
    onChange(dates);
  };
  return (
    <div className="yld-date-picker-range" style={style}>
      <Space style={{ width: '100%' }}>
        <DatePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[0]}
          onChange={(v: string) => {
            handelChange([v, value[1]]);
          }}
          {...rest}
          value={value?.[0]}
        />
        <span>-</span>
        <DatePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[1]}
          onChange={(v: string) => {
            handelChange([value[0], v]);
          }}
          {...rest}
          value={value?.[1]}
        />
      </Space>
    </div>
  );
};
