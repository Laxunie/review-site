import React, {useState} from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
    const [create, setCreate] = useState(false)
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
                {create &&  <div className='modalBackBtn'>
                                <button onClick={() => {
                                    setCreate(false)
                                }}>&#129104;</button>
                            </div>}
                {create ?   
                        <div className='signUpContainer'>
                            <div className='signUpInfo'>
                                <h2>Create Account</h2>
                            </div>
                            <div className='form'>
                                <input type="text" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}></input>
                                <input type="text" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}></input>
                                <button onClick={() => {
                                    CreateAccount(email, password)
                                    closeModal(false)
                                }}>Create</button>
                            </div>
                        </div>
                :
                <div className='signUpContainer'>
                    <div className='signUpInfo'>
                        <h2>Sign In</h2>
                    </div>
                    <div className='form'>
                        <div>
                            <input type="text" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}></input>
                            <input type="text" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}></input>
                            <button onClick={() => {
                                SignIn(email, password)
                                closeModal(false)
                            }}>Sign In</button>
                        </div>
                        <div className='createActBtn'>
                            <button onClick={() => {setCreate(true)}}>Create Account</button>
                        </div>
                    </div>
                </div>} 
            </div>
        </div>
    )
}

function SignIn(email, password){
    signInWithEmailAndPassword(auth, email, password)
}

function CreateAccount(email, password){
    createUserWithEmailAndPassword(auth, email, password)
}

export default Modal