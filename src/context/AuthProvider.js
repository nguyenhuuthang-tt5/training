import React, { useState, createContext, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()
export default function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const auth = getAuth()
    const navigate = useNavigate()
    useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((userAuth) => {
            if(userAuth?.uid) {
                setUser(userAuth)
                // console.log(userAuth, user);
                return
            }
            setUser({})
            console.log(userAuth, user);
            navigate('/login')
            // setTimeout(navigate, 0, '/login', { replace: true });
        })
        return(() => {
            unsubcribed()
        })
    }, [auth])

    return (
        <AuthContext.Provider value={{user , setUser}}>{children}</AuthContext.Provider>
    )
}
