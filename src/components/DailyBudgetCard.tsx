import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Card } from 'primereact/card';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
});

export default function DailyBudgetCard() {
    const dailyBudget = useSelector((state: RootState) => state.user.dailyBudget);

    return (
        <Card title="Seu Orçamento Diário" className="w-80">
            <p className="text-lg mb-2">Com base na sua renda, seu orçamento diário é:</p>
            <p className="text-3xl font-semibold text-blue-600 mt-4">{currencyFormatter.format(dailyBudget)}</p>
        </Card>
    );
}
