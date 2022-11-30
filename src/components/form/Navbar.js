import React from 'react';
import logo from '../../assets/nevvy-logo.png';
import LogoutButtton from "../../components/ui/LogoutButtton";

const Navbar = () => {
  return (
    <section className='navbar-wrapper'>
        <div className='navbar-left'>
            <img src={logo} height="40px"></img>
        </div>
        <div className='navbar-right'>
            <LogoutButtton></LogoutButtton>
        </div>
    </section>
  )
}

export default Navbar