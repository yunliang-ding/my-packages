import { CSSProperties, ReactNode } from "react";

export interface SpinProps {
  loading?: Boolean;
  style?: CSSProperties;
  message?: ReactNode;
  children?: ReactNode;
}
