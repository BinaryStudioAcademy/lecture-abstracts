import React, { useEffect, useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import Chart from 'chart.js';
import { isEqual, roundToTwoDecimals, createOptions } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faUndo } from '@fortawesome/pro-regular-svg-icons';
import { feedbackStarters } from './data/feedback-starters';
import { ChartDatasets } from '~/types';
import 'chartjs-plugin-dragdata';

import * as styles from './radar-chart.module.scss';

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
      setChart(new Chart(ctx, createOptions(chartData, setChartData)));
      setInitiated(true);
    }
  }, []);

  useEffect(() => {
    if (chart) {
      chart.update();
    }
  }, [chartData]);
  return (
    <div className={styles.radarChart}>
      <canvas ref={chartElement} />
      {!areMyGradesDefault && (
        <button className={styles.resetGrades} onClick={resetMyGrades}>
          <FontAwesomeIcon icon={faUndo} className={styles.icon} /> Reset
        </button>
      )}
      <button
        className={styles.gradesByCategories}
        onClick={(): void => copyGradesByCategories(myGrades)}
      >
        <FontAwesomeIcon icon={faCopy} className={styles.icon} />
      </button>
      <button
        className={styles.finalGrade}
        onClick={(): void =>
          copyFinalGrade(String(roundToTwoDecimals(myGradesAverage)))
        }
      >
        {roundToTwoDecimals(myGradesAverage)}
        <FontAwesomeIcon icon={faCopy} className={styles.copy} />
      </button>
    </div>
  );
};

export { RadarChart };
