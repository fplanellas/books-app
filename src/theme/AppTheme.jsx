import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { shadesGrayTheme } from "./";

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={shadesGrayTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
