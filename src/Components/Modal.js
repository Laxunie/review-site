import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

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

function Modal({closeModal}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className='modal'>
            <div className='modalContainer'>
                <div className='modalCloseBtn'>
                    <button onClick={() => {
                        closeModal(false)
                    }}>&#10006;</button>
                </div>
                <div>
                    <input type="text" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}></input>
                    <input type="text" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}></input>
                    <button onClick={() => {
                        CreateAccount(email, password)
                        closeModal(false)
                    }}>submit</button>
                </div>
                
            </div>
        </div>
    )
}

function CreateAccount(email, password){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}

export default Modal