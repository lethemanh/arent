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
import { Button } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export function BodyFatPercentageGraph() {
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
      maintainAspectRatio: false,
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
      <div className={classes.chartHeader}>
        <span className={classes.title}>BODY RECORD</span>
        <span className={classes.date}>2021.05.21</span>
      </div>
      <div className={classes.chartWrapper}>
        <Line options={options} data={chartData} />
      </div>
      <div className={classes.btnGroup}>
        <Button
          variant="contained"
          className={classes.btn}
          disableElevation
          size="small"
        >
          日
        </Button>
        <Button
          variant="contained"
          className={classes.btn}
          disableElevation
          size="small"
        >
          週
        </Button>
        <Button
          variant="contained"
          className={classes.btn}
          disableElevation
          size="small"
        >
          月
        </Button>
        <Button
          variant="contained"
          className={`${classes.btn} ${classes.btnActive}`}
          disableElevation
          size="small"
        >
          年
        </Button>
      </div>
    </div>
  );
}
