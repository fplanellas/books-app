import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "checking", //"checking",'not-authenticated', 'authenticated'
        uid: null,
        email: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = "authenticated";
            state.uid = payload.uid;
            state.email = payload.email;
        },
        checkingCredentials: (state) => {
            state.status = "checking";
        },
    },
});

export const { login, checkCredentials } = authSlice.actions;
