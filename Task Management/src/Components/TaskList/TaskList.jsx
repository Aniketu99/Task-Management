import React from 'react'

const TaskList = () => {
    return (
        <div id="tasklist" class="min-h-[45%] flex justify-start items-center py-5 gap-5 flex-nowrap overflow-x-auto w-full mt-10">
            <div class="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm font-normal'>High</h3>
                    <h4 className='text-base'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make A Youtube Video</h2>
                <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nostrum neque perspiciatis placeat natus nobis est veniam cumque, numquam eligendi magnam id quas, iusto asperiores earum eius iure ea? Explicabo.</p>
            </div>
            <div class="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5">
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm font-normal'>High</h3>
                    <h4 className='text-base'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make A Youtube Video</h2>
                <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nostrum neque perspiciatis placeat natus nobis est veniam cumque, numquam eligendi magnam id quas, iusto asperiores earum eius iure ea? Explicabo.</p>
            </div>
            <div class="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5">
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm font-normal'>High</h3>
                    <h4 className='text-base'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make A Youtube Video</h2>
                <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nostrum neque perspiciatis placeat natus nobis est veniam cumque, numquam eligendi magnam id quas, iusto asperiores earum eius iure ea? Explicabo.</p>
            </div>
            <div class="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5">
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm font-normal'>High</h3>
                    <h4 className='text-base'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make A Youtube Video</h2>
                <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nostrum neque perspiciatis placeat natus nobis est veniam cumque, numquam eligendi magnam id quas, iusto asperiores earum eius iure ea? Explicabo.</p>
            </div>
        </div>

    )
}

export default TaskList