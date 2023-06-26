import React, { useState, useContext } from 'react'
import logo from '../assets/logo.svg'
import { Outlet, NavLink } from 'react-router-dom'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { AuthContext } from '../context/AuthProvider'
import { getAuth } from 'firebase/auth'

export default function Navbar() {
  const { user } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const auth = getAuth();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    user.auth.signOut()
    setAnchorEl(null);
  };
  const activeNavbar = (isActive) => {
    return {
        color: isActive ? 'rgb(231, 69, 69)' : '#fff'
    }
  }
  return (
    <>
      <div className='w-full h-24 px-20 flex justify-between items-center bg-dark'>
          <div className='w-36 h-36 flex justify-center items-center'>
              <img className='scale-150' src={logo} alt='logo'/>
          </div>
          <div>
              <ul className='flex justify-center items-center'>
                  <NavLink className='mr-12' to={'/'} style={({isActive}) => activeNavbar(isActive)}>Home</NavLink>
                  <NavLink className='mr-12' to={'/menu'} style={({isActive}) => activeNavbar(isActive)}>Menu</NavLink>
                  <NavLink className='mr-12' to={'/about'} style={({isActive}) => activeNavbar(isActive)}>About</NavLink>
                  <NavLink className='mr-12' to={'/contact'} style={({isActive}) => activeNavbar(isActive)}>Contact</NavLink>
                  <NavLink className='mr-12' to={'/login'} style={({isActive}) => activeNavbar(isActive)}>Login</NavLink>
              </ul>
          </div>
          <Button color='error' variant='outlined' onClick={handleClick}>
            <Avatar sx={{width: '40px', height: "40px"}}>N</Avatar>
            <h4 className="ml-2 normal-case text-color-white">Thang Nguyen</h4>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
      </div>
      <Outlet />
    </>
  )
}
