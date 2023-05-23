import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { booksSlice } from "./books";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        books: booksSlice.reducer,
    },
});
