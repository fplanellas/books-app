import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { FirebaseAuth } from "../firebase/config";
import { login } from "../store/auth";
import { startLoadingBooks } from "../store/books";

export const useCheckAuth = () => {
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            const { uid, email } = user;
            dispatch(login({ uid, email }));
            dispatch(startLoadingBooks());
        });
    }, []);

    return status;
};
