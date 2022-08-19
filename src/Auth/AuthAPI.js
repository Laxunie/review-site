import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [popupState, setPopupState] = useState(true);

  const CreateUser = async (email, password, username) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setPopupState(false);
      updateProfile(auth.currentUser, {
        photoURL:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      });
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          setEmailError("Email is invalid");
          break;
        case "auth/email-already-exists":
          setEmailError("Email already exists");
          break;
        case "auth/weak-password":
          setPasswordError("Password must contain atleast 6 charcters");
          break;
        default:
          console.log(err);
      }
    }
  };

  const SignOut = async () => {
    try {
      await signOut(auth);
      setPopupState(true);
    } catch (err) {
      console.log(err);
    }
  };

  const SignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setPopupState(false);
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setEmailError("Email or Password is incorrect");
          break;
        case "auth/wrong-password":
          setPasswordError("Email or Password is incorrect");
          break;
        //no default
      }
    }
  };

  useEffect(() => {
    setEmailError("");
    setPasswordError("");
  }, [popupState]);

  useEffect(() => {
    const AuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      AuthState();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        CreateUser,
        user,
        SignOut,
        SignIn,
        emailError,
        passwordError,
        popupState,
        setEmailError,
        setPasswordError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
