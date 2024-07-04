import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='sm:flex justify-center gap-5 px-10 hidden'>
        {
          ['Home', 'Tasks', 'User', 'Add Task', 'More'].map((item, index) => (
            <div className='flex items-center justify-center text-white border-[1.5px] w-24 h-8 rounded-2xl' key={index}>
              <a className='uppercase text-xs' href="">{item}</a>
            </div>
          ))
        }
      </nav>
      <nav className='flex justify-around py-2 sm:hidden absolute bottom-0 bg-black w-full'>
        {
          ['fa-list-check','fa-plus', 'fa-house', 'fa-circle-info', 'fa-user'].map((item, index) => (
            <div className='flex items-center justify-center text-white  w-8 h-8 rounded-2xl ' key={index}>
              <a href=""><i className={`fa-solid ${item}`}></i></a>
            </div>
          ))
        }
        
      </nav>
    </>
  )
}
