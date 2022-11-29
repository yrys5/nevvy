import React from "react";
import { logout } from "../../context/redux/apiCalls";
import { useDispatch } from "react-redux";

const LogoutButtton = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
  };
  return <button onClick={handleClick}>Wyloguj</button>;
};

export default LogoutButtton;
