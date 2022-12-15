import React from 'react';
import logo from '../../assets/nevvy-logo.png';
import LogoutButtton from "../../components/ui/LogoutButtton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <section className='navbar-wrapper'>
        <div className='navbar-left'>
            <Link to={"/"}><img src={logo} height="40px"></img></Link>
        </div>
        <div className='navbar-right'>
          <Link to={"/user-account"} style={{textDecoration: "none", color: "white", height: "24px"}}><AccountCircleIcon></AccountCircleIcon></Link>
            <LogoutButtton></LogoutButtton>
        </div>
    </section>
  )
}

export default Navbar