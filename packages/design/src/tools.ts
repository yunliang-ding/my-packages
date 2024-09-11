import BigNumberjs from 'bignumber.js';
import cloneDeepWith from 'lodash.clonedeepwith';
import React from 'react';

export const isEmpty = (param: any) => {
  if (param === null || param === undefined) {
    return true;
  }
  if (Array.isArray(param)) {
    return param.length === 0;
  }
  if (typeof param === 'string') {
    return param.trim() === '';
  }
  if (typeof param === 'object') {
    return Object.keys(param).length === 0;
  }
  return false;
};

/** 浮点数运算 */
export const BigNumber = {
  /** 加 */
  add: (...args: any[]) => calculate(args, 'plus'),
  /** 减 */
  minus: (...args: any[]) => calculate(args, 'minus'),
  /** 乘 */
  multiplie: (...args: any[]) => calculate(args, 'multipliedBy'),
  /** 除 */
  divided: (...args: any[]) => calculate(args, 'dividedBy'),
};

const calculate: any = (
  args: any[],
  type: 'plus' | 'minus' | 'multipliedBy' | 'dividedBy',
) => {
  return Number(
    args
      .reduce((a, b) => {
        return new BigNumberjs(a)[type](new BigNumberjs(b));
      })
      .toString(),
  );
};

export const uuid = (size: number) => {
  return Math.random()
    .toString(16)
    .substring(2, size + 2);
};

/** 计算实际高度 */
export const getElementTop = (el) => {
  let actualTop = el.offsetTop;
  let current = el.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
};

export const debounce = (fn, delay = 10) => {
  if (typeof fn !== 'function') {
    // 参数类型为函数
    throw new TypeError('fn is not a function');
  }
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};

/** ReactElement 对象不参与深拷贝 */
export const cloneDeep = (source) => {
  return cloneDeepWith(source, (target) => {
    if (React.isValidElement(target)) {
      return target;
    }
  });
};

/** 获取类型 */
export const getType = (obj: any): string => {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  return type.toLocaleLowerCase();
};

// 千分位，小数点2位
export const NumberFormat = (
  number: any,
  options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  },
  emptyNode = '-',
) => {
  if (isNaN(Number.parseFloat(number))) {
    return emptyNode;
  }
  return Number(number).toLocaleString('zh-CH', options);
};
