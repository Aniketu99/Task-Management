import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbord = () => {
  return (
    <div className='h-screen bg-[#icicic] w-full mx-auto p-20'>
     <Header/>
     <TaskListNumber/>
     <TaskList/>
    </div>
  )
}

export default EmployeeDashbord