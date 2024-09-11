import { ReactNode, CSSProperties } from "react";
import { iconMapping } from ".";

export interface AlertProps {
  message: ReactNode;
  closable?: Boolean;
  type?: keyof typeof iconMapping;
  style?: CSSProperties;
}