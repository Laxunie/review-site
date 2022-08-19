import { updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { React, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../Auth/AuthAPI";
import "./profile.css";

const Profile = () => {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  const storage = getStorage();
  const fileRef = useRef(null);
  const { user, SignOut } = UserAuth();
  const [newEmail, setNewEmail] = useState("");
  const [newDisplayName, setNewDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const changePhoto = async (e) => {
    const storageRef = ref(storage, "profilePictures/" + user.uid + ".png");

    if (e.target.files[0]) {
      await uploadBytes(storageRef, e.target.files[0]);
      const photoURL = await getDownloadURL(storageRef, e.target.files[0]);
      updateProfile(user, { photoURL });

      setPhotoURL(photoURL);
    }
  };

  useEffect(() => {
    user?.photoURL && setPhotoURL(user.photoURL);
  }, [user, setPhotoURL]);

  return (
    <div>
      {user ? (
        <div className="profile-container">
          <div className="profile-info">
            <div className="user-details">
              <span className="flex flex-col items-center">
                <img
                  className="cursor-pointer"
                  src={photoURL}
                  alt="profile"
                  onClick={() => fileRef.current.click()}
                />
                <input
                  type="file"
                  id="file"
                  ref={fileRef}
                  style={{ display: "none" }}
                  onChange={changePhoto}
                />
              </span>
              <h1>{user.displayName}</h1>
              <span>
                <input
                  defaultValue="Temp Email"
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                    console.log(newEmail);
                  }}
                ></input>
              </span>
              <span>
                <input
                  defaultValue="Temp Display Name"
                  onChange={(e) => {
                    setNewDisplayName(e.target.value);
                  }}
                ></input>
              </span>
              <span>
                <input value="Reviews" disabled></input>
              </span>
              <span>
                <button
                  onClick={() => {
                    SignOut();
                  }}
                >
                  Sign Out
                </button>
                <button disabled={!newEmail && !newDisplayName}>Update</button>
              </span>
            </div>
          </div>
          <div className="profile-reviews">
            <h1>Past Reviews</h1>
          </div>
        </div>
      ) : (
        <Navigate replace to="/" />
      )}
    </div>
  );
};

export default Profile;
