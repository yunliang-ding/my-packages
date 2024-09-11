/* eslint-disable @typescript-eslint/method-signature-style */
import { FormItemProps, TableProps } from '@yl-d/design';
import { FormProps, ColumnProps } from '@yl-d/design';
import { getStandardSchema as getTableStandardSchema } from './util';
import { encrypt, recursionFind } from '../util';
import { ReactNode } from 'react';
import materialConfig from '../material-config';
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
    render: () => ReactNode;
  };
}

export default create<{
  /** 表单属性 */
  formProps: FormProps;
  /** 表单模型 */
  schema: DesignerFormItemProps[];
  /** 内置组件 */
  builtInWidget: any[];
  /** 自定义组件 */
  customWidgets: any;
  /** 选中的模型Key */
  selectedKey?: string;
  /** 表格模型 */
  columns: ColumnProps[];
  /** 选中表格 */
  selectTable: boolean;
  /** 表格属性 */
  tableProps:
    | TableProps
    | {
        [key: string]: any;
      };
  /** 获取模型 */
  getStandardSchema(): any;
  /** 获取选中的属性配置 */
  getPropsConfig: () => any;
  activeBar?: 1 | 2 | 3;
  preview?: boolean;
  /** 数据模型 */
  storeCode?: string;
  /** 基本设置 */
  setting?: {
    baseURL?: string;
  };
}>({
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
  selectTable: true,
  formProps: {
    column: 2,
    horizontal: true,
    schema: [],
  },
  customWidgets: undefined,
  builtInWidget: [
    {
      label: '基础组件',
      value: materialConfig.search,
    },
  ],
  schema: undefined,
  columns: [
    {
      title: '用户姓名',
      dataIndex: 'userName',
      width: 200,
    },
    {
      title: '联系方式',
      dataIndex: 'userPhone',
      width: 200,
    },
    {
      title: '用户年龄',
      dataIndex: 'userAge',
      width: 200,
    },
    {
      title: '详细地址',
      dataIndex: 'userAddress',
      width: 200,
    },
  ],
  tableProps: {
    title: '用户列表',
    scrollX: 1000,
    tools: [
      {
        label: '新增用户',
        type: 'primary',
      },
    ],
    autoNo: true,
    pageSize: 10,
    width: 180,
    pagination: true,
    rowKey: 'id',
    useFilter: true,
    useRefresh: true,
    menus: [
      {
        label: '详情',
        key: 'view',
      },
      {
        label: '编辑',
        key: 'edit',
      },
      {
        label: '删除',
        key: 'delete',
        confirm: true,
        content: '是否确认删除?',
      },
    ],
    request: encrypt(`async () => {
  return {
    success: true,
    data: [{
      id: 1,
      userName: '张三',
      userPhone: '13923783472',
      userAge: 20,
      userAddress: '测试地址'
    }],
    total: 1
  }
}`),
  },
  getStandardSchema() {
    return getTableStandardSchema({
      searchSchema: {
        ...this.formProps,
        schema: this.schema,
      },
      tableSchema: {
        ...this.tableProps,
        columns: this.columns,
      },
    });
  },
  getPropsConfig() {
    if (this.selectedKey) {
      let propsConfig = undefined;
      const selectedSchema = recursionFind(this.schema, this.selectedKey);
      this.builtInWidget.forEach((item: any) => {
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
});
