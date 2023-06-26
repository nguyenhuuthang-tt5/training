import React from 'react'
import Navbar from './Navbar'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Login from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'

export default function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Navbar />}>
                  <Route index element={<Home />}/>
                  <Route path='/menu' element={<Menu />}/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/contact' element={<Contact />}/>
              </Route>
              <Route path='/login' element={<Login />}/>
          </Routes>
    </AnimatePresence>
  )
}
