import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function ChartGenero({ data }) {
    const { homem = [], mulher = [] } = data;

    return (
        <BarChart
            series={[
                { data: homem, label: "Homem", color: '#2C7595' },
                { data: mulher, label: "Mulher", color: '#252F46' },
            ]}
            height={200}
            width={550}
            xAxis={[{ data: ['60', '70', '80', '90', '100+'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    );
}

export default ChartGenero;
