import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1c1c1c] px-10 py-7 mt-10'>
    <form className='w-full flex justify-between items-start flex-wrap gap-3'>
      <div className='w-[45%] flex flex-col justify-start gap-3'>
        <div>
          <h3 className='mb-1'>Task Title</h3>
          <input className='w-full border-[1px] border-white bg-transparent mb-1 outline-none py-2 px-3 placeholder:text-gray-300' type="text" placeholder='Make A Ui Design' />
        </div>
        <div>
          <h3 className='mb-1'>Date</h3>
          <input className='w-full border-[1px] border-white bg-transparent mb-1 outline-none py-2 px-3 placeholder:text-gray-300' type="Date" />
        </div>
        <div>
          <h3 className='mb-1'>Asign to</h3>
          <input className='w-full border-[1px] border-white bg-transparent mb-1 outline-none py-2 px-3 placeholder:text-gray-300' type="text" placeholder='Employee Name' />
        </div>
        <div>
          <h3 className='mb-1'>Categories</h3>
          <input className='w-full border-[1px] border-white bg-transparent mb-1 outline-none py-2 px-3 placeholder:text-gray-300' type="text" placeholder='design dev etc' />
        </div>
      </div>
      <div className='w-[45%] flex flex-col justify-center items-center'>
        <div className='w-full'>
        <h3 className='mb-1'>Description</h3>
        <textarea className='w-full border-[1px] border-white bg-transparent mb-1 outline-none placeholder:text-gray-300' cols="30" rows="10"></textarea>
        </div>
        <div className='w-full mt-1'>
          <button className='w-full bg-green-400 py-2 px-3 text-[18px] font-normal rounded-md mt-0.5'>Create Task</button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default CreateTask