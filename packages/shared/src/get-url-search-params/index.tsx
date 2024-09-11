/** 解析url参数 */

/** url 存在 + 存在bug，会解析成换行 */

export default (search = '') => {
  search = search?.split('?')[1];
  const params = {};
  const searchParams = new URLSearchParams(search);
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};
