import React from "react";
import logo from "../images/logo.png"

const Nav =() =>{
   
return(
    <>
        <div className="flex flex-row justify-between h-3vh " > <img className="w-24 p-1" src={logo} alt=""  />
        <div className="flex flex-row gap-x-10 mr-10 items-center "> 
        
        <a href="#about" >
        <div className="text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" style={{fontFamily:'coiny'}}>
         About 
         </div>
         </a>
        <a href="#Events" >
        <div className="text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "  style={{fontFamily:'coiny'}}>
         Events
         </div>
         </a>
        </div>
        </div>
    </>
)
}
export default Nav;