import React, { useEffect, useState } from 'react'
import products from '../data'
import { motion } from 'framer-motion'
import customTransition from '../scripts/TransitionPage'

export default function Contact() {
  const [name, setName] = useState('')

  return (
    <motion.div 
      className='contact-section'
      {...customTransition}
    >
      <img src={products[2].path} alt="" className="image-left" />
      <div className="right-container">
        <h1 className="contact-text">Contact Us</h1>
        <form action="" className="form-container">
          <div className="fullname-area">
            <p className="fullname-text">Full name</p>
            <input type="text" className="fullname-input" placeholder='Enter full name...' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="email-area">
            <p className="email-text">Email</p>
            <input type="text" className="email-input" placeholder='Enter email...'/>
          </div>
          <div className="message-area">
            <p className="message-text">Message</p>
            <textarea type="text" className="email-input" placeholder='Enter message...'/>
          </div>
        </form>
        <div className="send-btn">Send message</div>
      </div>
    </motion.div>
  )
}
