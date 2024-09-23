import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartAvaliacao({ data }) {
  const { trabalhosDeCasa, curativos, culinaria, banho } = data;

  return (
    <BarChart
      series={[
        { data: [trabalhosDeCasa, curativos, culinaria, banho], label: "Características", color: '#2C7595'},
      ]}
      height={190}
      width={550}
      xAxis={[{ data: ['Trabalho de casa', 'Curativos', 'Culinária', 'Banho'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
