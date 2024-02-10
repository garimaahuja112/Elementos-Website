import "./index.css"
import About from './components/About';
import React from "react";
import Nav from "./components/Nav";
import Lbody from "./components/Lbody";
import Events from './components/Events';
import Register from "./components/Register";
function App() {
  return (
    <>
      
    <div className="font-bold bg-black text-white scroll-smooth">
    <Nav />
    <Lbody />
    <div className="bg-black h-[1000px]">
      <About/>
      
    </div>

   <div className="flex flex-col">

   <Events />
   <Register/>
   
   </div>
  
  
    </div>
    
   
    </>
   
  )
}
export default App;
