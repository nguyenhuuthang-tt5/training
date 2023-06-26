import React from 'react'
import products from '../data'
import { motion } from 'framer-motion'
import customTransition from '../scripts/TransitionPage'

export default function Menu() {
  return (
    <motion.div 
     className='menu-section'
     {...customTransition}
    >
      <p className='title'>Our Menu</p>
      <div className='product-container'>
        <div className='product-group'>
          {
            products.map((item, index) => {
              return <div key={index} className='product-card'>           
                      <img src={item.path} className='product-image' alt='product'/>
                      <div className='product-info'>
                        <h3 className='name'>{item.name}</h3>
                        <p className='cost'>{item.cost}</p>
                      </div>
                      <div className="product-footer">
                        <div className="sell-count">{item.cost} selled</div>
                        <div className="order-btn">Order</div>
                      </div>
                    </div>
            })
          }
        </div>
      </div>
    </motion.div>
  )
}
