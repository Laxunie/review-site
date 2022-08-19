import {React, useState} from 'react';
import { Link } from "react-router-dom";
import { UserAuth } from '../../Auth/AuthAPI'
import Modal from '../Modal/modal';
// import './navbar.css'
import '../../css/main.css';
import {MdLogin} from 'react-icons/md';

function Navbar(){
    const [openModal, setOpenModal] = useState(false);
    const {user} = UserAuth();

    const links = [
        {
            id: 1,
            path: 'processors',
            name: 'Processors'
        },
        {
            id: 2,
            path: 'graphics-cards',
            name: 'Graphics Cards'
        },
        {
            id: 3,
            path: 'memory',
            name: 'Memory'
        },
        {
            id: 4,
            path: 'hard-drives',
            name: 'Storage'
        },
        {
            id: 5,
            path: 'cases',
            name: 'Cases'
        },
        {
            id: 6,
            path: 'power-supplies',
            name: 'Power Supplies'
        },
        {
            id: 7,
            path: 'motherboards',
            name: 'Motherboards'
        }
    ];

    return(
        <div>
        {openModal && <Modal modalState={setOpenModal}/>}
        <div className="bg-white">
            <div className='flex justify-between items-center relative px-6'>
                <div className="flex h-full items-center">
                    <h1 className='text-3xl'><Link to='/'>ReviewSite</Link></h1>
                    <div className='px-5'>
                        <h3 className='peer py-5 px-3 hover:text-turquoise w-[150px] text-black cursor-default'>Components</h3>
                            <ul className='hidden peer-hover:flex hover:flex w-full flex-col bg-white drop-shadow-lg absolute left-0 '>
                                {links.map(link => {
                                    return(
                                        <li key={link.id}><Link className='hover:text-turquoise' to={`/page/${link.path}`}>{link.name}</Link></li>
                                    )
                                })}
                            </ul>
                    </div>
                </div>
                {!user ? 
                    <div className='flex items-center cursor-pointer' onClick={() => {setOpenModal(true)}}>
                        <MdLogin size={25} className='mx-[0.5rem]'/>
                        <h3 className='text-xl'>
                            Login
                        </h3> 
                    </div>
                    : 
                    <h3 className='text-xl cursor-pointer'><Link to="/profile">Profile</Link></h3>
                }
            </div>
        </div>
        </div>
    )
}

export default Navbar;