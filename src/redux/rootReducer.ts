import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices.ts/userSlice";
import financialTransactionSlice from "./slices.ts/financialTransactionSlice";

const rootReducer = combineReducers({
    user: userSlice,
    financialTransaction: financialTransactionSlice
});

export default rootReducer;
