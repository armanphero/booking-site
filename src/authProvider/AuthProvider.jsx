import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import toast from 'react-hot-toast';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    const updateUsersProfile = (user, displayName) => {
        return updateProfile(user, {displayName: displayName})
    }
    const verifyUsersEmail = (user) => {
        toast('Please verify your email');
        return sendEmailVerification(user)
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const userInfo = {
        createuser,
        updateUsersProfile,
        verifyUsersEmail,
        forgetPassword,
        loginUser,
        signOutUser,
        setUser,
        user

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            console.log(user);
        })

        return () => unsubscribe();

    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;