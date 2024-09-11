import { Space } from '@yl-d/design';
import DragWrapper from '../wrapper';
import { DragListProps } from './type';
import { IconDragDotVertical } from '@yl-d/icon';

export default ({
  width = 160,
  items = [],
  onChange,
  showIcon = true,
}: DragListProps) => {
  return (
    <DragWrapper
      style={{
        flexDirection: 'column',
        width,
      }}
      onChange={onChange}
      items={items.map((item: any) => {
        return {
          ...item,
          content: (
            <div
              style={{
                width,
                height: 30,
                background: 'var(--bg-color)',
                color: 'var(--text-color)',
                padding: '0 4px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <Space style={{ width }}>
                {showIcon && <IconDragDotVertical />}
                {item.content}
              </Space>
            </div>
          ),
        };
      })}
    />
  );
};
