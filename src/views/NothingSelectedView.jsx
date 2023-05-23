import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
        >
            <Grid item xs={12}>
                <Typography color="white">Selecciona una entrada</Typography>
            </Grid>
        </Grid>
    );
};
