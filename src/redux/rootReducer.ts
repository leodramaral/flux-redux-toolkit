import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices.ts/userSlice";

const rootReducer = combineReducers({
    user: userSlice
});

export default rootReducer;
