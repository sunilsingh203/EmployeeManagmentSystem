import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [Userdata, setUserdata] = useState (null)


    useEffect(() => {
      const {employees,admin} = getLocalStorage()
     setUserdata({employees,admin})
     setLocalStorage()
    
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={Userdata}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider