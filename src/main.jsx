import React from "react";
import ReactDOM from "react-dom/client";
import { BooksApp } from "./BooksApp";
import "./styles.css";
import { AppTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppTheme>
                <BooksApp />
            </AppTheme>
        </Provider>
    </React.StrictMode>
);
