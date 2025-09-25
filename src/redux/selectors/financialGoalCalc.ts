import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const getDailyBudget = (state: RootState) => state.user.dailyBudget;
export const getIncome = (state: RootState) => state.user.income;
export const getFinancialGoal = (state: RootState) => state.user.financialGoal;


export const financialGoalCalcSelector = createSelector(
    [getDailyBudget, getIncome, getFinancialGoal],
    (dailyBudget, income, financialGoal) => {
        const goals = {
            economizar: income * 0.2,
            investir: income * 0.15,
            'controlar-gastos': income * 0.8
        }

        const goal = goals[financialGoal] || 0;

        if (financialGoal === 'controlar-gastos') {
            return (((goal - dailyBudget) / goal) * 100).toFixed(2);
        }

        return goal ? ((dailyBudget / goal) * 100).toFixed(2) : 0;
    }
)
