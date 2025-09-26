import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices.ts/userSlice";
import financialTransactionSlice from "./slices.ts/financialTransactionSlice";
import bankAccountSlice from "./slices.ts/bankAccountSlice";

const rootReducer = combineReducers({
    user: userSlice,
    financialTransaction: financialTransactionSlice,
    bankAccount: bankAccountSlice
});

export default rootReducer;
