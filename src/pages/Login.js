import React, { useContext, useEffect } from 'react'
import customTransition from '../scripts/TransitionPage'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const auth = getAuth()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClick = async () => {
        const provider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, provider)
        console.log(res);
    }

    useEffect(() => {
        console.log('mounted', user);
        if(user?.uid) {
            navigate('/')
        }
    }, [user])

    return (
        <motion.div
            className='login-page-container'
            {...customTransition}        
        >
            <h1 className='text-3xl font-bold' style={{paddingBottom: '20px'}}>Login once, access all</h1>
            <Button variant='contained' 
                    size='large'
                    onClick={handleClick}
            >Login with Google</Button>
        </motion.div>
    )
}
