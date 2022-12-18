import React from "react";
import logo from "../../assets/nevvy-logo.png";
import LogoutButtton from "../../components/ui/LogoutButtton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state?.user.currentUser);
  return (
    <section className="navbar-wrapper">
      <div className="navbar-left">
        <Link to={"/"}>
          <img src={logo} height="40px"></img>
        </Link>
      </div>
      <div className="navbar-right">
        <Link
          to={"/add-new"}
          style={{ textDecoration: "none", color: "white", height: "24px" }}
        >
          <PostAddIcon></PostAddIcon>
        </Link>
        {/* <Link to={"/user-account"} style={{textDecoration: "none", color: "white", height: "24px"}}><AccountCircleIcon></AccountCircleIcon></Link> */}
        <Link
          to={"/user-account"}
          style={{ textDecoration: "none", color: "white", height: "24px" }}
        >
          <Avatar sx={{ width: 24, height: 24 , fontSize: "small"}} >{user?.username.slice(0, 2).toUpperCase()}</Avatar>
        </Link>
        <LogoutButtton></LogoutButtton>
      </div>
    </section>
  );
};

export default Navbar;
