import dayjs from 'dayjs';
import {
  IconDoubleLeft,
  IconLeft,
  IconRight,
  IconDoubleRight,
  IconCalendar,
} from '@yl-d/icon';
import { useState, useEffect, useRef } from 'react';
import { Button, Input, Layer, Space } from '../..';
import DateUtil from './util';
import { DatePickerProps } from './type';
import './index.less';

export default ({
  placeholder = '请选择',
  onChange,
  style,
  allowClear = true,
  disabled = false,
  layerClassName,
  getPopupContainer,
  ...rest
}: DatePickerProps) => {
  const dateUtil = useRef(
    new DateUtil(new Date(rest.value || new Date().getTime()), 'YYYY-MM-DD'),
  ).current;
  const [value, setValue] = useState(rest.value);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(dateUtil.date.getFullYear());
  const [month, setMonth] = useState(dateUtil.date.getMonth() + 1);
  const [calendar, setCalendar] = useState(dateUtil.getCalendar());
  const renderHeader = () => {
    return ['一', '二', '三', '四', '五', '六', '日'].map((item) => {
      return (
        <div className="yld-picker-header-item" key={item}>
          {item}
        </div>
      );
    });
  };
  const renderContent = () => {
    return calendar.map((row: any, index) => {
      return (
        <div className="yld-picker-calendar-row" key={index}>
          {row.map((col: any) => {
            return (
              <div
                key={col.dateString}
                className={
                  col.dateString === value
                    ? 'yld-picker-calendar-row-col-active'
                    : col.current
                    ? 'yld-picker-calendar-row-col-current'
                    : col.currentMonth
                    ? 'yld-picker-calendar-row-col-current-month'
                    : 'yld-picker-calendar-row-col'
                }
                onClick={() => {
                  setValue(col.dateString);
                  onChange?.(col.dateString);
                  setOpen(false);
                }}
              >
                <div className="yld-picker-calendar-inner">{col.date}</div>
              </div>
            );
          })}
        </div>
      );
    });
  };
  const updateDateCalendar = (date) => {
    // 更新时间
    let month: any = dateUtil.date.getMonth() + 1;
    month = month > 9 ? month : '0' + month; // safari 不兼容不标准的字符转日期
    dateUtil.setDate(new Date(date));
    setCalendar(dateUtil.getCalendar());
    setYear(dateUtil.date.getFullYear());
    setMonth(dateUtil.date.getMonth() + 1);
  };
  useEffect(() => {
    const date = rest.value || new Date().getTime();
    setValue(rest.value); // update
    updateDateCalendar(date); // 更新时间
  }, [rest.value]);
  const selectionRef = useRef<HTMLDivElement>();
  const classNames = ['yld-date-picker'];
  // 是否展示清空按钮
  const showAllowClear = !disabled && allowClear && value !== undefined;
  if (showAllowClear) {
    classNames.push('yld-date-picker-allowClear');
  }
  return (
    <div className={classNames.join(' ')} style={style}>
      <div className="yld-date-picker-input" ref={selectionRef}>
        <Input
          suffix={<IconCalendar />}
          showCount={false}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          readOnly
          onClick={(e: any) => {
            if (open) {
              e.stopPropagation();
            }
            setOpen(true);
          }}
          allowClear={allowClear}
          onAllowClear={() => {
            setValue(undefined);
            updateDateCalendar(new Date()); // 更新时间
            onChange?.(undefined);
          }}
        />
      </div>
      {open && (
        <Layer
          domRef={selectionRef}
          layerClose={() => setOpen(false)}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
          layerWidth="fix-content"
        >
          <div className="yld-date-picker-body">
            <div className="yld-date-picker-body-tools">
              <Space>
                <IconDoubleLeft
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() -
                        (dateUtil.isLeapYear() ? 366 : 355) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                />
                <IconLeft
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() -
                        dateUtil.getDateNumberByMonth(
                          dateUtil.date.getMonth() + 1,
                        ) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                />
              </Space>
              <div className="yld-date-picker-body-value">
                {year}-{month > 9 ? month : '0' + month}
              </div>
              <Space>
                <IconRight
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() +
                        dateUtil.getDateNumberByMonth(
                          dateUtil.date.getMonth() + 1,
                        ) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                />
                <IconDoubleRight
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() +
                        (dateUtil.isLeapYear() ? 366 : 355) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                />
              </Space>
            </div>
            <div className="yld-date-picker-body-header">{renderHeader()}</div>
            <div className="yld-date-picker-body-calendar">
              {renderContent()}
            </div>
            <div className="yld-date-picker-body-footer">
              <Button
                type="link"
                style={{ height: 30, width: 60 }}
                onClick={() => {
                  const value = dayjs().format('YYYY-MM-DD');
                  setValue(value);
                  onChange?.(value);
                  setOpen(false);
                }}
              >
                今天
              </Button>
            </div>
          </div>
        </Layer>
      )}
    </div>
  );
};
