export const fieldNamesTransfrom = (fieldNames: any, options: any) => {
  // 自定义属性转换
  if (typeof fieldNames !== 'object') {
    return options;
  }
  const loop = (options) => {
    options.forEach((option) => {
      if (fieldNames.label) {
        option.label = option[fieldNames.label];
      }
      if (fieldNames.value) {
        option.value = option[fieldNames.value];
      }
      if (fieldNames.children) {
        option.children = option[fieldNames.children];
        if (option.children) {
          loop(option.children);
        }
      }
    });
  };
  loop(options); // 开始转换
  return options;
};

export const getLabelByValue = (values = [], options = []) => {
  if (values.length == 0) {
    return undefined;
  }
  const label = [];
  let children = options;
  values.forEach((value) => {
    const item = children.find((i) => i.value === value);
    if (item) {
      label.push(item.label);
      children = item.children;
    }
  });
  return label.join('/');
};

export const getInitialOptions = (values = [], options = []): any => {
  if (Array.isArray(values) && values.length > 1) {
    const opt = [options];
    let tempOptions: any = options;
    values.forEach((v) => {
      const item = tempOptions.find((i: any) => i.value === v);
      if (item?.children) {
        opt.push(item.children);
        tempOptions = item.children;
      }
    });
    return opt;
  } else {
    return [options];
  }
};
