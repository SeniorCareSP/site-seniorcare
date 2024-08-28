import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function ChartPie({ data }) {
    // Desestruturação dos dados com tratamento condicional para valores vazios
    const { homem = 0, mulher = 0, none = 0 } = data;

    // Verificação e atribuição de valor padrão caso algum seja zero ou indefinido
    const homemValue = homem === 0 || isNaN(homem) ? 1 : homem;
    const mulherValue = mulher === 0 || isNaN(mulher) ? 1 : mulher;
    const noneValue = none === 0 || isNaN(none) ? 1 : none;

    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: homemValue, label: 'Homem', color: '#252F46' },
                        { id: 1, value: mulherValue, label: 'Mulher', color: '#2C7595' },
                        { id: 2, value: noneValue, label: 'Prefiro não informar', color: '#077DB0' },
                    ],
                },
            ]}
            width={530}
            height={230}
        />
    );
}
