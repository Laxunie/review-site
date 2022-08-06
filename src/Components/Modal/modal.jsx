import React, {useState} from 'react'
import {Signin, Create} from '../'
import './modal.css'

const Modal = ({modalState}) => {
    const [create, setCreate] = useState(false)
    return(
        <div className='modal'>
            <div className='modalContainer'>
                <div className='modalCloseBtn'>
                    <button onClick={() => {
                        modalState(false)
                    }}>&#10006;</button>
                </div>
                {create &&  
                    <div className='modalBackBtn'>
                        <button onClick={() => {
                            setCreate(false)
                        }}>&#129104;</button>
                    </div>
                }
                {create ?   
                    <Create modalState={modalState}/>
                :
                    <Signin createState={setCreate}/>
                } 
            </div>
        </div>
    )
}

export default Modal