import { createContext, useContext } from "react";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    const createUser = (email, password) => {
        console.log(email, password);
    };

    return(
        <UserContext.Provider value={{createUser}}> 
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}