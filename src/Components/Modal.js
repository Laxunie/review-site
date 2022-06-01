import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Modal({closeModal}){
    return(
        <div className='modal'>
            <div className='modalContainer'>
                <div className='modalCloseBtn'>
                    <button onClick={() => {
                        closeModal(false)
                    }}>&#10006;</button>
                </div>
                <form>
                    <input type="text" placeholder='Email'></input>
                </form>
            </div>
        </div>
    )
}

export default Modal