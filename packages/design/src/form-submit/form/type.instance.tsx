export interface FormInstance {
  /** 动态修改摸一个数据模型 */
  mergeItemByName: Function;
  /** 获取表单值 */
  getValues: Function;
  /** 设置表单值 */
  setValues: Function;
  /** 清空表单值 */
  clearValues: Function;
  /** 表单校验 */
  validateFields: Function;
  validateField: Function;
  formlist?: any;
}
export default (props: FormInstance) => null;

