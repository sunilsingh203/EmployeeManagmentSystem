import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const  App = () => {
 
  const [User, setUser] = useState(null)
  const [logedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
   
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser)
    {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)
    }
  
   
  },[])
  
    const HandleLogin=(username,password)=>{
    if(username=='admin@me.com'&& password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authData){

      const employee = authData.employees.find((e)=>username == e.email && password == e.password)

      if(employee){
        setUser('User')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    
    }
    else{
      alert('invalid Credentails')
    }
  }
  
  
  return (
    <>
    {!User? <Login HandleLogin = {HandleLogin}/>: ''}
    {User == 'admin' ? <AdminDashboard/>:(User != null ? <EmployeeDashboard data ={logedInUserData}/>: null)}
    </>
  )
}

export default  App