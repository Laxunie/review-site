import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {FormInput} from '../';
import {Navigate} from 'react-router-dom';
import './create.css';
import db from '../../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import {firebaseAuth, firestore} from '../../firebase'
import { UserAuth } from '../../Auth/AuthAPI';

const EMAIL_REGEX =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const Create = ({modalState}) => {
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
        },
        {
            id:2,
            name:"email",
            type:"text",
            placeholder:"Email",
        },
        {
            id:3,
            name:"password",
            type:"password",
            placeholder:"Password",
        },
        {
            id:4,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
        },
    ]

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
        console.log(values)
    }
    
    console.log(values);
    const {createUser} = UserAuth()
    return (
        <div className='app__create'>
            <div className='app__create-form'>
                <form>
                    <h1>Sign Up for a Free Account</h1>
                    {inputs.map(input => (
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                    ))}
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            // createUserWithEmailAndPassword(firebaseAuth, values.email, values.password)
                            // .then(() => {
                            //     const userRef = addDoc(collection(firestore,"users"),{
                            //         username: values.username,
                            //         email: values.email,
                            //         password: values.password,
                            //         profileImage:""
                            //     });
                            //     console.log(userRef.id)
                            // })
                            createUser("hey","hello");
                        }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Create