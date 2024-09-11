import { Button } from '@yl-d/design';

const Page = () => {
  console.log('render dict')
  return <span>dict</span>;
};

Page.auth = '/dict/list';

// 配置面包屑
Page.breadCrumb = {
  extra: <Button type="primary">刷新字典</Button>,
}

export default Page;
