import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import DailyBudgetCard from "../components/DailyBudgetCard";
import GoalPercentageCard from "../components/GoalPercentageCard";
import FinancialTransactionsCard from "../components/FinancialTransactionsCard";
import BankAccountCard from "../components/BankAccountCard";
import ExpensesByCategoryCard from "../components/ExpensesByCategory";

function Home() {
    const nameUser = useSelector((state: RootState) => state.user.name);


 
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Olá, {nameUser}</h1>
            <div className="flex flex-col space-y-4 max-w-4xl">
                <div className="flex space-x-4">
                    <DailyBudgetCard />
                    <GoalPercentageCard />
                </div>
                <div className="flex space-x-4">
                    <FinancialTransactionsCard />
                    <BankAccountCard />
                </div>
                <div>
                    <ExpensesByCategoryCard />
                </div>
            </div>
        </div>
    );
}

export default Home;
