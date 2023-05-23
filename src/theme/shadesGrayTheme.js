import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const shadesGrayTheme = createTheme({
    palette: {
        primary: {
            main: "#36454F",
        },
        secondary: {
            main: "#543884",
        },
        error: {
            main: red.A400,
        },
    },
});
