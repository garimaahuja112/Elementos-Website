import About from './components/About';
import './App.css';
import { Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="font-bold bg-black text-white">
     navbar 
     <Routes>
              <Route path="/about" element={<About/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
