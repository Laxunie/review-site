import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import {Cases, GPU, HDD, Home, Memory, MOBO, Processors, PSU, Profile} from './Containers'
import {Navbar, ProtectedRoutes, Signin} from './Components'
import { AuthContextProvider } from './Auth/AuthAPI';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar/>
          <Routes> 
            <Route path="/" element={<Home/>}/> 
            <Route path='/page/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/>
            <Route path='/page/processors' element={<ProtectedRoutes><Processors/></ProtectedRoutes>}/>
            <Route path='/page/cases' element={<ProtectedRoutes><Cases/></ProtectedRoutes>}/>
            <Route path='/page/graphics-cards' element={<ProtectedRoutes><GPU/></ProtectedRoutes>}/>
            <Route path='/page/hard-drives' element={<ProtectedRoutes><HDD/></ProtectedRoutes>}/>
            <Route path='/page/memory' element={<ProtectedRoutes><Memory/></ProtectedRoutes>}/>
            <Route path='/page/motherboards' element={<ProtectedRoutes><MOBO/></ProtectedRoutes>}/>
            <Route path='/page/power-supply' element={<ProtectedRoutes><PSU/></ProtectedRoutes>}/>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
