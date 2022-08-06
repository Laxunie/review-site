import {React, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Modal from '../Modal/modal';
import './navbar.css'

const auth = getAuth();

function Navbar(){
    const [openModal, setOpenModal] = useState(false)
    const [user] = useAuthState(auth)
    return(
        <div>
        {openModal && <Modal modalState={setOpenModal}/>}
        <div className="navbar">
            <header className="navbar-header">
            <h1><Link to='/ '>ReviewSite</Link></h1>
            <span className="components-list">
                <h3>Components</h3>
                <ul>
                <li>
                    <Link to='page/processors'>Processors</Link>
                </li>
                <li>
                    <Link to='/page/graphics-cards'>Graphics Cards</Link>
                </li>
                <li>
                    <Link to='/page/memory'>Memory</Link>
                </li>
                <li>
                    <Link to='/page/storage'>Storage</Link>
                </li>
                <li>
                    <Link to='/page/cases'>Cases</Link>
                </li>
                <li>
                    <Link to='/page/power-supplies'>Power Supplies</Link>
                </li>
                <li>
                    <Link to='/page/motherboards'>Motherboards</Link>
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