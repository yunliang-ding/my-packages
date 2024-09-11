import Select from './select';
import Multiple from './multiple';
import { OptionsProps, SelectProps } from './type';
import { useEffect, useState } from 'react';
import './index.less';

export default ({
  multiple = false,
  fieldNames = { label: 'label', value: 'value' },
  ...props
}: SelectProps) => {
  /** 这里处理下异步的options  */
  const [options, setOptions] = useState<OptionsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      if (typeof props.options === 'function') {
        try {
          setLoading(true);
          const data = await props.options((props as any).form);
          setOptions(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        setOptions(props.options || []);
      }
    })();
  }, [props.options]);
  return multiple ? (
    <Multiple
      {...props}
      // 处理别名
      loading={loading}
      options={options.map((option) => ({
        label: option[fieldNames.label],
        value: option[fieldNames.value],
      }))}
    />
  ) : (
    <Select
      {...props} // 处理别名
      loading={loading}
      options={options.map((option) => ({
        label: option[fieldNames.label],
        value: option[fieldNames.value],
      }))}
    />
  );
};
