import { Box, Toolbar } from "@mui/material";
import { GridResults, Header } from "../components";

export const BooksLayout = ({ children }) => {
    return (
        <Box sx={{}}>
            <Header component="header" />

            <Toolbar sx={{ margin: 1 }} />

            <Box component="main" className="grid">
                <GridResults />
                {children}
            </Box>
        </Box>
    );
};
