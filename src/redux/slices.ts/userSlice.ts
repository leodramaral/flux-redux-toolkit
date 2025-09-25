import { createSlice } from "@reduxjs/toolkit";

type FinancialGoal = 'economizar' | 'investir' | 'controlar gastos';

interface IUserState {
    name: string;
    income: number;
    financialGoal: FinancialGoal;
    dailyBudget: number;
}

const initialState: IUserState = {
    name: '',
    income: 0,
    financialGoal: 'economizar',
    dailyBudget: 0
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { name, income, financialGoal } = action.payload;
            state.name = name;
            state.income = income;
            state.financialGoal = financialGoal;
        },
        setDailyBudget: (state, action) => {
            const income = action.payload;
            state.income = parseFloat(income);
            state.dailyBudget = Math.floor((income / 30));
        }
    }
});

export const { setUser, setDailyBudget } = userSlice.actions;
export default userSlice.reducer;
