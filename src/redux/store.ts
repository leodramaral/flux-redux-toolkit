import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices.ts/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice
    }
});

export default store;
