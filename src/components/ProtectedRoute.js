import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  // useEffect(() => {
  //   if(!localStorage.getItem('accessToken')) {
  //     navigate('/login')
  //     return
  //   }
  // })
  return children
}
