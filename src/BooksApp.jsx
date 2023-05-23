import { IconButton } from "@mui/material";
import { BooksLayout } from "./layout/BooksLayout";
import { BookView } from "./views/BookView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./firebase/config";
import { login } from "./store/auth";
import { startNewBook } from "./store/books";
import { CheckingAuth } from "./components";
import { useCheckAuth } from "./hooks/useCheckAuth";

export const BooksApp = () => {
    const status = useCheckAuth();

    const dispatch = useDispatch();

    const { isSaving, active } = useSelector((state) => state.books);

    useEffect(() => {
        signInWithEmailAndPassword(FirebaseAuth, "paco@paco.es", "123456")
            .then(() => {
                const { uid, email } = FirebaseAuth.currentUser;
                dispatch(login({ uid, email }));
            })
            .catch((error) => {
                console.log("Error al registrar usuario :", error);
            });
    }, [dispatch]);

    const onClickNewBook = () => {
        dispatch(startNewBook());
    };

    if (status === "checking") {
        return <CheckingAuth />;
    }

    return (
        <BooksLayout>
            {/* <NothingSelectedView /> */}

            {!!active && <BookView />}

            <IconButton
                onClick={onClickNewBook}
                disabled={isSaving}
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    ":hover": { backgroundColor: "error.main", opacity: 0.5 },
                    position: "fixed",
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </BooksLayout>
    );
};
