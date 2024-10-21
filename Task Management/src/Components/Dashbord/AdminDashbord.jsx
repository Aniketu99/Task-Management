import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import Alltask from '../Other/Alltask'

const AdminDashbord = () => {
  return (
    <div className='h-screen bg-[#icicic] w-full mx-auto p-20'>
      <Header />
      <CreateTask/>
      <Alltask/>
    </div>
  )
}

export default AdminDashbord