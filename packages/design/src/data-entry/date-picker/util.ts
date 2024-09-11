import dayjs from 'dayjs';

export default class DateUtil {
  date: Date;
  format: string;
  constructor(date: Date, format: string) {
    this.date = date;
    this.format = format;
  }
  setDate = (date: Date) => {
    this.date = date;
  };
  isLeapYear = () => {
    // 判断是否是闰年
    let year = this.date.getFullYear();
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  };
  getDateNumberByMonth = (month: number) => {
    // 获取这个月份的天数
    let day = 30;
    month = month;
    switch (month) {
      case 1:
        day = 31;
      case 3:
        day = 31;
      case 5:
        day = 31;
      case 7:
        day = 31;
      case 8:
        day = 31;
      case 10:
        day = 31;
      case 12:
        day = 31;
        break;
      case 2:
        day = this.isLeapYear() ? 29 : 28;
        break;
    }
    return day;
  };
  getCalendar = () => {
    // 获取该月份的日历
    let year = this.date.getFullYear();
    let month: any = this.date.getMonth() + 1;
    month = month > 9 ? month : '0' + month; // safari 不兼容不标准的字符转日期
    let totalDay = this.getDateNumberByMonth(month); // 该月份总天数
    let frist = `${year}-${month}-01`;
    let last = `${year}-${month}-${totalDay}`;
    let fristDate = new Date(frist); // 本月第一天
    let lastDate = new Date(last); // 本月最后一天
    let week = fristDate.getDay(); // 本月1号是周几
    week = week === 0 ? 7 : week;
    // 获取这个月1号是周几再决定前后各补几位
    let before = Array.from(new Array(week - 1).keys())
      .map((item, index) => {
        let date = new Date(
          fristDate.getTime() - (index + 1) * 24 * 60 * 60 * 1000,
        );
        return {
          date: date.getDate(),
          dateString: dayjs(date.toLocaleDateString()).format(this.format),
          currentMonth: false,
          current: false,
        };
      })
      .reverse();
    let current = Array.from(
      new Array(this.getDateNumberByMonth(month)).keys(),
    ).map((item, index) => {
      let date = new Date(fristDate.getTime() + index * 24 * 60 * 60 * 1000);
      return {
        date: date.getDate(),
        dateString: dayjs(date.toLocaleDateString()).format(this.format),
        currentMonth: true,
        current: date.toLocaleDateString() === new Date().toLocaleDateString(),
      };
    });
    // 后补齐
    let after = Array.from(
      new Array(42 - before.length - current.length).keys(),
    ).map((item, index) => {
      let date = new Date(
        lastDate.getTime() + (index + 1) * 24 * 60 * 60 * 1000,
      );
      return {
        date: date.getDate(),
        dateString: dayjs(date.toLocaleDateString()).format(this.format),
        currentMonth: false,
        current: false,
      };
    });
    let calendar = before.concat(current).concat(after);
    return [
      calendar.slice(0, 7),
      calendar.slice(7, 14),
      calendar.slice(14, 21),
      calendar.slice(21, 28),
      calendar.slice(28, 35),
      calendar.slice(35, 42),
    ];
  };
  getDateString = (date) => {
    return dayjs(date.toLocaleDateString()).format(this.format);
  };
  getYearList = () => {
    // -40 < 当前年份 < 20
    let year = new Date().getFullYear();
    let arr = [];
    for (let i = year - 40; i < year + 21; i++) {
      arr.push({
        label: i,
        value: i,
      });
    }
    return arr;
  };
  getMonthList = () => {
    return Array.from(new Array(12).keys()).map((month) => {
      return {
        label: month + 1,
        value: month + 1,
      };
    });
  };
}
