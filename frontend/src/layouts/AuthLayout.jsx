import React from 'react'
import {Navigate, Outlet} from 'react-router'

const AuthLayout = () => {

    


  return (
   <div>
        <Navigate to={"/login"} />
        <Outlet />
   </div>
  )
}

export default AuthLayout