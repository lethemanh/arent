import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useStyle from './style';
import color from 'styles/color';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export function BodyWeightGraph() {
  const classes = useStyle();

  const labels = useMemo(
    () => [
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
    ],
    [],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    }),
    [],
  );

  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => Math.round(Math.random() * 100)),
          borderColor: color.primary300,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => Math.round(Math.random() * 100)),
          borderColor: color.secondary300,
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    }),
    [labels],
  );

  return (
    <div className={classes.container}>
      <Line options={options} data={chartData} />
    </div>
  );
}
