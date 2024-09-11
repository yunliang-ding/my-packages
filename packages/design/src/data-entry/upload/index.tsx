import { IconPlus, IconUpload } from '@yl-d/icon';
import { Button } from '../..';
import { UploadProps } from './type';
import { useEffect, useRef, useState } from 'react';
import { uuid } from '../../tools';
import { createOssInstance } from './util';
import CardRender from './render-card';
import ListRender from './render-list';
import './index.less';

export default ({
  disabled = false,
  multiple = false,
  text = '点击上传',
  listType = 'text',
  limit = 999,
  value = [],
  accept = '',
  onChange,
}: UploadProps) => {
  // 进度条
  const [percent, setPercent] = useState(0);
  // 加载中
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // 重制进度条
    if (loading === false) {
      setPercent(0);
    }
  }, [loading]);
  const inputRef = useRef<HTMLInputElement>();
  /** 内置上传 */
  const multiPartUpload = async (options: any) => {
    const { file } = options;
    const ossClient = createOssInstance();
    try {
      setLoading(true);
      try {
        const {
          res: { requestUrls, status },
        } = await ossClient.multipartUpload(`assets/${file.name}`, file, {
          progress: (p: number) => {
            setPercent(parseInt(String(p * 100), 10));
          },
        });
        if (status === 200) {
          const url = requestUrls?.[0];
          // 同步表单数据
          onChange([
            ...value,
            {
              uid: uuid(10),
              name: file.name,
              url: url.includes('?')
                ? url.substring(0, url.lastIndexOf('?'))
                : url,
            },
          ]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };
  // 添加的手柄
  const AddBar = () => {
    if (limit < value?.length) {
      return null;
    } else if (listType === 'picture-card') {
      return (
        <div className="yld-upload-card-bar">
          <Button
            disabled={disabled}
            icon={<IconPlus />}
            loading={loading}
            onClick={() => {
              inputRef.current.click();
            }}
          />
        </div>
      );
    }
    return (
      <Button
        type="primary"
        disabled={disabled}
        icon={<IconUpload />}
        loading={loading}
        onClick={() => {
          inputRef.current.click();
        }}
      >
        {text}
      </Button>
    );
  };
  return (
    <div className="yld-upload">
      <input
        key="trigger-input"
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        accept={accept}
        multiple={multiple}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files?.[0]) {
            multiPartUpload({ file: files[0] });
            inputRef.current.value = ''; // clear
          }
        }}
      />
      {listType === 'picture-card' ? (
        <CardRender addBar={<AddBar />} value={value} onChange={onChange} />
      ) : (
        <ListRender
          addBar={<AddBar />}
          value={value}
          onChange={onChange}
          listType={listType}
        />
      )}
    </div>
  );
};
