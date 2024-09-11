import { Space, Tooltip } from '@yl-d/design';
import { IconDelete, IconCopy, IconExclamationCircle } from '@yl-d/icon';
import './index.css';

export default ({
  virtual = false,
  label,
  dom,
  selected = false,
  mask = true,
  onCopy = () => null,
  onDelete = () => null,
}) => {
  return virtual ? (
    <div
      className="dragContainer"
      style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--bg-color)',
        padding: 20,
      }}
    >
      <Space>
        <span>空节点元素</span>
        <Tooltip
          title="当一个容器为空的时候，会提供一个空节点元素辅助拖拽定位"
          placement="right"
        >
          <IconExclamationCircle
            style={{ fontSize: 18, position: 'relative', top: 2 }}
          />
        </Tooltip>
      </Space>
    </div>
  ) : (
    <div
      className={
        selected ? 'dragContainer dragContainerSelected' : 'dragContainer'
      }
    >
      <div style={{ pointerEvents: mask ? 'none' : 'auto' }}>{dom}</div>
      {mask && <div className="dragContainerDargKey">{label}</div>}
      {selected && (
        <>
          <div className="dragContainerTools">
            <IconDelete
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            />
            <IconCopy
              onClick={(e) => {
                e.stopPropagation();
                onCopy();
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
