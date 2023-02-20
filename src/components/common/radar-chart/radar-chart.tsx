import React, { useEffect, useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import Chart from 'chart.js';
import { isEqual, roundToTwoDecimals } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faUndo } from '@fortawesome/pro-regular-svg-icons';
import { feedbackStarters } from './data/feedback-starters';
import { ChartDatasets } from '~/types';
import 'chartjs-plugin-dragdata';

import './radar-chart.css';

type Props = {
  labels: string[];
  datasets: ChartDatasets[];
};

const RadarChart: React.FC<Props> = ({ labels, datasets }) => {
  const [chartData, setChartData] = useState({ labels, datasets });
  const [chart, setChart] = useState<Chart | null>(null);
  const [initiated, setInitiated] = useState<boolean>(false);
  const chartElement = useRef<HTMLCanvasElement>(null);

  const resetMyGrades = (): void => {
    setChartData((prevData) => {
      const newData = { ...prevData };
      newData.datasets[0].data = [...prevData.datasets[1].data];
      return newData;
    });
  };

  const copyGradesByCategories = (grades: number[]): void => {
    copy(
      feedbackStarters[
        Math.floor(Math.random() * (feedbackStarters.length - 1))
      ].replace('$1', grades.join('-')),
    );
  };

  const copyFinalGrade = (grade: string): void => {
    copy(grade);
  };

  const createOptions = (): object => {
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
          setChartData((prev) => {
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

  const myGrades = chartData.datasets[0].data;
  const myGradesAverage =
    myGrades.reduce((memo, value) => (memo += value), 0) / myGrades.length;
  const defaultGrades = chartData.datasets[1].data;
  const areMyGradesDefault = isEqual(myGrades, defaultGrades);

  useEffect(() => {
    if (!initiated && chartElement.current) {
      const ctx = chartElement.current.getContext(
        '2d',
      ) as unknown as CanvasRenderingContext2D;
      setChart(new Chart(ctx, createOptions()));
      setInitiated(true);
    }
  }, []);

  useEffect(() => {
    if (chart) {
      chart.update();
    }
  }, [chartData]);
  return (
    <div className="radar-chart">
      <canvas ref={chartElement} />
      {!areMyGradesDefault && (
        <button className="reset-grades" onClick={resetMyGrades}>
          <FontAwesomeIcon icon={faUndo} className="icon" /> Reset
        </button>
      )}
      <button
        className="grades-by-categories"
        onClick={(): void => copyGradesByCategories(myGrades)}
      >
        <FontAwesomeIcon icon={faCopy} className="icon" />
      </button>
      <button
        className="final-grade"
        onClick={(): void =>
          copyFinalGrade(String(roundToTwoDecimals(myGradesAverage)))
        }
      >
        {roundToTwoDecimals(myGradesAverage)}
        <FontAwesomeIcon icon={faCopy} className="icon" />
      </button>
    </div>
  );
};

export { RadarChart };
