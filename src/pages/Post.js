import { Send } from "@mui/icons-material";
import { Avatar, Button, Grid, TextField, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../components/form/Navbar";
import LongMenuButton from "../components/ui/LongMenuButton";
import { sliderItems } from "../data/categoryGames";
import { publicRequest } from "../services/requestMethods";
import AddComment from "../components/form/AddComment";
import CommentsContainer from "../components/form/CommentsContainer";
import { convertToReadableDate } from "../services/convertToReadableDate";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Stack } from "@mui/system";
import AlertProvider from "../context/react/AlertContext";
import { AlertContext } from "../context/react/AlertContext";
import Alerts from "../components/ui/Alerts";

// function convertToReadableDate(date) {
//   let dateObject = new Date(date);
//   let hours = dateObject.getHours().toString().padStart(2, "0");
//   let minutes = dateObject.getMinutes().toString().padStart(2, "0");
//   let day = dateObject.getDate().toString().padStart(2, "0");
//   let month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
//   let year = dateObject.getFullYear();

//   return `${hours}:${minutes} ${day}.${month}.${year}`;
// }

const Post = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [post, setPost] = useState("");

  // const [openAlert, setOpenAlert] = useState(true);
  // const [severity, setSeverity] = useState("success");
  // const [alertText, setAlertText] = useState("Pomyślnie dodano post!");

  const user = useSelector((state) => state?.user.currentUser);
  const [isTextFieldActive, setIsTextFieldActive] = useState(false);

//SNACBAR
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


// const handleClose = (event, reason) => {
//   if (reason === "clickaway") {
//     return;
//   }

//   setOpenAlert(false);
// };


  //funkcja do wyciągnięcia w osobny plik
  function findTitleByDesc(arr, desc) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].desc !== "") {
        if (arr[i].desc === desc) {
          return arr[i].title;
        }
      }
    }
    return null;
  }

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await publicRequest.get("/post/find/" + id);
        setPost(res.data.post);
        console.log(res.data);
      } catch {
        console.log("error");
      }
    };
    getPost();
  }, [id]);

  return (
    <div className="home-container">
      <Helmet>
        <title>{post?.title}</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="home-main">
        <div className="home-main-left">
          <div className="post-header">
            <h2>{post?.title}</h2>
            <div className="post-owner">
            <Avatar
                sx={{ width: 26, height: 26, fontSize: "small" }}
                >
                {post?.username?.slice(0, 2).toUpperCase()}
              </Avatar>
              <p>
                  {post?.username}
                </p>
                  </div>
            <div className="post-header-desc">
              <div className="desc-left">
                <p>
                  <b>Kategoria:</b>{" "}
                  {post?.category
                    ? findTitleByDesc(sliderItems, post?.category)
                    : "Brak kategorii"}
                </p>
                <p>
                  <b>Data przesłania:</b> {convertToReadableDate(post?.date)}
                </p>
              </div>
              <div className="desc-right">
                  <LongMenuButton></LongMenuButton>
              </div>
            </div>
          </div>
          <div className="post-main">
            <p>{post?.content}</p>
          </div>
          <div className="post-comments">
            <h2>Odpowiedzi:</h2>
            <AlertProvider>
            <AddComment postId={post?._id} type="addComment"></AddComment>
            <CommentsContainer postId={post?._id}></CommentsContainer>
            <Alerts></Alerts>
            </AlertProvider>
        {/* <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: "100%" }}
              >
                {alertText}
              </Alert>
            </Snackbar>
          </Stack> */}
          </div>
        </div>
        <div className="stack">
        </div>
      </div>
    </div>
  );
};

export default Post;
