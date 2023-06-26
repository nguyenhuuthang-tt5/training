import React from 'react'
import { motion } from 'framer-motion'
import customTransition from '../scripts/TransitionPage'
import Background from '../assets/home-background.jpg'

export default function Home() {
  return (
    <motion.div
      style={{backgroundImage: `url('${ Background }')`}}
      className='w-full h-[calc(100vh-6rem)] bg-cover bg-center'
      {...customTransition}
    >
        <div className='ml-12 pt-40'>
            <p className='text-5xl font-bold mb-3'>Thang's Pizza Training Course</p>
            <p className='text-4xl font-light mb-3'>Pizza to fit any taste</p>
            <div className='w-28 h-10 text-color-white bg-dark flex justify-center items-center rounded-md cursor-pointer'>Order now</div>
        </div>
    </motion.div>
  )
}
// bg-[url('https://images.unsplash.com/photo-1680676960765-f18115aa7390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')]
