import { AnchorProps, CardFormProps } from "../..";

export interface AnchorFormProps extends AnchorProps {
  /** form 属性 */
  formProps: CardFormProps;
  /** 外层容器名 */
  className?: string;
  /** 容器高度 */
  height: number;
}

export default (props: AnchorFormProps) => null;