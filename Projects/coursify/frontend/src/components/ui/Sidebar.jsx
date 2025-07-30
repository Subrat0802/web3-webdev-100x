import React from 'react'

const Sidebar = () => {
  return (
    <div className='pt-24 bg-gray-100 w-[15%] h-[100dvh] fixed left-0' >
        <ul className='text-lg flex flex-col gap-3'>
            <li className='px-10'>Dashboard</li>
            <li className='px-10'>My Profile</li>
            <p className='font-bold px-10'>Instructor</p>
            <li className='px-10'>My Courses</li>
            <li className='px-10'>Settings</li>
            <li className='px-10'>Logout</li>
        </ul>
    </div>
  )
}

export default Sidebar