import { useEffect, useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
;
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase.config";



export const AuthContext=createContext()


const AuthProvider = ({children}) => {
    const googoleProvider=new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const [loding,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const google=()=>{
        return signInWithPopup(auth,googoleProvider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe ()
        }
    },[])

    const authInfo={user,createUser,signIn,logOut,google,loding}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;