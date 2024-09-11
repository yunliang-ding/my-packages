import { ReactNode } from 'react';
import { FormProps, FormItemProps, ActionProps } from '../..';

/** 分步提交表单 */
export interface StepFormProps extends FormProps {
  /** 当前步骤 */
  current?: number;
  /** 手动切换步骤 */
  onStepsClick?: (current) => void;
  /** 配置每一步的表单项和操作按钮 */
  steps: {
    title: ReactNode;
    description?: ReactNode;
    column?: number;
    schema: FormItemProps[];
    actions: ActionProps[];
  }[];
}

export default (props: StepFormProps) => null;
