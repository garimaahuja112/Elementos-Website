import "./index.css"
import About from './components/About';
import React from "react";

import Lbody from "./components/Lbody";
import Events from './components/Events';
import Register from "./components/Register";
import Bottom from "./components/Bottom";

import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Caraousel from "./components/Carousel";




function App() {
  return (
    
      
    <div className="font-bold bg-black text-white scroll-smooth">
   
  <Navbar/>
  <Hero/>
    <Lbody />
    <About/>
   <Caraousel/>
   <Register/>
   <Faq/>
   <Bottom/>
   
   
   
   
  
   </div>
    
   
  )
}
export default App;
