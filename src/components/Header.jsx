import { AppBar, Typography } from "@mui/material";

export const Header = () => {
    return (
        <AppBar position="fixed">
            <Typography variant="h1" sx={{ p: 1.5, fontSize: "3rem" }}>
                Books App
            </Typography>
        </AppBar>
    );
};
