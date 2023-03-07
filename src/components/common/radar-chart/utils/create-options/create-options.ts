import { ChartDatasets } from '~/types';

type ChartData = {
  labels: string[];
  datasets: ChartDatasets[];
};

const createOptions = (
  chartData: ChartData,
  setChartData: React.Dispatch<React.SetStateAction<ChartData>>,
): object => {
  return {
    type: 'radar',
    data: { ...chartData },
    options: {
      aspectRatio: 1,
      dragData: true,
      dragDataRound: 0,
      onDragEnd: (
        event: DragEvent,
        datasetIndex: number,
        index: number,
        value: number,
      ): void =>
        setChartData((prev: ChartData) => {
          const newChartData = { ...prev };
          newChartData.datasets[datasetIndex].data = [
            ...prev.datasets[datasetIndex].data.slice(0, index),
            value,
            ...prev.datasets[datasetIndex].data.slice(index + 1),
          ];
          return newChartData;
        }),
      layout: {
        padding: {
          left: 16,
          right: 16,
          top: 16,
          bottom: 16,
        },
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      scale: {
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1,
          fontSize: 13,
          fontStyle: 'bold',
          fontColor: '#999999',
        },
        pointLabels: {
          fontSize: 16,
          fontStyle: 'bold',
        },
      },
      scaleLabel: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  };
};

export { createOptions };
