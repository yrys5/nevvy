import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { userRequest } from "../../services/requestMethods";
import { AlertTitle, Button, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Stack } from "@mui/system";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const loggedUser = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    userRequest
      .post("/post/new", {
        title: title,
        content: content,
        user_id: loggedUser.currentUser._id,
      })
      .then((response) => {
        console.log("Post dodany pomyślnie!");
        setOpen(true);
      })
      .catch((error) => {
        console.error("Błąd podczas dodawania posta:", error);
      });
  };

  //MUI STACK ALERT

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="add-new-post">
      <h1>Dodaj swój post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tytuł:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Treść:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        {/* <button className="anp-button" type="submit">
          Dodaj post
        </button> */}
        <div className="stack">
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Button variant="outlined" type="submit">
              Dodaj nowy post
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Pomyślnie dodano post!
              </Alert>
            </Snackbar>
          </Stack>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
