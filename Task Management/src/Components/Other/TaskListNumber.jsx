import React from 'react'

const TaskListNumber = () => {

  return (

    <div className='flex w-full justify-center gap-5 mt-16'>
       <div className='w-1/4 bg-red-400 p-10 rounded-xl'>
          <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
       </div>
       <div className='w-1/4 bg-blue-400 p-10 rounded-xl'>
          <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
       </div>
       <div className='w-1/4 bg-green-400 p-10 rounded-xl'>
          <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
       </div>
       <div className='w-1/4 bg-yellow-400 p-10 rounded-xl'>
          <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
       </div>
    </div>
  )
}

export default TaskListNumber