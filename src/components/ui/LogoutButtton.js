import React, { useState } from "react";
import { logout } from "../../context/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LogoutButtton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [logoutState, setLogoutState] = useState(user?.currentUser !== null ? "Wyloguj" : "Zaloguj się");
  const [logoutState2, setLogoutState2] = useState(user?.currentUser !== null ? "/" : "/login");

  const handleClick = (e) => {
    if(user?.currentUser !== null){
      e.preventDefault();
      logout(dispatch);
      setLogoutState("Zaloguj się")
      setLogoutState2("/login")
    }else{
      setLogoutState("Wyloguj")
      setLogoutState2("/")
    }
  };

  return(
    <>
    <button onClick={handleClick}><Link style={{textDecoration: "none", color: "#ffffff"}} to={logoutState2}>{logoutState}</Link></button>
    </>
  ) 
};

export default LogoutButtton;
