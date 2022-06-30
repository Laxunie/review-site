import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import {Cases, GPU, HDD, Home, Memory, MOBO, Processors, PSU, Profile} from './Containers'
import {Navbar, Signin} from './Components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path='profile' element={<Profile/>}/>
          <Route path='processors' element={<Processors/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
