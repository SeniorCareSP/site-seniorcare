import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { blue } from '@mui/material/colors';

function ChartGenero(){
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34, 2], label: "Homem",color: '#2C7595'},
        { data: [51, 6, 49, 30, 1], label: "Mulher",color: '#252F46'},
      ]}
      height={190}
      width={550}
      xAxis={[{ data: ['60', '70', '80', '90', '100+'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}


export default ChartGenero;