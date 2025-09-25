import { createSlice } from "@reduxjs/toolkit";

type FinancialType = 'income' | 'expense';

interface IFinancialTransactionState {
    id: string;
    name: string;
    amount: number;
    type: FinancialType;
    category: string;
    date: string;
}

const initialState = {
    transactions: [] as IFinancialTransactionState[]
};

const financialTransactionSlice = createSlice({
    name: 'financialTransaction',
    initialState,
    reducers: {
        addTnx: (state, action) => {
            const id = Math.floor(Date.now() + Math.random());
            state.transactions.push({ id, ...action.payload });
        }
    }
});

export const { addTnx } = financialTransactionSlice.actions;
export default financialTransactionSlice.reducer;