
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()
export const useAuth = (e)=>{
    return useContext(AuthContext)
}
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState()
    
    const signup = (email, password)=>{
        return auth.createUserWithEmailAndPassword(email,password)
    }
    const login = (email, password)=>{
        return auth.signInWithEmailAndPassword(email,password)
    }
    const logout = ()=>{
        return auth.signOut
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
    const data = {
        currentUser,
        signup,
        login,
        logout,
    }    
    return (
        <AuthContext.Provider value={data}>
             {!loading && children}
        </AuthContext.Provider>
    )
}
export { AuthProvider }

export default AuthContext