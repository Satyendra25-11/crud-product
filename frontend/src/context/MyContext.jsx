import { createContext, useContext, useState } from "react";
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
   const [products, setProducts] = useState()

   const [loggedInUser, setLoggedInUser] = useState()

   const [accessToken, setAccessToken] = useState()


   const value = {
    products,
    setProducts,
    loggedInUser,
    setLoggedInUser,
    accessToken,
    setAccessToken,
    

   }
return(
    <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
)
}

export const useAuth = ()=>{
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context

}



export default AuthContext
