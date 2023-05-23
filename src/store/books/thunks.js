import { doc, setDoc, collection, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
    addNewEmptyBook,
    bookUpdated,
    deleteBookById,
    savingNewBook,
    setActiveBook,
    setBooks,
    setSaving,
} from "./";
import { loadBooks } from "../../helpers";

export const startNewBook = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewBook());

        const { uid } = getState().auth;

        const newBook = {
            isbn: "",
            title: "",
            subtitle: "",
            author: "",
            published: "",
            publisher: "",
            pages: "",
            website: "",
            category: "",
            description: "",
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/books/notes`));
        const setDocResp = await setDoc(newDoc, newBook);

        newBook.id = newDoc.id;

        dispatch(addNewEmptyBook(newBook));
        dispatch(setActiveBook(newBook));
    };
};

export const startLoadingBooks = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const books = await loadBooks(uid);
        dispatch(setBooks(books));
    };
};

export const startSaveBook = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active } = getState().books;
        const bookToFireStore = { ...active };
        delete bookToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/books/notes/${active.id}`);
        await setDoc(docRef, bookToFireStore, { merge: true });

        dispatch(bookUpdated(active));
    };
};

export const startDeletingBook = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active } = getState().books;

        const docRef = doc(FirebaseDB, `${uid}/books/notes/${active.id}`);
        await deleteDoc(docRef);

        dispatch(deleteBookById(active.id));
    };
};
