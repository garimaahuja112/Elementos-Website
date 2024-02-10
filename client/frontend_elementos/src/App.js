
import About from './components/About';
import { Routes , Route } from 'react-router-dom';
import React from "react";
import Nav from "./components/Nav";
import Lbody from "./components/Lbody";
function App() {
  return (
    <>
     <div className="font-bold bg-black text-white">
     <Nav />
    <Routes>
              <Route path="/" element={<Lbody/>}></Route>

     </Routes>
    
    </div>
    <div className="bg-black h-[1200px] ">
      <About/>
    </div>
   
    </>
   

     

  )
}
export default App;
