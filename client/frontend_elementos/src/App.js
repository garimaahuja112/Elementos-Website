
import About from './components/About';
import { Routes , Route } from 'react-router-dom';
import React from "react";
import Nav from "./components/Nav";
import Lbody from "./components/Lbody";
function App() {
  return (
    <div className="font-bold bg-black text-white">
     <Nav />
    <Routes>
              <Route path="/" element={<Lbody/>}></Route>
              <Route path="/about" element={<About/>}></Route>

     </Routes>
    </div>

     

  )
}
export default App;
