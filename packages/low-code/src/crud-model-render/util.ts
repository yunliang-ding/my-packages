import axios from 'axios';
import { babelParse } from '@yl-d/shared';
import { decrypt } from '../util';

export const parseStandardSchemaStrategy = {
  form: (code: string, require: any) => {
    return babelParse({
      code,
      require,
    });
  },
  table: (code: string, require: any) => {
    return babelParse({
      code,
      require,
    });
  },
};

/** 注册模型Api */
export const registerGlobalApi = async (services, require: any = {}) => {
  // 解析
  try {
    const Window: any = window;
    if (services) {
      const { baseURL, code } = JSON.parse(services);
      if (require.request === undefined) {
        require.request = axios.create({
          baseURL,
          withCredentials: true, // 携带 cookie
        });
      }
      Window.API = babelParse({
        code: decrypt(code, false),
        require,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
