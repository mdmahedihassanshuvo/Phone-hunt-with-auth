import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../components/firebase.config';

export const AuthProvider = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (createUser)=>{
            setUser(createUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const userInfo = {
        auth,
        user,
        loading,
        createUser,
        signIn,
        logOut,
        loginWithGoogle
    }

    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default UserProvider;