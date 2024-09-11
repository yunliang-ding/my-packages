> 表格设计器

## 基本使用

```jsx | react
import { TableDesigner } from '@yl-d/low-code';
import { Button, Message, Space } from '@yl-d/design';
import { IconLarkColor, IconSave } from '@yl-d/icon';

export default () => {
  const [table] = TableDesigner.useTable();
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <TableDesigner
        table={table}
        logo={
          <Space>
            <IconLarkColor style={{ fontSize: 34 }} />
            <h2>TableDesigner</h2>
          </Space>
        }
        extra={[
          <Button
            type="primary"
            icon={<IconSave />}
            onClick={() => {
              Message.success('保存成功');
              console.log(table.getStandardSchema());
            }}
          >
            保存
          </Button>,
        ]}
        queryFormModel={async () => {
          return [
            {
              label: '新增用户',
              value: 1,
            },
          ];
        }}
      />
    </div>
  );
};
```
