import { createSlice } from "@reduxjs/toolkit";
export const booksSlice = createSlice({
    name: "books",
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [],
        active: null,
    },
    reducers: {
        savingNewBook: (state) => {
            state.isSaving = true;
            state.messageSaved = "";
        },
        addNewEmptyBook: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveBook: (state, action) => {
            state.active = action.payload;
            state.messageSaved = "";
        },
        setBooks: (state, action) => {
            state.notes = action.payload;
            state.messageSaved = "";
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = "";
        },
        bookUpdated: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map((note) => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });

            state.messageSaved = `${action.payload.title}, book updated successfully`;
        },
        deleteBookById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        },

        exitBookById: (state) => {
            state.active = null;
        },
    },
});
// Action creators are generated for each case reducer function
export const {
    addNewEmptyBook,
    savingNewBook,
    setActiveBook,
    setBooks,
    setSaving,
    bookUpdated,
    deleteBookById,
    exitBookById,
} = booksSlice.actions;
