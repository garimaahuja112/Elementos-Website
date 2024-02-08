import React from "react";
import logo from "../images/logo.png"
const Nav =() =>{
return(
    <>
        <div className="flex flex-row justify-between h-3vh " > <img className="w-24 p-1" src={logo}  />
        <div className="flex flex-row gap-x-10 mr-10 items-center "> 
        <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        About elementos
        </button>
        <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
         Events
        </button>
        </div>
        </div>

    
    </>
)
}
export default Nav;