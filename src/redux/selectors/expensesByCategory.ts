import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const getTransactions = (state: RootState) => state.financialTransaction.transactions;

export const expensesByCategorySelector = createSelector(
    [getTransactions],
    (transactions) => {
        const expenses = transactions.filter(tx => tx.type === 'expense');
        const expensesByCategory = expenses.reduce((acc, expense) => {
            if (!acc[expense.category]) {
                acc[expense.category] = 0;
            }
            acc[expense.category] += expense.amount;
            return acc;
        }, {} as Record<string, number>);

        return expensesByCategory;
    }
);
