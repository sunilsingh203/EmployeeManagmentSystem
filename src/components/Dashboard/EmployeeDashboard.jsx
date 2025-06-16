import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-15'>
        <Header/>
        <TaskListNumbers/>
        <TaskList ></TaskList>
    </div>
  )
}

export default EmployeeDashboard