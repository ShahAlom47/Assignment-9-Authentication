import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import PropTypes from 'prop-types'; // ES6


export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true)
    const [user, setUser] = useState(12345);

    const userRegister=(email,password)=>{

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin=(email,password)=>{

        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogOut=()=>{
        return signOut(auth)
    }

    const updateUserProfile=(ProfileUrl)=>{
       return updateProfile(auth.currentUser, {photoURL: ProfileUrl })

    }
    const updateUserName=()=>{


    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unSubscribe
    }, [])


    const AuthInfo={user,userLogin, userRegister, userLogOut, updateUserProfile,updateUserName}


    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.prototype={

    children: PropTypes.node.isRequired
}