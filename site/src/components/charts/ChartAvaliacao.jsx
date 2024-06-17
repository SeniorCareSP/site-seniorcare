import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



export default function ChartAvaliacao() {

  return (
    <BarChart
      series={[
        { data: [10, 3, 2, 1], label: "Tipo de ajuda", color: '#2C7595'},
      ]}
      height={190}
      width={550}
      xAxis={[{ data: ['Trabalho de casa', 'Curativos', 'Culinaria' , 'Banho'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}