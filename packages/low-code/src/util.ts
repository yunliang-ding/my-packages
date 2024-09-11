/* eslint-disable prefer-destructuring */
/* eslint-disable @iceworks/best-practices/recommend-polyfill */
/* eslint-disable react-hooks/rules-of-hooks */
import cloneDeep from 'lodash.clonedeep';
import { isEmpty, uuid } from '@yl-d/shared';
import { Notification } from '@yl-d/design';
/**
 * 判断容器
 */
export const isWrap = ({ type }) =>
  ['FieldSet', 'FormList', 'TableList'].includes(type);
/**
 * 判读空容器
 */
export const isEmptyWrap = ({ type, props }) => {
  return isWrap({ type }) && isEmpty(props?.children);
};

// 查找指定key
export const recursionFind = (schema: any, key: string) => {
  const targetField: any = { field: {} };
  recursionLoopFind(schema, key, targetField);
  return targetField.field;
};

// 递归查找指定key
export const recursionLoopFind = (schema: any, key: string, currentField) => {
  for (let i = 0; i < schema?.length; i++) {
    const item = schema[i];
    if (item.key === key) {
      currentField.field = item;
      break;
    } else if (isWrap(item) && !isEmptyWrap(item)) {
      recursionLoopFind(item.props.children, key, currentField);
    }
  }
};

export { cloneDeep, uuid, isEmpty };

export const InputOrSelect = [
  'Input',
  'InputNumber',
  'CountInput',
  'BankCardInput',
  'AmountInput',
  'TextArea',
  'Password',
  'Select',
  'Cascader',
  'DebounceSelect',
  'Select',
  'AutoComplete',
  'Cascader',
  'TreeSelect',
  'TreeSelect',
];

/**
 * 删除空属性
 */
const deleteEmptyObjProps = (object) => {
  Object.keys(object).forEach((key) => {
    // 删除空属性
    if (object[key] === undefined || key === 'itemRender') {
      delete object[key];
    }
    if (Object.prototype.toString.call(object[key]) === '[object Object]') {
      deleteEmptyObjProps(object[key]);
    }
    if (key === 'schema') {
      getCleanCloneSchema(object[key]);
    }
  });
};
/**
 * 克隆一份
 */
export const getStandardSchema = (scurce = {}) => {
  const schema = cloneDeep(scurce);
  return getCleanCloneSchema([schema]);
};
/** 函数打码 */
export const encrypt = (str: string) => {
  return `{{_#${str}_#}}`;
};
/** 函数解码 */
export const decrypt = (str: string, quotation = true) => {
  if (quotation) {
    return str?.replaceAll('"{{_#', '').replaceAll('_#}}"', '');
  }
  return str?.replaceAll('{{_#', '').replaceAll('_#}}', '');
};
/**
 * 获取纯净的模型
 */
export const getCleanCloneSchema = (schema = []) => {
  schema.forEach((item, index) => {
    deleteEmptyObjProps(item);
    // 删除虚拟节点
    if (item.virtual === true) {
      schema.splice(index, 1);
    }
    /** 移除函数字符串_is_code 结尾的 */
    Object.keys(item).forEach((key) => {
      if (key.endsWith('_is_code')) {
        try {
          item[key.replace('_is_code', '')] = item[key];
          delete item[key];
        } catch (error) {
          console.log(error);
        }
      }
    });
    /** item */
    delete item.key;
    delete item.__parentKey__;
    delete item.isNew;
    delete item.selectField;
    if (item.actionAlign === 'end') {
      delete item.actionAlign;
    }
    if (item.layout === 'vertical') {
      delete item.layout;
    }
    if (item.size === 'middle') {
      delete item.size;
    }
    if (item.isExpand === true) {
      item.expand = true;
    }
    delete item.isExpand;
    if (['Block'].includes(item.type)) {
      delete item.span;
      delete item.name;
    }
    if (isWrap(item)) {
      getCleanCloneSchema(item.props.children);
    }
    delete item.message;
    if (item.rules?.length === 0) {
      delete item.rules;
    }
    if (item.required === false) {
      delete item.required;
    }
    if (item.span === 1) {
      delete item.span;
    }
    if (item?.effect?.length === 0) {
      delete item.effect;
      delete item.effectClearField;
    }
    if (item.effectClearField !== true) {
      delete item.effectClearField;
    }
    // innerItemRender -> itemRender
    if (item.innerItemRender) {
      item.itemRender = item.innerItemRender;
      delete item.innerItemRender;
    }
    // innerVisible -> visible
    if (item.innerVisible) {
      item.visible = item.innerVisible;
      delete item.innerVisible;
    }
    /** props */
    if (
      InputOrSelect.includes(item.type) &&
      ['请输入', '请选择'].includes(item.props?.placeholder)
    ) {
      delete item.props.placeholder;
    }
    if (item.props?.allowClear === true) {
      delete item.props.allowClear;
    }
    if (item.props?.showWordLimit === false) {
      delete item.props.showWordLimit;
    }
    if (item.props?.mode === 'default') {
      delete item.props.mode;
    }
    if (item.props?.maxLength === 64) {
      delete item.props.maxLength;
    }
    if (item.props?.disabled === false) {
      delete item.props.disabled;
    }
    if (isEmpty(item.props?.mode)) {
      delete item.props?.mode;
    }
    if (item.props && isEmpty(item.props)) {
      delete item.props;
    }
  });
  // 替换并且使用prettier格式化代码
  const prettier = (window as any).prettier;
  try {
    const code = prettier.format(
      decrypt(
        `export default ${JSON.stringify(schema[0], null, 2)?.replaceAll(
          '\\"',
          '"',
        )}`,
      )
        .replaceAll('\\n', '\n')
        .replaceAll('\\', ''),
      {
        parser: 'typescript',
        plugins: (window as any).prettierPlugins,
      },
    );
    return code;
  } catch (error) {
    return error;
  }
};
/**
 * html2canvas
 * @param element
 * @param filename
 */
export const copyImg = async (element) => {
  return new Promise((res) => {
    (window as any).html2canvas(element, {
      useCORS: true,
    }).then((canvas) => {
      canvas.toBlob(async (blob) => {
        // 将blob对象放入剪切板item中
        const type: any = blob?.type;
        if (navigator.clipboard) {
          await navigator.clipboard
            // eslint-disable-next-line @iceworks/best-practices/recommend-polyfill
            .write([new ClipboardItem({ [type]: blob } as any)])
            .then(
              () => {
                res(true);
                Notification.success({
                  title: '提示',
                  content: '已保存到粘贴板',
                });
              },
              () => {
                res(true);
                Notification.warning({
                  title: '提示',
                  content: '保存截图失败',
                });
              },
            );
        } else {
          alert('请在安全域名下使用');
          res(true);
        }
      }, 'image/png');
    });
  });
};
