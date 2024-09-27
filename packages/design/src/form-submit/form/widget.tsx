import FormList from './list-form';
import TableList from './list-table';
import {
  Mention,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Slider,
  Switch,
  TimePicker,
  CheckGroup,
  RadioGroup,
  RangeDatePicker,
  RangeTimePicker,
  Rate,
  TreeSelect,
  Upload,
} from '../..';

const Error = ({ type }) => {
  return <span style={{ color: 'red' }}>找不到类型：{type}</span>;
};

const Block = ({ label }) => {
  return <p className="yld-form-item-block">{label}</p>;
};

const mapping = {
  Mention,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Slider,
  Switch,
  TimePicker,
  CheckGroup,
  RadioGroup,
  RangeDatePicker,
  RangeTimePicker,
  Rate,
  TreeSelect,
  Block,
  FormList,
  TableList,
  Upload,
};

export const getComponent = (type: string | Function, widgets: any) => {
  return typeof type === 'function'
    ? type
    : mapping[type] || widgets?.[type] || (() => <Error type={type} />);
};

export default mapping;
