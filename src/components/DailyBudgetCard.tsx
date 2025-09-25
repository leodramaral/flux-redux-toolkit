import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
});

export default function DailyBudgetCard() {
    const dailyBudget = useSelector((state: RootState) => state.user.dailyBudget);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <h2 className="text-2xl font-bold mb-4">Seu Orçamento Diário</h2>
            <p className="text-lg">Com base na sua renda, seu orçamento diário é:</p>
            <p className="text-3xl font-semibold text-blue-600 mt-4">{currencyFormatter.format(dailyBudget)}</p>
        </div>
    );
}