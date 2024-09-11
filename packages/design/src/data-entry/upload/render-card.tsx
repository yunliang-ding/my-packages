import { IconClose, IconDelete, IconEye } from '@yl-d/icon';
import { Modal, Space } from '../..';
import { UploadItem } from './type';

export default ({ value, onChange, addBar }) => {
  return (
    <div className="yld-upload-card">
      {value?.map((item: UploadItem, index: number) => {
        const className = ['yld-upload-card-item'];
        if (item.status === 'error') {
          className.push('yld-upload-card-item-error');
        }
        return (
          <div className={className.join(' ')} key={item.uid}>
            <img src={item.url} style={{ width: 80, height: 80 }} />
            <div className="yld-upload-card-item-tools">
              <Space>
                <IconEye
                  onClick={() => {
                    Modal({
                      title: '预览',
                      footer: false,
                      className: 'yld-upload-card-preview',
                      render({ onClose }) {
                        return (
                          <>
                            <img
                              src={item.url}
                              style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                            <IconClose
                              onClick={() => {
                                onClose();
                              }}
                            />
                          </>
                        );
                      },
                    }).open();
                  }}
                />
                <IconDelete
                  onClick={() => {
                    value.splice(index, 1);
                    onChange([...value]);
                  }}
                />
              </Space>
            </div>
            <div className="yld-upload-card-item-mask" />
          </div>
        );
      })}
      {addBar}
    </div>
  );
};
