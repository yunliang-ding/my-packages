import { useState, useEffect, useRef } from 'react';
import { Empty, Tree, Layer } from '../..';
import { fieldNamesTransfrom, getLabelByValue } from './util';
import { IconDown, IconClose, IconLoading } from '@yl-d/icon';
import { TreeDataProps, TreeSelectProps } from './type';
import cloneDeep from 'lodash.clonedeep';
import './index.less';

const TreeData = ({
  allowClear = true,
  placeholder = '请选择',
  disabled = false,
  style = {},
  className,
  layerClassName,
  getPopupContainer,
  onChange,
  fieldNames,
  checkable = false,
  loading = false,
  ...rest
}: TreeSelectProps) => {
  const selectionRef = useRef<HTMLDivElement>();
  const choiceRef = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(fieldNamesTransfrom(fieldNames, cloneDeep(rest.treeData)));
  useEffect(() => {
    setOptions(fieldNamesTransfrom(fieldNames, cloneDeep(rest.treeData)));
  }, [rest.treeData]);
  const [value, setValue] = useState<any>(rest.value); // 内部存选中值容器
  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);
  const classNames = ['yld-tree-select'];
  if (open) {
    classNames.push('yld-tree-select-open');
  }
  // 是否展示清空按钮
  const showAllowClear = !disabled && allowClear && value?.length > 0;
  if (showAllowClear) {
    classNames.push('yld-tree-select-allowClear');
  }
  if (disabled) {
    classNames.push('yld-tree-select-disabled');
  }
  if (className) {
    classNames.push(className);
  }
  /** 展示选中的 tag */
  const tags = getLabelByValue(value, options);
  const tagRender = Array.isArray(tags)
    ? tags.map((tag) => {
        return (
          <div key={tag.key} className="yld-tree-select-selection-value-tag">
            {tag.title}
            <IconClose
              style={{ fontSize: 12 }}
              onClick={(e: any) => {
                e.stopPropagation(); // 阻止冒泡
                let v = value.filter((i) => i !== tag.key);
                setValue([...v]);
                onChange?.(v);
              }}
            />
          </div>
        );
      })
    : tags;
  // 更新容器的高度
  useEffect(() => {
    if (choiceRef.current && checkable) {
      const { height } = choiceRef.current.getBoundingClientRect();
      selectionRef.current.style.height = height + 8 + 'px';
    } else {
      selectionRef.current.style.height = '32px';
    }
  }, [value]);
  return (
    <div className={classNames.join(' ')} style={style}>
      <div
        ref={selectionRef}
        className="yld-tree-select-selection"
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
        }}
      >
        <div className="yld-tree-select-selection-value">
          {tags === undefined ? (
            <span style={{ color: '#aaa' }}>{placeholder}</span>
          ) : (
            <div
              className="yld-select-selection-choice-warpper"
              ref={choiceRef}
            >
              {tagRender}
            </div>
          )}
        </div>
        {loading ? <IconLoading /> : <IconDown />}
        {showAllowClear && (
          <IconClose
            style={{ fontSize: 12 }}
            onClick={(e: any) => {
              e.stopPropagation(); // 阻止冒泡
              setValue(checkable ? [] : undefined); // 还原
              onChange?.(checkable ? [] : undefined);
              setOpen(false);
            }}
          />
        )}
      </div>
      {open && (
        <Layer
          layerClose={() => setOpen(false)}
          domRef={selectionRef}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
        >
          <div className="yld-tree-select-dropdown">
            {options.length > 0 ? (
              <Tree
                {...rest}
                checkable={checkable}
                selectedKey={value}
                checkedKeys={value}
                treeData={options}
                onSelect={(v) => {
                  setValue(v);
                  onChange(v);
                  setOpen(false);
                }}
                onCheck={(v) => {
                  setValue(v);
                  onChange(v);
                }}
              />
            ) : (
              <Empty label="暂无数据" />
            )}
          </div>
        </Layer>
      )}
    </div>
  );
};

export default ({ treeData = [], ...rest }: TreeSelectProps) => {
  /** 这里处理下异步的options  */
  const [options, setOptions] = useState<TreeDataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      if (typeof treeData === 'function') {
        try {
          setLoading(true);
          const data = await treeData((rest as any).form);
          setOptions(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        setOptions(treeData);
      }
    })();
  }, [treeData]);
  return <TreeData treeData={options} loading={loading} {...rest} />;
};
