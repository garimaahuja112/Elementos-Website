import React from "react";
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom";
const Nav =() =>{
return(
    <>
        <div className="flex flex-row justify-between h-3vh " > <img className="w-24 p-1" src={logo}  />
        <div className="flex flex-row gap-x-10 mr-10 items-center "> 
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about" >
        About elementos
        </NavLink>
        <NavLink to="/" >
         Events
        </NavLink>
        </div>
        </div>

    
    </>
)
}
export default Nav;