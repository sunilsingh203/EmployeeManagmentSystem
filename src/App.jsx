import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const  App = () => {
 
  const [User, setUser] = useState('')

  // useEffect (() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  
  // },)

  const data = useContext(AuthContext)
  console.log(data)
  const HandleLogin=(username,password)=>{
    if(username=='admin@me.com'&& password=='123'){
      setUser('admin')
    }
    else if(username=='user@me.com'&& password=='123'){
      setUser('User')
      
    }
    else{
      alert('invalid Credentails')
    }
  }
  
  
  return (
    <>
    {!User? <Login HandleLogin = {HandleLogin}/>: ''}
    {User == 'admin' ? <AdminDashboard/>:<EmployeeDashboard/>}
    </>
  )
}

export default  App