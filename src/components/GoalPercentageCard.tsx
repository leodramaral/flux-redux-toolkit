import { useSelector } from "react-redux";
import { financialGoalCalcSelector } from "../redux/selectors/financialGoalCalc";
import type { RootState } from "../redux/store";

export default function GoalPercentageCard() {
    const financialGoalPercentage = useSelector(financialGoalCalcSelector);
    const financialGoal = useSelector((state: RootState) => state.user.financialGoal);
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <h2 className="text-xl font-semibold mb-4">Meta Financeira</h2>
            <p className="text-gray-700">{financialGoal.toUpperCase()}</p>
            <p className="text-3xl font-semibold text-blue-600 mt-4">{financialGoalPercentage}%</p>
        </div>
    );
}