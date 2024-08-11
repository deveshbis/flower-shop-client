import { createContext } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({children}) => {

    //create user
    const createUser = (email, password) =>{
        // createUserWithEmailAndPassword(auth, email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const allValue = {
        createUser,
    }
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;