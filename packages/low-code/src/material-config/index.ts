/** 基础组件 */
import input from './base/input.json';
import inputNumber from './base/input-number.json';
import select from './base/select.json';
import radio from './base/radio.json';
import checked from './base/checked.json';
import datePicker from './base/date-picker.json';
import dateRangePicker from './base/date-range-picker.json';
import timePicker from './base/time-picker.json';
import timeRangePicker from './base/time-range-picker.json';
import Switch from './base/switch.json';
import cascader from './base/cascader.json';
import rate from './base/rate.json';
import slider from './base/slider.json';
import treeselect from './base/tree-select.json';
import upload from './base/upload.json';
import render from './advance/render.json';
import fieldSet from './layout/field-set.json';
import formList from './layout/form-list.json';
import Block from './layout/block-quote.json';
import tableList from './layout/table-list.json';

const search =  [
  input,
  inputNumber,
  radio,
  checked,
  select,
  timePicker,
  timeRangePicker,
  datePicker,
  dateRangePicker,
  cascader,
  treeselect,
];

export default {
  base: [
    ...search,
    Switch,
    rate,
    slider,
    upload,
    render,
  ],
  search: [
    input,
    inputNumber,
    radio,
    checked,
    select,
    timePicker,
    timeRangePicker,
    datePicker,
    dateRangePicker,
    cascader,
    treeselect,
  ],
  layout: [Block, fieldSet, formList, tableList],
};
