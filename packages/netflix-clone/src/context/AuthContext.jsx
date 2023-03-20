import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
        } from 'firebase/auth'
const AuthContext = createContext()

export const AuthContextProvider=({children})=>{

    const [user, setUser] = useState({})

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn= (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut= ()=>{
        return signOut(auth)
    }
    useEffect(() => {
      const unSuscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
      })
    
      return () => {
        unSuscribe()
      }
    }, [])
    
    return(
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}