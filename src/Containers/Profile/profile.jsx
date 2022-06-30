import { React, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import testImage from '../../Assets/Images/test.jpg';
import { auth } from '../../firebase';
import './profile.css';

function Profile(){
    useEffect(() => {
      document.title = "Profile"
    }, [])
    const [user] = useAuthState(auth)
    const [newEmail, setNewEmail] = useState("")
    const [newDisplayName, setNewDisplayName] = useState("")
    return(
      <div>
        {user ? 
        <div className="profile-container">
          <div className="profile-info">
            <div className="user-details">
              <span>
                <img src={testImage} alt="test"/>
              </span>
              <span>
                <input defaultValue='Temp Email' onChange={(e) => {
                  setNewEmail(e.target.value)
                  console.log(newEmail)
                }}></input>
              </span>
              <span>
                <input defaultValue='Temp Display Name' onChange={(e) => {
                  setNewDisplayName(e.target.value)
                }}></input>
              </span>
              <span>
                <input value='Reviews' disabled></input>
              </span>
              <span>
                <button onClick={() => {
                  auth.signOut();
                }}>Sign Out</button>
                <button disabled={!newEmail && !newDisplayName}>Update</button>
              </span>
            </div>
          </div>
          <div className="profile-reviews">
                <h1>Past Reviews</h1>
          </div>
        </div>
        : <Navigate replace to='/'/> 
        }
      </div>
    )
}

export default Profile;