import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expence-slice";

const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
  },
});
export { store };
