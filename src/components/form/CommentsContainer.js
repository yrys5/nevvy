import {
  ThumbUpOffAlt,
  ThumbDownOffAlt,
  ArrowDropDown,
} from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { AlertContext } from "../../context/react/AlertContext";
import { convertToReadableDate } from "../../services/convertToReadableDate";
import { publicRequest } from "../../services/requestMethods";
import AddComment from "../form/AddComment";

const AddReply = (props) => {
  const [openReplyAdd, setOpenReplyAdd] = useState(false);
  return (
    <div className="add-reply">
      <Button
        onClick={() => setOpenReplyAdd(!openReplyAdd)}
        size="small"
        sx={{ fontSize: "12px", height: "32px" }}
      >
        Odpowiedz
      </Button>

      {openReplyAdd && <AddComment type="addReply" commentId={props.comment?._id}></AddComment>}
    </div>
  );
};

const ShowReplies = (props) => {
  const [replies, setReplies] = useState("");
  const [showReplies, setShowReplies] = useState(false);
  //   function handleClick() {}

  console.log(replies);

  useEffect(() => {
    const getReplies = async () => {
      try {
        const res = await publicRequest.get(
          "/comment/replies/" + props?.commentId
        );
        setReplies(res.data);
      } catch (err) {
        console.log("Problem z odpowiedzi do komentarza");
      }
    };
    getReplies();
  }, [setReplies]);

  return (
    <div className="comment-replies">
      {props?.replies?.length > 0 ? (
        <>
          <Button
            size="small"
            sx={{ fontSize: "12px", height: "22px" }}
            onClick={() => {
              setShowReplies(!showReplies);
            }}
            // onClick={() => handleClick()}
          >
            <ArrowDropDown></ArrowDropDown>
            {props?.replies?.length} odpowiedzi
          </Button>
          {showReplies && (
            <CommentsDisplay comments={replies}></CommentsDisplay>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const CommentsDisplay = ({ comments }) => {
  const { inputProps } = useContext(AlertContext);
  console.log(comments);
  return (
    <div className="comments-display">
      {Array.from(comments).map((comment) => (
        <div className="comment-container" key={comment?._id}>
          <div className="comment-content">
            <div className="comment-left">
              <Avatar sx={{ width: 26, height: 26, fontSize: "small" }}>
                {comment?.user_id?.username.slice(0, 2).toUpperCase()}
              </Avatar>
            </div>
            <div className="comment-right">
              <div className="username-date">
                <h4 className="username">{comment?.user_id?.username}</h4>
                <span className="comment-date">
                  {convertToReadableDate(comment?.date)}
                </span>
              </div>
              <p class="comment-content">{comment?.content}</p>
            </div>
          </div>
          <div class="comment-footer">
            <IconButton
              size="small"
              sx={{ fontSize: "12px", height: "32px", width: "32px" }}
            >
              <ThumbUpOffAlt sx={{ height: "18px" }}></ThumbUpOffAlt>
            </IconButton>
            <IconButton
              size="small"
              sx={{ fontSize: "12px", height: "32px", width: "32px" }}
            >
              <ThumbDownOffAlt sx={{ height: "18px" }}></ThumbDownOffAlt>
            </IconButton>
            {/* <Button onClick={() => setXs(!xs)} size="small" sx={{ fontSize: "12px", height: "32px" }}>
              Odpowiedz
            </Button>
            {xs &&<AddComment type="addReply" commentId={comment?._id}></AddComment>} */}
            <AddReply comment={comment}></AddReply>
          </div>
          <ShowReplies
            replies={comment?.replies}
            commentId={comment?._id}
          ></ShowReplies>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await publicRequest.get("/comment/comments/" + postId);
        setComments(res.data);
      } catch (err) {
        console.log("Problem z wczytaniem komentarzy");
      }
    };
    getComments();
  }, [postId]);

  return <CommentsDisplay comments={comments} />;
};

export default CommentsContainer;
