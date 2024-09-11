import { MyBtnProps } from './type';
import './index.less';

export default (props: MyBtnProps) => {
  return <button className="my-btn">{props.label}</button>;
};
