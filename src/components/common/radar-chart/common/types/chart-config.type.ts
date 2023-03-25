import { ChartColor, Scriptable } from 'chart.js';

type ChartDataset = {
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

type ChartConfig = {
  datasets: ChartDataset[];
  labels: string[];
};

export { ChartConfig };
