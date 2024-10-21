import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-normal'>Hello <br /> <span className='text-3xl font-semibold'> Aniket 👋</span></h1>
        <button className='text-white font-medium bg-red-500 rounded-sm px-5 py-2 text-lg'>Log Out</button>
    </div>
  )
}

export default Header