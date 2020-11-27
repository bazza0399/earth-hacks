import React from "react";
import logo from '../img/logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = ()=>{
  


    return (
        <React.Fragment>
         
           

          <header className="header-section">
  <a href="index.html" className="site-logo">
    <img src={logo} alt />
  </a>
  <nav className="header-nav">
    <ul className="main-menu">
      <li><Link to="/" className="navBarLink"style={{ textDecoration: 'none' }}>home</Link></li>
      
      <li><Link to="/login" className="navBarLink"style={{ textDecoration: 'none' }}>logIn</Link></li>
      <li><Link to="/signup" className="navBarLink"style={{ textDecoration: 'none' }}>SignUp</Link></li>
    </ul>
  </nav>
</header>




        </React.Fragment>


        
      );
}

export default NavBar;