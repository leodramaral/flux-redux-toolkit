import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    income: 0,
    financialGoal: ''
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
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
