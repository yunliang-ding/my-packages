export interface ProgressProps {
  percent: number;
  strokeColor: string;
  active?: boolean;
  progressRef?: {
    current: {
      setPercent?: (p) => void;
      percent?: number;
    };
  };
}