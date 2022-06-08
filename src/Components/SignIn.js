import React, {useState} from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import './SignIn.css';

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
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [passwordPass, setPasswordPass] = useState(false)
    const [confirmpasswordError, setConfirmPasswordError] = useState(false)
    const [confirmpasswordPass, setConfirmPasswordPass] = useState(false)
    const [errors, setErrors] = useState([])
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
                                <div className='form-email'>
                                    <input type="text" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}></input>
                                </div>
                                <div className='form-password'>
                                    <input type="text" placeholder='Password' onChange={(e) => 
                                        {
                                            setPassword(e.target.value)
                                            
                                            if(e.target.value.length > 0 && e.target.value.length < 8){
                                                setPasswordError(true)
                                                setPasswordPass(false)
                                                setErrors("Password must be atleast 8 characters long!")
                                            }
                                            else if(e.target.value.length >= 8){
                                                setPasswordError(false)
                                                setPasswordPass(true)
                                            }
                                            else{
                                                setPasswordError(false)
                                                setPasswordPass(false)
                                            }
                                        }
                                    }></input>
                                    {passwordError && <span id='passwordError'>&#10060;<span id='passwordErrorMessage'>{errors['props']['children']}</span></span>}
                                    {passwordPass && <span id='passwordPass'>✔️</span>}
                                    
                                </div>
                                <div>
                                    <input type="text" placeholder='Confirm Password' onChange={(e) => 
                                        {
                                            setConfirmPassword(e.target.value)
                                            if(e.target.value != password){
                                                setConfirmPasswordError(true)
                                                setConfirmPasswordPass(false)
                                            }
                                            if (e.target.value == password){
                                                setConfirmPasswordError(false)
                                                setConfirmPasswordPass(true)
                                            }
                                            if(e.target.value.length == 0){
                                                setConfirmPasswordError(false)
                                                setConfirmPasswordPass(false)
                                            }
                                            
                                        }
                                    }></input>
                                    {confirmpasswordError && <span id='confirmError'>&#10060;</span>}
                                    {confirmpasswordPass && <span id='confirmPass'>✔️</span>}
                                </div>
                            </div>
                            <button onClick={() => {
                                    if(confirmPassword != password){
                                        return
                                    }
                                    if(confirmpasswordError || passwordError){
                                        return
                                    }
                                    CreateAccount(email, password, closeModal())
                                }}>Create</button>
                        </div>
                :
                <div className='signUpContainer'>
                    <div className='signUpInfo'>
                        <h2>Sign In</h2>
                    </div>
                    <div className='form'>
                        <div>
                            <div>
                                <input type="text" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}></input>
                            </div>
                            <div>
                                <input type="text" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}></input>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => {
                                SignIn(email, password, closeModal())
                            }}>Sign In</button>
                    <div className='createActBtn'>
                        <button onClick={() => {setCreate(true)}}>Create Account</button>
                    </div>
                </div>} 
            </div>
        </div>
    )
}

function SignIn(email, password, closeModal){
    signInWithEmailAndPassword(auth, email, password)
    closeModal(false)
}

function CreateAccount(email, password, closeModal){
    createUserWithEmailAndPassword(auth, email, password)
    .then(response => {console.log(response)})
    .catch(error => {
        if(error.message){
            return
        }
    })
}

export default Modal