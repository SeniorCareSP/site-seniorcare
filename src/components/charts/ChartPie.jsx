import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function ChartPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A', color: '#252F46'},
            { id: 1, value: 15, label: 'series B', color: '#2C7595'},
            { id: 2, value: 20, label: 'series C', color: '#077DB0'},
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}