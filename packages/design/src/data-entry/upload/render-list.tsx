import {
  IconCheck,
  IconDelete,
  IconDriveFile,
  IconExclamationCircleFill,
} from '@yl-d/icon';
import { UploadItem } from './type';

// 渲染格式
const ListTypeRender = ({ listType, url }) => {
  if (listType === 'text') {
    return <IconDriveFile style={{ marginRight: 12 }} />;
  } else if (listType === 'picture-list') {
    return <img src={url} style={{ width: 40, height: 40, marginRight: 10 }} />;
  }
};

export default ({ value, onChange, listType, addBar }) => {
  return (
    <>
      {addBar}
      <div className="yld-upload-list">
        {value?.map((item: UploadItem, index: number) => {
          const className = ['yld-upload-list-item'];
          if (item.status === 'error') {
            className.push('yld-upload-list-item-error');
          }
          return (
            <div className={className.join(' ')} key={item.uid}>
              <div className="yld-upload-list-item-name">
                <ListTypeRender url={item.url} listType={listType} />
                <label
                  onClick={() => {
                    item.url && window.open(item.url);
                  }}
                >
                  {item.name}
                </label>
                {item.status === 'error' && (
                  <IconExclamationCircleFill
                    style={{
                      color: 'red',
                      marginLeft: 5,
                      fontSize: 14,
                      position: 'relative',
                      top: 1,
                    }}
                  />
                )}
                {(item.status === undefined || item.status === 'done') && (
                  <IconCheck className="yld-icon status-icon" />
                )}
                {item.status === 'error' && (
                  <a
                    className="status-icon"
                    style={{ color: 'var(--primary-color)' }}
                  >
                    重新上传
                  </a>
                )}
              </div>
              <div className="yld-upload-list-item-extra">
                <IconDelete
                  hover
                  style={{ fontSize: 12 }}
                  onClick={() => {
                    value.splice(index, 1);
                    onChange([...value]);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
