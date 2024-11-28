import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      {/* <a href="/">
        <li>Home</li>
      </a>
      <a href="/about">
        <li>About us</li>
      </a>
      <a href="/login">
        <li>Login</li>
      </a> */}
      {/* if you use anchor tag "<a href=""> your page is reload again and again so you can use <Link to="url"> tag in react-router-don */}

      
      {/* <Link to="/"> <li>Home</li> </Link>
      <Link  to="/about"><li>About us</li></Link>
      <Link  to="/login"><li>Login</li></Link> */}

      <NavLink to="/"> <li className={(e)=>{e.isActive&&"bg-red"}}>Home</li> </NavLink>
      <NavLink to="/about"><li className={(e)=>{e.isActive&&"bg-red"}}>About us</li></NavLink>
      <NavLink to="/login"><li className={(e)=>{e.isActive&&"bg-red"}}>Login</li></NavLink>

    </div>
  );
};

export default Navbar;
