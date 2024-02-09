import "./index.css"
import About from './components/About';
import { Routes , Route } from 'react-router-dom';
import React from "react";
import Nav from "./components/Nav";
import Lbody from "./components/Lbody";
import Events from './components/Events';

function App() {
  return (
    <div className="font-bold bg-black text-white scroll-smooth">
    <Nav />
    <Lbody />
   
   <Events />
    </div>

     

  )
}
export default App;
