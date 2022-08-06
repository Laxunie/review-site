import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './SignIn.css';

const auth = getAuth();

const SignIn = ({createState}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function SignIn(email, password){
        signInWithEmailAndPassword(auth, email, password)
    }
    
    return (
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
            <div className='buttons'>
                <button 
                    onClick={() => {
                        SignIn(email, password)
                    }}>
                    Sign In
                </button>
                <button onClick={() => {createState(true)}}>Create Account</button>
            </div>
        </div>
    )
}

export default SignIn