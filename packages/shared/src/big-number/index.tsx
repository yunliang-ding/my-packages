const calculate = (
  args: any[],
  type: 'plus' | 'minus' | 'multipliedBy' | 'dividedBy',
) => {
  const { BigNumber } = window as any;
  return Number(
    args
      .reduce((a, b) => {
        return new BigNumber.BigNumber(a)[type](new BigNumber.BigNumber(b));
      })
      .toString(),
  );
};

/** 浮点数运算 */
export default {
  /** 加 */
  add: (...args: any[]) => calculate(args, 'plus'),
  /** 减 */
  minus: (...args: any[]) => calculate(args, 'minus'),
  /** 乘 */
  multiplie: (...args: any[]) => calculate(args, 'multipliedBy'),
  /** 除 */
  divided: (...args: any[]) => calculate(args, 'dividedBy'),
};
