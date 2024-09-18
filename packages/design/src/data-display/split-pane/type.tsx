import { CSSProperties } from "react";
import { SplitPaneProps as ReactSplitPaneProps } from "react-split-pane";

export interface SplitPaneProps extends ReactSplitPaneProps{
  style?: CSSProperties;
}