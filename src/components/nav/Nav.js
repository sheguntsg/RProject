import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <NavLink to='/' className={({isActive})=>(isActive?'Active':'De')}><li>Home</li></NavLink> 
        <NavLink to='/About' className={({isActive})=>(isActive?'Active':'De')}><li>About</li></NavLink> 
        <NavLink to='/SignIn' className={({isActive})=>(isActive?'Active':'De')}><li>SignIn</li></NavLink> 
        <NavLink to='/Register' className={({isActive})=>(isActive?'Active':'De')}><li>Register</li></NavLink> 
        <NavLink to='/Comment' className={({isActive})=>(isActive?'Active':'De')}><li>Comments</li></NavLink> 


    </nav>
  );
}

export default Nav;
