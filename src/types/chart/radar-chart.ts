type ChartDatasets = {
  label: string;
  data: number[];
  dragData: boolean;
  borderColor: string;
  backgroundColor: string;
  pointBorderColor?: string;
  pointBackgroundColor?: (context: unknown) => string;
  pointHoverBorderColor?: string;
  pointRadius: number;
  pointHoverRadius: number;
  pointBorderWidth?: number;
  pointHoverBorderWidth?: number;
  pointHitRadius: number;
};

export { ChartDatasets };
