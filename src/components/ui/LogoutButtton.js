import React, { useState } from "react";
import { logout } from "../../context/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

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
    {/* <button onClick={handleClick}><Link style={{textDecoration: "none", color: "#ffffff"}} to={logoutState2}>{logoutState}</Link></button> */}
    <Button variant="outlined" startIcon={<LogoutIcon />} onClick={handleClick}><Link style={{textDecoration: "none"}} to={logoutState2}>{logoutState}</Link></Button>
    </>
  ) 
};

export default LogoutButtton;
