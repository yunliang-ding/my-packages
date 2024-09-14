import { defineConfig } from 'lyr';

export default defineConfig({
  title: '前端生态包',
  favicon:
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/user-logo.png',
  monorepo: true,
  // monorepoPackages: ['@yl-d/design'],
  link: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/monaco-file-icon.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.css',
  ],
  devScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/less.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-parser-typescript.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/bignumber.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/html2canvas.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jszip.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/pizzip.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/file-saver.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/docxtemplater.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/low-code.min.js',
  ],
  buildScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/less.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-parser-typescript.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/bignumber.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/html2canvas.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jszip.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/pizzip.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/file-saver.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/docxtemplater.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/low-code.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/track.min.js',
  ],
  serverPath: '/apis',
  docsRequire: {
    axios: 'axios',
    yldIcon: '@yl-d/icon',
  },
  webpackConfig() {
    return {
      resolve: {
        // 添加fallback配置
        fallback: {
          path: 'path-browserify',
        },
      },
    };
  },
  menus: [
    {
      label: '@yl-d/design',
      path: '/design',
      children: [
        {
          label: '介绍',
          path: '/design',
          group: true,
        },
        {
          label: '更新日志',
          path: '/design/log',
          group: true,
        },
        {
          label: '通用',
          path: '/design/general',
          group: true,
          children: [
            {
              label: '按钮 Button',
              path: '/design/general/button',
            },
            {
              label: '图标 Icon',
              path: '/design/general/icon',
            },
            {
              label: '滑动轴 MacScrollbar',
              path: '/design/general/mac-scrollbar',
            },
          ],
        },
        {
          label: '数据展示',
          path: '/design/data-display',
          group: true,
          children: [
            {
              label: '头像 Avatar',
              path: '/design/data-display/avatar',
            },
            {
              label: '徽标 Badge',
              path: '/design/data-display/badge',
            },
            {
              label: '卡片展示 Card',
              path: '/design/data-display/card',
            },
            {
              label: '图片轮播 Carousel',
              path: '/design/data-display/carousel',
            },
            {
              label: '描述列表 Descriptions',
              path: '/design/data-display/descriptions',
            },
            {
              label: '空状态 Empty',
              path: '/design/data-display/empty',
            },
            {
              label: '列表 List',
              path: '/design/data-display/list',
              disabled: true,
            },
            {
              label: '间距 Space',
              path: '/design/data-display/space',
            },
            {
              label: '表格 Table',
              path: '/design/data-display/table',
            },
            {
              label: '选项卡 Tabs',
              path: '/design/data-display/tabs',
            },
            {
              label: '时间轴 Timeline',
              path: '/design/data-display/timeline',
            },
            {
              label: '文字气泡 Tooltip',
              path: '/design/data-display/tooltip',
            },
            {
              label: '树 Tree',
              path: '/design/data-display/tree',
            },
          ],
        },
        {
          label: '表单项',
          path: '/design/data-entry',
          group: true,
          children: [
            {
              label: '自动补全 AutoComplete',
              path: '/design/data-entry/auto-complete',
            },
            {
              label: '级联选择 Cascader',
              path: '/design/data-entry/cascader',
            },
            {
              label: '复选框 Checkbox',
              path: '/design/data-entry/checkbox',
            },
            {
              label: '日期选择 DatePicker',
              path: '/design/data-entry/date-picker',
            },
            {
              label: '数字输入框 InputNumber',
              path: '/design/data-entry/input-number',
            },
            {
              label: '输入框 Input',
              path: '/design/data-entry/input',
            },
            {
              label: '单选按钮 Radio',
              path: '/design/data-entry/radio',
            },
            {
              label: '评分 Rate',
              path: '/design/data-entry/rate',
            },
            {
              label: '下拉选 Select',
              path: '/design/data-entry/select',
            },
            {
              label: '滑块 Slider',
              path: '/design/data-entry/slider',
            },
            {
              label: '开关 Switch',
              path: '/design/data-entry/switch',
            },
            {
              label: '时间选择 TimePicker',
              path: '/design/data-entry/time-picker',
            },
            {
              label: '数据穿梭框 Transfer',
              path: '/design/data-entry/transfer',
              disabled: true,
            },
            {
              label: '树选择器 TreeSelect',
              path: '/design/data-entry/tree-select',
            },
            {
              label: '文件上传 Upload',
              path: '/design/data-entry/upload',
            },
          ],
        },
        {
          label: '表单容器',
          path: '/design/form-submit',
          group: true,
          children: [
            {
              label: '基础表单 Form',
              path: '/design/form-submit/form',
            },
            {
              label: '查询表单 Search',
              path: '/design/form-submit/form-search',
            },
            {
              label: '导航表单 AnchorForm',
              path: '/design/form-submit/form-anchor',
            },
            {
              label: '卡片表单 CardForm',
              path: '/design/form-submit/form-card',
            },
            {
              label: '抽屉表单 DrawerForm',
              path: '/design/form-submit/form-drawer',
            },
            {
              label: '弹框表单 ModalForm',
              path: '/design/form-submit/form-modal',
            },
            {
              label: '弹框表单 StepForm',
              path: '/design/form-submit/form-step',
            },
          ],
        },
        {
          label: '反馈提示',
          path: '/design/feed-back',
          group: true,
          children: [
            {
              label: '警告提示 Alert',
              path: '/design/feed-back/alert',
            },
            {
              label: '抽屉 Drawer',
              path: '/design/feed-back/drawer',
            },
            {
              label: '消息提示 Message',
              path: '/design/feed-back/message',
            },
            {
              label: '对话框 Modal',
              path: '/design/feed-back/modal',
            },
            {
              label: '通知 Notification',
              path: '/design/feed-back/notification',
            },
            {
              label: '气泡确认框 Popconfirm',
              path: '/design/feed-back/popconfirm',
              disabled: true,
            },
            {
              label: '进度条 Progress',
              path: '/design/feed-back/progress',
            },
            {
              label: '结果页 Result',
              path: '/design/feed-back/result',
              disabled: true,
            },
            {
              label: '骨架屏 Skeleton',
              path: '/design/feed-back/skeleton',
              disabled: true,
            },
            {
              label: '加载 Spin',
              path: '/design/feed-back/spin',
            },
            {
              label: '水印 Watermark',
              path: '/design/feed-back/watermark',
            },
          ],
        },
        {
          label: '导航相关',
          path: '/design/navigation',
          group: true,
          children: [
            {
              label: '面包屑 Breadcrumb',
              path: '/design/navigation/breadcrumb',
            },
            {
              label: '下拉菜单 Dropdown',
              path: '/design/navigation/dropdown',
            },
            {
              label: '菜单 Menu',
              path: '/design/navigation/menu',
            },
            {
              label: '基础布局 Layout',
              path: '/design/navigation/layout',
            },
            {
              label: '分页 Pagination',
              path: '/design/navigation/pagination',
            },
            {
              label: '步骤条 Steps',
              path: '/design/navigation/steps',
            },
            {
              label: '锚点导航 Anchor',
              path: '/design/navigation/anchor',
            },
          ],
        },
        {
          label: '拖拽相关',
          path: '/design/drag',
          group: true,
          children: [
            {
              label: '拖拽容器 DragWrapper',
              path: '/design/drag/wrapper',
            },
            {
              label: '拖拽列表 DragList',
              path: '/design/drag/list',
            },
            {
              label: '拖拽表单 DragForm',
              path: '/design/drag/form',
            },
          ],
        },
        {
          label: '其他',
          path: '/design/other',
          group: true,
          children: [
            {
              label: '返回顶部 BackTop',
              path: '/design/other/back-top',
              disabled: true,
            },
            {
              label: '复制 CopyToClipboard',
              path: '/design/other/copy-to-clipboard',
            },
          ],
        },
      ],
    },
    {
      label: '@yl-d/hooks',
      path: '/hooks',
      children: [
        {
          label: '介绍',
          path: '/hooks',
          group: true,
        },
        {
          label: 'useRefesh',
          path: '/hooks/use-refresh',
        },
        {
          label: 'useUpdateEffect',
          path: '/hooks/use-update-effect',
        },
        {
          label: 'useFullscreen',
          path: '/hooks/use-fullscreen',
        },
        {
          label: 'useReactive',
          path: '/hooks/use-reactive',
        },
      ],
    },
    {
      label: '@yl-d/shared',
      path: '/shared',
      children: [
        {
          label: '介绍',
          path: '/shared',
          group: true,
        },
        {
          label: 'asyncLoad',
          path: '/shared/async-load',
        },
        {
          label: 'BigNumber',
          path: '/shared/big-number',
        },
        {
          label: 'babelParse',
          path: '/shared/babel-parse',
        },
        {
          label: 'ConsoleRender',
          path: '/shared/console-render',
        },
        {
          label: 'copyToClipBoard',
          path: '/shared/copy-to-clip-board',
        },
        {
          label: 'docxReplace',
          path: '/shared/docx-replace',
        },
        {
          label: 'downloadFile',
          path: '/shared/download-file',
        },
        {
          label: 'getElementSnapshot',
          path: '/shared/get-element-snapshot',
        },
        {
          label: 'getUrlSearchParams',
          path: '/shared/get-url-search-params',
        },
        {
          label: 'MarkdownViewer',
          path: '/shared/markdown-viewer',
        },
        {
          label: 'ReactPlayground',
          path: '/shared/react-playground',
        },
      ],
    },
    {
      label: '@yl-d/code-editor',
      path: '/code-editor',
      children: [
        {
          label: '介绍',
          path: '/code-editor',
          group: true,
        },
        {
          label: 'FileExplorer 目录展示',
          path: '/code-editor/file-explorer',
        },
        {
          label: 'FileEditor 内容展示',
          path: '/code-editor/file-editor',
        },
        {
          label: 'FileSearch 文件查找',
          path: '/code-editor/file-search',
        },
        {
          label: 'GitManager 源代码管理',
          path: '/code-editor/git-manager',
        },
      ],
    },
    {
      label: '@yl-d/low-code',
      path: '/low-code',
      children: [
        {
          label: '介绍',
          path: '/low-code',
          group: true,
        },

        {
          label: 'DesignerForm',
          path: '/low-code/designer-form',
        },
        {
          label: 'DesignerTable',
          path: '/low-code/designer-table',
        },
        {
          label: 'DesignerPage',
          path: '/low-code/designer-page',
        },
        {
          label: 'CrudModelRender',
          path: '/low-code/crud-model-render',
        },
      ],
    },
    {
      label: '@yl-d/cli',
      path: '/cli',
      children: [
        {
          label: '介绍',
          path: '/cli',
          group: true,
        },
      ],
    },
    {
      label: '@yl-d/docs',
      path: '/doc',
      children: [
        {
          label: '介绍',
          path: '/doc',
          group: true,
        },
      ],
    },
  ],
});
