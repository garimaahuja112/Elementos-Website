import "./index.css"
import About from './components/About';
import React from "react";
import Nav from "./components/Nav";
import Lbody from "./components/Lbody";
import Events from './components/Events';
import Register from "./components/Register";
import Bottom from "./components/Bottom";



function App() {
  return (
    
      
    <div className="font-bold bg-black text-white scroll-smooth">
    <Nav />
    <Lbody />
    <About/>
   <Events />
   <Register/>
   <Bottom/>
   </div>
    
   
  )
}
export default App;
