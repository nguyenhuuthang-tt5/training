import { Routes, Route, createBrowserRouter, Outlet } from 'react-router-dom'
import AuthProvider from '../context/AuthProvider'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'

const AuthLayout = () => {
    return <AuthProvider><Outlet /></AuthProvider>
}
export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <Navbar />,
                path: '/',
                children: [
                    {
                        element: <Home />,
                        index: true,
                    },
                    {
                        element: <Menu />,
                        path: '/menu',
                    },
                    {
                        element: <About />,
                        path: '/about',
                    },
                    {
                        element: <Contact />,
                        path: '/contact',
                    },
                ]
            }
        ]
    }
])
