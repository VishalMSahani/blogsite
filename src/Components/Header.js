import React from 'react'

const Header = () => {
  return (
    <div className='p-4  bg-white flex justify-center mb-4 w-full h-auto border-b-2 shadow-md'>
      <header className='text-3xl font-bold uppercase'>
        Tach Blogs <span className=' lowercase  text-sm font-medium text-blue-600'>by</span> 
        <span className='text-sm font-bold text-blue-600 '> Vishal Sahani</span> 
      </header>
    </div>
  )
}

export default Header
