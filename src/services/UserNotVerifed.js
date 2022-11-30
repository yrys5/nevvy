import { logout } from "../context/redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React from "react";

const CheckUser = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (user?.currentUser?.isVerified === false) {
    logout(dispatch);
  } else {
    console.log("UNV ELSE");
  }

  return;
};

const UserNotVerifed = () => {
  return (
    <div>
      <CheckUser></CheckUser>
    </div>
  );
};

export default UserNotVerifed;
