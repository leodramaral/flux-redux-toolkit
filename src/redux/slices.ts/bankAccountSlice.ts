import { createSlice } from "@reduxjs/toolkit";

export interface IBankAccount {
    id: string;
    name: string;
    balance: number;
}

const initialState = {
    accounts: [] as IBankAccount[]
};

const bankAccountSlice = createSlice({
    name: 'bankAccount',
    initialState,
    reducers: {
        addAccount: (state, action) => {
            const id = Math.floor(Date.now() + Math.random());
            state.accounts.push({ id, ...action.payload });
        }
    }
});

export const { addAccount } = bankAccountSlice.actions;
export default bankAccountSlice.reducer;
