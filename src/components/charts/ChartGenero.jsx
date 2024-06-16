import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function ChartGenero(){
  const [idadeHomem, setIdadeHomem] = React.useState([35, 44, 24, 34, 2]);
  const [idadeMulher, setIdadeMulher] = React.useState([51, 6, 49, 30, 1]);

  return (
    <BarChart
      series={[
        { data: idadeHomem, label: "Homem",color: '#2C7595'},
        { data: idadeMulher, label: "Mulher",color: '#252F46'},
      ]}
      height={200}
      width={550}
      xAxis={[{ data: ['60', '70', '80', '90', '100+'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}


export default ChartGenero;