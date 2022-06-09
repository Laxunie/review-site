import React, { useEffect, useState } from "react";
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { Routes, Route, BrowserRouter, Link, Navigate} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from "./Components/SignIn";
import testImage from "./Images/test.jpg"

const firebaseConfig = {
  apiKey: "AIzaSyBKfCFv09jlvKqZKQm-rqsbAxmIlGGgFVY",
  authDomain: "review-site-46882.firebaseapp.com",
  projectId: "review-site-46882",
  storageBucket: "review-site-46882.appspot.com",
  messagingSenderId: "661246888343",
  appId: "1:661246888343:web:e0bc65665b3fea5ad41cd2",
  measurementId: "G-JRXJK04QPF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path='profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  useEffect(() => {
    document.title = "Home Page"
  }, [])

  return(
    <div className="container">
      <h1>HEYY</h1>
    </div>
  )
}

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  const [user] = useAuthState(auth)
  return(
    <div>
      {openModal && <SignIn closeModal={setOpenModal}/>}
      <div className="navbar">
        <header className="navbar-header">
          <h1><Link to='/ '>ReviewSite</Link></h1>
          <span className="components-list">
            <h3>Components</h3>
            <ul>
              <li>
                <Link to='processors'>Processors</Link>
              </li>
              <li>
                <Link to='graphics-cards'>Graphics Cards</Link>
              </li>
              <li>
                <Link to='memory'>Memory</Link>
              </li>
              <li>
                <Link to='storage'>Storage</Link>
              </li>
              <li>
                <Link to='cases'>Cases</Link>
              </li>
              <li>
                <Link to='power-supplies'>Power Supplies</Link>
              </li>
              <li>
                <Link to='motherboards'>Motherboards</Link>
              </li>
            </ul>
          </span>
          
          
          {!user ? <h3 onClick={() => {
            setOpenModal(true)
          }}>Login</h3> : <h3><Link to="profile">Profile</Link></h3>}
        </header>
      </div>
    </div>
  )

}

const Profile = () => {
  useEffect(() => {
    document.title = "Profile"
  }, [])
  const [user] = useAuthState(auth)
  const [newEmail, setNewEmail] = useState("")
  const [newDisplayName, setNewDisplayName] = useState("")
  return(
    <div>
      {!user ? <Navigate replace to='/'/> 
      :
        <div className="profile-container">
          <div className="profile-info">
            <div className="user-details">
              <span>
                <img src={testImage} alt="test"/>
              </span>
              <span>
                <input defaultValue='Temp Email' onChange={(e) => {
                  setNewEmail(e.target.value)
                  console.log(newEmail)
                }}></input>
              </span>
              <span>
                <input defaultValue='Temp Display Name' onChange={(e) => {
                  setNewDisplayName(e.target.value)
                }}></input>
              </span>
              <span>
                <input value='Reviews' disabled></input>
              </span>
              <span>
                <button onClick={() => {
                  auth.signOut()
                }}>Sign Out</button>
                <button disabled={!newEmail && !newDisplayName}>Update</button>
              </span>
            </div>
          </div>
          <div className="profile-reviews">
                <h1>Past Reviews</h1>
          </div>
        </div>
        }
    </div>
  )
}


export default App;
