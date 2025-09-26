import { Card } from 'primereact/card';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { expensesByCategorySelector } from '../redux/selectors/expensesByCategory';
import { Chart } from 'primereact/chart';

export default function ExpensesByCategoryCard() {
    const expensesByCategory = useSelector(expensesByCategorySelector);

    const [chartData, setChartData] = useState<object | undefined>(undefined);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);

        const bgColors = [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--pink-500'),
            documentStyle.getPropertyValue('--purple-500'),
        ];
        const borderColors = [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--pink-400'),
            documentStyle.getPropertyValue('--purple-400'),
        ];

        const categoryNames = Object.keys(expensesByCategory);
        const categoryValues = Object.values(expensesByCategory);

        let labels = categoryNames;
        let data = categoryValues;
        if (categoryNames.length > 4) {
            labels = categoryNames.slice(0, 4).concat('Demais');
            data = categoryValues.slice(0, 4);
            const demais = categoryValues.slice(4).reduce((acc, val) => acc + val, 0);
            data.push(demais);
        }

        const dynamicBgColors = bgColors.slice(0, labels.length);
        const dynamicBorderColors = borderColors.slice(0, labels.length);

        setChartData({
            labels,
            datasets: [
                {
                    label: 'Gastos por Categoria',
                    data,
                    backgroundColor: dynamicBgColors,
                    borderColor: dynamicBorderColors,
                }
            ]
        });
    }, [expensesByCategory]);

    return (
        <Card className='w-full' title="Gastos por Categoria">
            <Chart
                type="pie"
                data={chartData}
                className="w-full h-64"
            />
        </Card>
    )
}
