export const fieldNamesTransfrom = (fieldNames: any, treeData: any) => {
  // 自定义属性转换
  if (typeof fieldNames !== 'object') {
    return treeData;
  }
  const loop = (treeData) => {
    treeData.forEach((option) => {
      if (fieldNames.title) {
        option.title = option[fieldNames.title];
      }
      if (fieldNames.key) {
        option.key = option[fieldNames.key];
      }
      if (fieldNames.children) {
        option.children = option[fieldNames.children];
        if (option.children) {
          loop(option.children);
        }
      }
    });
  };
  loop(treeData); // 开始转换
  return treeData;
};

export const getLabelByValue = (key: string | string[], treeData = []) => {
  if (key === undefined) {
    return undefined;
  }
  const values = typeof key === 'string' ? [key] : key;
  let title = [];
  const loop = (options = []) => {
    options.forEach((item) => {
      if (values.includes(item.key)) {
        title.push(item);
      }
      if (Array.isArray(item.children)) {
        loop(item.children);
      }
    });
  };
  loop(treeData);
  return typeof key === 'string'
    ? title[0]?.title
    : title?.length > 0
    ? title
    : undefined;
};
