import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import DailyBudgetCard from "../components/DailyBudgetCard";
import GoalPercentageCard from "../components/GoalPercentageCard";
import FinancialTransactionsCard from "../components/FinancialTransactionsCard";

function Home() {
    const nameUser = useSelector((state: RootState) => state.user.name);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Olá, {nameUser}</h1>
            <div className="flex space-x-4 my-8">
                <DailyBudgetCard />
                <GoalPercentageCard />
            </div>
            <div className="flex space-x-4 my-8">
                <FinancialTransactionsCard />
            </div>
        </div>
    );
}

export default Home;
