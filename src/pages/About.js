import React from 'react'
import products from '../data'
import { motion } from 'framer-motion'
import customTransition from '../scripts/TransitionPage'

export default function About() {
  return (
    <motion.div 
      className="about-section"
      {...customTransition}
    >
      <img src={products[4].path} alt="" className="img-top" />
      <div className="center-content">
        <h1 className="title-about">about us</h1>
        <p className="content-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ex ad consequuntur dolores molestiae laborum minus deleniti ea, commodi ducimus cupiditate distinctio illo culpa est, tempore labore quis cum nemo repellat.
          Ex ad consequuntur dolores molestiae laborum minus deleniti ea, commodi ducimus cupiditate distinctio illo culpa est, tempore labore quis cum nemo repellat.
          Ex ad consequuntur dolores molestiae laborum minus deleniti ea, commodi ducimus cupiditate distinctio illo culpa est, tempore labore quis cum nemo repellat.
        </p>
      </div>
    </motion.div>
  )
}
