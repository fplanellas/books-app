import { DeleteOutline, ExitToAppOutlined, SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    exitBookById,
    setActiveBook,
    startDeletingBook,
    startSaveBook,
} from "../store/books";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const BookView = () => {
    const dispatch = useDispatch();
    const { active, messageSaved, isSaving } = useSelector((state) => state.books);
    const {
        isbn,
        title,
        subtitle,
        author,
        published,
        publisher,
        pages,
        description,
        website,
        category,
        onInputChange,
        formState,
    } = useForm(active);

    useEffect(() => {
        dispatch(setActiveBook(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire("Book updated", messageSaved, "success");
        }
    }, [messageSaved]);

    const onSaveBook = () => {
        dispatch(startSaveBook());
    };

    const onDelete = () => {
        dispatch(startDeletingBook());
    };

    const onExit = () => {
        dispatch(exitBookById());
    };

    return (
        <Grid
            container
            direcction="row"
            justifyContent="space-between"
            sx={{ mb: 1 }}
            component="article"
            className="article"
        >
            <Grid item>
                <Typography fontSize={39} fontWeight={light}>
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    color="primary"
                    sx={{ padding: 2 }}
                    onClick={() => onSaveBook()}
                    disabled={isSaving}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
                <Button onClick={onDelete} sx={{ padding: 2 }} color="error">
                    <DeleteOutline sx={{ fontSize: 30, mr: 1 }} />
                    Delete
                </Button>
                <Button onClick={onExit} sx={{ padding: 2 }} color="primary">
                    <ExitToAppOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Exit
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Isbn"
                    placeholder="Isbn"
                    sx={{ border: "none", mb: 1 }}
                    name="isbn"
                    value={isbn}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Title"
                    placeholder="Title"
                    sx={{ border: "none", mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Subtitle"
                    placeholder="Subtitle"
                    sx={{ border: "none", mb: 1 }}
                    name="subtitle"
                    value={subtitle}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Author"
                    placeholder="Author"
                    sx={{ border: "none", mb: 1 }}
                    name="author"
                    value={author}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Published"
                    placeholder="Published"
                    sx={{ border: "none", mb: 1 }}
                    name="published"
                    value={published}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Publisher"
                    placeholder="Publisher"
                    sx={{ border: "none", mb: 1 }}
                    name="publisher"
                    value={publisher}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Pages"
                    placeholder="Pages"
                    sx={{ border: "none", mb: 1 }}
                    name="pages"
                    value={pages}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Website"
                    placeholder="Website"
                    sx={{ border: "none", mb: 1 }}
                    name="website"
                    value={website}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Category"
                    placeholder="Category"
                    sx={{ border: "none", mb: 1 }}
                    name="category"
                    value={category}
                    onChange={onInputChange}
                />

                <TextField
                    label="Description"
                    placeholder="Description"
                    fullWidth
                    multiline
                    minRows={4}
                    variant="filled"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />
            </Grid>
        </Grid>
    );
};
