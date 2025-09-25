import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import DailyBudgetCard from "../components/DailyBudgetCard";
import GoalPercentageCard from "../components/GoalPercentageCard";
import { addTnx } from "../redux/slices.ts/financialTransactionSlice";

function Home() {
    const nameUser = useSelector((state: RootState) => state.user.name);
    const dispatch = useDispatch();

    function handlAddTransaction() {
        dispatch(addTnx({
            name: 'Pão',
            amount: 20,
            type: 'expense',
            category: 'Alimentação',
            date: new Date().toLocaleDateString()
        }))
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Olá, {nameUser}</h1>
            <DailyBudgetCard />
            <GoalPercentageCard />
            <button onClick={handlAddTransaction} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Adicionar Transação
            </button>
        </div>
    );
}

export default Home;
