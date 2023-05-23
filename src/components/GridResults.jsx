import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { setActiveBook } from "../store/books/booksSlice";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(249, 246, 238, 0.7)",
    boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    noteAlign: "center",
}));

export const GridResults = () => {
    const { notes } = useSelector((state) => state.books);

    const dispatch = useDispatch();

    const handleNoteClick = (note) => {
        dispatch(setActiveBook(note));
    };

    const shortenText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                {notes.map((note) => (
                    <Grid key={note.id} item xs={12} sm={6} md={3}>
                        <Button
                            component="div"
                            fullWidth
                            sx={{ padding: 0 }}
                            variant="outlined"
                            onClick={() => handleNoteClick(note)}
                        >
                            <Item variant="outlined" sx={{ width: 1 }}>
                                <Typography
                                    content="p"
                                    sx={{
                                        marginBottom: ".5rem",
                                        fontSize: ".9rem",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    <strong>Title:</strong> {""}
                                    {shortenText(note.title, 20)}
                                </Typography>
                                <Typography
                                    content="p"
                                    sx={{
                                        marginBottom: ".5rem",
                                        fontSize: ".9rem",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    <strong>Subtitle:</strong> {""}
                                    {shortenText(note.subtitle, 20)}
                                </Typography>
                                <Typography
                                    content="p"
                                    sx={{
                                        marginBottom: ".5rem",
                                        fontSize: ".9rem",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    <strong>Author:</strong> {""}
                                    {shortenText(note.author, 20)}
                                </Typography>

                                <Typography
                                    content="p"
                                    sx={{
                                        fontSize: ".9rem",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    <strong>Description:</strong> {""}
                                    {shortenText(note.description, 45)}
                                </Typography>
                            </Item>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
