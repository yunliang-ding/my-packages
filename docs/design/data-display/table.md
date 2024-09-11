## 基本使用

```jsx | react
import { Table } from '@yl-d/design';

export default () => {
  return (
    <Table
      rowKey="id"
      useRefresh={false}
      useFilter={false}
      bordered
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
        },
        {
          title: '姓名',
          dataIndex: 'username',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## 枚举和日期

```jsx | react
import { Table } from '@yl-d/design';

export default () => {
  return (
    <Table
      autoNo
      rowKey="userName"
      useRefresh={false}
      useFilter={false}
      pagination={false}
      columns={[
        {
          title: '用户姓名',
          dataIndex: 'userName',
        },
        {
          title: '用户日期',
          dataIndex: 'userDate',
          dateFormat: 'YYYY-MM-DD',
        },
        {
          title: '用户性别',
          dataIndex: 'userSex',
          enums: ['男', '女'],
        },
        {
          title: '用户状态',
          dataIndex: 'userState',
          enums: {
            disabled: '已停用',
            enabled: '启用',
            initial: '初始化',
          },
        },
      ]}
      request={() => {
        return {
          total: 1,
          success: true,
          data: [
            {
              userName: '测试',
              userSex: 0,
              userState: 'initial',
              userType: 'admin',
              userDate: new Date().getTime(),
            },
          ],
        };
      }}
    />
  );
};
```

## 树形数据展示

> 树形数据展示的例子，data 里有 children 字段

```jsx | react
import { Table } from '@yl-d/design';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const data = [
  {
    id: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    children: [
      {
        id: '1-1',
        name: 'Christina',
        address: '332 Park Road, London',
        email: 'christina@example.com',
      },
    ],
  },
  {
    id: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
    children: [
      {
        id: '2-1',
        name: 'Ed Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        email: 'ed.hellen@example.com',
        children: [
          {
            id: '2-1-1',
            name: 'Eric Miller',
            salary: 23000,
            address: '67 Park Road, London',
            email: 'eric.miller@example.com',
          },
          {
            id: '2-1-2',
            name: 'Tom Jerry',
            salary: 666,
            address: '67 Park Road, London',
            email: 'tom.jerry@example.com',
          },
        ],
      },
      {
        id: '2-2',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com',
      },
      {
        id: '2-3',
        name: 'George Bush',
        salary: 24000,
        address: '62 Park Road, London',
        email: 'george.bush@example.com',
      },
    ],
  },
  {
    id: '7',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
];

export default () => {
  return (
    <Table
      rowKey="key"
      useRefresh={false}
      useFilter={false}
      pagination={false}
      columns={columns}
      request={() => {
        return {
          success: true,
          data,
        };
      }}
    />
  );
};
```

## 自定义分页

> 配置 pagination

```jsx | react
import { Table } from '@yl-d/design';

export default () => {
  return (
    <Table
      rowKey="id"
      useRefresh={false}
      useFilter={false}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
        },
        {
          title: '姓名',
          dataIndex: 'username',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      pagination={{
        pageSize: 10,
        showJumper: true,
        pageSizeOptions: [10, 20, 30],
        onPageSizeChange: (e) => {
          console.log(e);
        },
        onChange: (e) => {
          console.log(e);
        },
      }}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## 配置操作列

> 使用 rowOperations 配置操作列信息

```jsx | react | var(--bg-color-2)
import { Table, Message } from '@yl-d/design';
import { IconPlus } from '@yl-d/icon';
import axios from 'axios';

export default () => {
  return (
    <Table
      rowKey="id"
      title="用户信息表"
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
        },
        {
          title: '姓名',
          dataIndex: 'username',
          width: 120,
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
          sort: true,
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      rowOperations={{
        width: 140,
        menus: ({ record, refresh, index }) => [
          {
            label: '编辑',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '查看',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '删除',
            confirm: {
              content: `是否确认删除该数据（${record.username}）？`,
            },
            async onClick() {
              await new Promise((res) => setTimeout(res, 1000));
              Message.success('已删除!');
              refresh();
              console.log(record);
            },
          },
        ],
      }}
      tools={[
        {
          label: '添加',
          type: 'primary',
          icon: <IconPlus />,
          onClick({ refresh }) {
            console.log(refresh);
          },
        },
      ]}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## 固定左右列

> 只有配置了 scroll.x 属性才生效

```jsx | react | var(--bg-color-2)
import { Table, Message } from '@yl-d/design';
import { IconPlus } from '@yl-d/icon';
import axios from 'axios';

export default () => {
  return (
    <Table
      rowKey="id"
      title="用户信息表"
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
          fixed: 'left',
        },
        {
          title: '姓名',
          dataIndex: 'username',
          width: 120,
          fixed: 'left',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
          sort: true,
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      rowOperations={{
        width: 140,
        menus: ({ record, refresh, index }) => [
          {
            label: '编辑',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '查看',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '删除',
            confirm: {
              content: `是否确认删除该数据（${record.username}）？`,
            },
            async onClick() {
              await new Promise((res) => setTimeout(res, 1000));
              Message.success('已删除!');
              refresh();
              console.log(record);
            },
          },
        ],
      }}
      scroll={{
        x: 1200,
        y: 300,
      }}
      tools={[
        {
          label: '添加',
          type: 'primary',
          icon: <IconPlus />,
          onClick({ refresh }) {
            console.log(refresh);
          },
        },
      ]}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## 支持多选

```jsx | react
import { Table } from '@yl-d/design';

export default () => {
  return (
    <Table
      rowKey="id"
      useRefresh={false}
      useFilter={false}
      checkable
      onCheck={(e) => {
        console.log(e);
      }}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
        },
        {
          title: '姓名',
          dataIndex: 'username',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## 配置 CRUD

```jsx | react
import { Table, Message } from '@yl-d/design';
import { IconPlus } from '@yl-d/icon';
import axios from 'axios';

const schema = [
  {
    type: 'Input',
    label: '姓名',
    name: 'username',
  },
  {
    type: 'Select',
    label: '性别',
    name: 'sex',
    props: {
      options: [
        {
          label: '男',
          value: 0,
        },
        {
          label: '女',
          value: 1,
        },
      ],
    },
  },
  {
    type: 'Input',
    label: '城市',
    name: 'city',
  },
  {
    type: 'Input',
    label: '签名',
    name: 'sign',
  },
  {
    type: 'Input',
    label: '职业',
    name: 'classify',
  },
  {
    type: 'Input',
    label: '分数',
    name: 'score',
  },
  {
    type: 'Input',
    label: '登录次数',
    name: 'logins',
  },
];

export default () => {
  return (
    <Table
      rowKey="id"
      title="用户信息表"
      style={{
        padding: 20,
        background: 'var(--bg-color-2)',
      }}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
          fixed: 'left',
        },
        {
          title: '姓名',
          dataIndex: 'username',
          width: 120,
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
          sort: true,
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      rowOperations={{
        width: 140,
        menus: ({ record, refresh, search, index }) => [
          {
            label: '编辑',
            drawerFormProps: {
              title: '编辑用户',
              initialValues: {
                ...record,
              },
              schema,
              onSubmit: async (values) => {
                console.log(values);
                Message.success('编辑完成');
                refresh();
              },
            },
          },
          {
            label: '查看',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '删除',
            confirm: {
              content: `是否确认删除该数据（${record.username}）？`,
            },
            async onClick() {
              await new Promise((res) => setTimeout(res, 1000));
              Message.success('已删除!');
              search();
              console.log(record);
            },
          },
        ],
      }}
      scroll={{
        x: 1200,
        y: 300,
      }}
      tools={[
        {
          label: '添加',
          type: 'primary',
          icon: <IconPlus />,
          drawerFormProps: ({ search }) => ({
            title: '添加用户',
            initialValues: {},
            schema,
            onSubmit: async (values) => {
              Message.success('添加完成');
              search();
            },
          }),
        },
      ]}
      search={{
        column: 3,
        schema: [
          {
            type: 'Input',
            name: 'name',
            label: '用户姓名',
          },
        ],
      }}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## API

```API
/packages/design/src/data-display/table/type.tsx
```
