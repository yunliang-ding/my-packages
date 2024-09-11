import { CardFormProps, FormItemProps } from '@yl-d/design';
import {
  encrypt,
  getStandardSchema as getFormStandardSchema,
  recursionFind,
} from '../util';
import materialConfig from '../material-config';
import { ReactElement } from 'react';
import { create } from '@yl-d/hooks';

interface DesignerFormItemProps extends FormItemProps {
  key: string;
  propsConfig?: any;
}

export interface CustomWidgetsProps {
  [key: string]: {
    label: string;
    props: any;
    propsConfig: any[];
    render: (props: any) => ReactElement;
  };
}

export default create<{
  /** 表单属性 */
  formProps: CardFormProps;
  /** 内置组件 */
  builtInWidget: any[];
  /** 自定义组件 */
  customWidgets: any;
  /** 数据模型 */
  schema: DesignerFormItemProps[];
  /** 选中的模型Key */
  selectedKey: string;
  /** 获取标准的模型 */
  getStandardSchema: () => any;
  /** 获取选中的属性配置 */
  getPropsConfig: () => any;
  preview: boolean;
  activeBar?: 1 | 2 | 3;
  /** 状态管理配置 */
  storeCode?: string;
  /** 数据源配置 */
  servicesCode?: string;
  /** 基本设置 */
  setting?: {
    baseURL?: string;
  };
}>({
  preview: false,
  setting: {
    baseURL: 'https://api-online.yunliang.cloud',
  },
  storeCode: encrypt(`import axios from 'axios';

export default {
  name: "张三",
  age: "18",
  async queryUser(){
    await axios.get("xx/xx")
  }
}`),
  formProps: {
    column: 2,
    title: '新建表单',
    actionAlign: 'end',
    schema: [],
    horizontal: false,
  },
  customWidgets: {},
  builtInWidget: [
    {
      label: '基础组件',
      value: materialConfig.base,
    },
    {
      label: '布局组件',
      value: materialConfig.layout,
    },
  ],
  schema: undefined,
  selectedKey: undefined,
  getPropsConfig() {
    if (this.selectedKey) {
      let propsConfig = undefined;
      const selectedSchema = recursionFind(this.schema, this.selectedKey);
      this.builtInWidget.forEach((item) => {
        const widget = item.value.find(
          (i: any) => i.type === selectedSchema.type,
        );
        if (widget) {
          propsConfig = widget.propsConfig;
        }
      });
      return {
        propsConfig,
        selectedSchema,
      };
    }
    return {};
  },
  getStandardSchema() {
    return getFormStandardSchema({
      ...this.formProps,
      schema: this.schema,
    });
  },
});
