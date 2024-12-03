import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null)
     
     console.log(user);

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
     
    const logOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false);
        } )

        return ()=>{
             unsubscribe()
        }
    },[])

   const authInfo = {
       signUpUser,
       loginUser,
       logOutUser,
       user
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;