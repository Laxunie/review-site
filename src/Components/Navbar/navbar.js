import {React, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Signin } from '../';
import './navbar.css'

const auth = getAuth();

function Navbar(){
    const [openModal, setOpenModal] = useState(false)
    const [user] = useAuthState(auth)
    return(
        <div>
        {openModal && <Signin closeModal={setOpenModal}/>}
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

export default Navbar;