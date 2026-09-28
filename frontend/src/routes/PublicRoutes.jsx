import React, { useContext } from 'react'
import AuthContext from '../context/MyContext'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const PublicRoutes = () => {

    let {loggedInUser} = useContext(AuthContext)

    if(loggedInUser){
        return(
            <Navigate to={'/main'} />
        )
    }


  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default PublicRoutes