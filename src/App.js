import React, { useEffect, useState } from "react";
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from "./Components/SignIn";

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

  useEffect(() => {
    document.title = "Home Page"
  }, [])

  const [openModal, setOpenModal] = useState(false)
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <div>
        {openModal && <SignIn closeModal={setOpenModal}/>}
        <div className="navbar">
          <header className="navbar-header">
            <h1>ReviewSite</h1>
            {!user ? <h3 onClick={() => {
              setOpenModal(true)
            }}>Login</h3> : <h3 onClick={() => auth.signOut()}>Logout</h3>}
          </header>
        </div>
        <div className="container">
          <h1>HEYY</h1>
        </div>
      </div>
    </div>
  );
}




export default App;
