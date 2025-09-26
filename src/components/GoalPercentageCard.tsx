import { useSelector } from "react-redux";
import { financialGoalCalcSelector } from "../redux/selectors/financialGoalCalc";
import type { RootState } from "../redux/store";
import { Card } from "primereact/card";

export default function GoalPercentageCard() {
    const financialGoalPercentage = useSelector(financialGoalCalcSelector);
    const financialGoal = useSelector((state: RootState) => state.user.financialGoal);
    return (
        <Card title="Meta Financeira" className="w-120">
            <p className="text-lg mb-2">{financialGoal.toUpperCase()}</p>
            <p className="text-3xl font-semibold text-blue-600 mt-4">{financialGoalPercentage}%</p>
        </Card>
    );
}