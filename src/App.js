import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import {Cases, GPU, HDD, Home, Memory, MOBO, Processors, PSU, Profile} from './Containers'
import {Navbar, ProtectedRoutes} from './Components'
import { AuthContextProvider } from './Auth/AuthAPI';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar/>
          <Routes> 
            <Route path="/" element={<Home/>}/> 
            <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/>
            <Route path='/page/processors' element={<Processors/>}/>
            <Route path='/page/cases' element={<Cases/>}/>
            <Route path='/page/graphics-cards' element={<GPU/>}/>
            <Route path='/page/hard-drives' element={<HDD/>}/>
            <Route path='/page/memory' element={<Memory/>}/>
            <Route path='/page/motherboards' element={<MOBO/>}/>
            <Route path='/page/power-supplies' element={<PSU/>}/>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
