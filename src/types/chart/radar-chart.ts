import { ChartColor, Scriptable } from 'chart.js';

type ChartDatasets = {
  label: string;
  data: number[];
  dragData: boolean;
  borderColor: string;
  backgroundColor: string;
  pointBorderColor?: string;
  pointBackgroundColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
  pointHoverBorderColor?: string;
  pointRadius: number;
  pointHoverRadius: number;
  pointBorderWidth?: number;
  pointHoverBorderWidth?: number;
  pointHitRadius: number;
};

export { ChartDatasets };
