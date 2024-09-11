import { CSSProperties, ReactNode } from 'react';

export type UploadStatus = 'init' | 'uploading' | 'done' | 'error';

export type ListType = 'text' | 'picture-list' | 'picture-card';

export const STATUS: {
  [key: string]: UploadStatus;
} = {
  init: 'init',
  uploading: 'uploading',
  success: 'done',
  fail: 'error',
};

export type UploadItem = {
  /** 当前上传文件的唯一标示 */
  uid: string;
  /** 文件 url */
  url: string;
  /** 文件名 */
  name: string;
  /** 当前上传文件的状态 */
  status?: UploadStatus;
  /** 文件对象 */
  originFile?: File;
  /** 上传进度百分比 */
  percent?: number;
  /** 当前文件上传请求返回的响应 */
  response?: object;
};

export interface UploadProps {
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  /** 文案 */
  text?: ReactNode;
  /** 文件的数量 */
  limit?: number;
  /** 支持多选 */
  multiple?: boolean;
  /** 文件大小 */
  limitSize?: number;
  /** 展示类型 */
  listType?: 'text' | 'picture-list' | 'picture-card';
  /** 上传的文件列表 */
  value?: UploadItem[];
  /** 上传文件改变时的回调。文件开始上传，失败，成功时会触发 */
  onChange?: (fileList: UploadItem[]) => void;
  /** 文件重新上传时触发的回调 */
  onProgress?: (file: UploadItem, e?: ProgressEvent) => void;
  /** 接受上传的类型 */
  accept?: string;
  /** 额外的参数 */
  data?: any;
  /** OssConfig */
  OssConfig?: {};
}
