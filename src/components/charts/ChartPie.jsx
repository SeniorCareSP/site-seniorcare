import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useState } from 'react';

export default function ChartPie() {
  const [qtdHomem, setQtdHomem] = useState();
  const [qtdMulher, setQtdMulher] = useState();
  const [qtdNone, setQtdNone] = useState();

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: {qtdHomem}, label: 'Homem', color: '#252F46'},
            { id: 1, value: {qtdMulher}, label: 'Mulher', color: '#2C7595'},
            { id: 2, value: {qtdNone}, label: 'Prefiro não informar', color: '#077DB0'},
          ],
        },
      ]}
      width={450}
      height={230}
    />
  );
}