import React from 'react'
import { Link, useLocation, } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation()
  return (
    <>
      <header className="flex flex-col items-center bg-slate-900 ">

        <h1 className="py-2 px-10 text-left sm:text-center text-[30px] font-['Anton_SC'] font-medium text-yellow-400 w-screen ">
          TODO APP
        </h1>


        <nav className='sm:flex justify-center gap-5 pb-2 px-10 hidden '>
          {
            [
              ['Home', '/'],
              ['Tasks', '/tasks'],
              ['User', '/user'],
              ['Add Task', '/addtask'],
              ['More', '/more']
            ].map((item, index) => (
              <div className={`cursor-pointer flex items-center justify-center ${(location.pathname === '/' && item[1] === '/') || (location.pathname !== '/' && location.pathname.startsWith(item[1]) && item[1] !== '/') ? 'text-orange-400 border-orange-400' : 'border-white text-white'} hover:text-orange-500 hover:border-orange-500 border-[1.5px] w-24 h-8 rounded-2xl`} key={index}>
                <Link className='w-full h-full uppercase text-xs font-["Montserrat"] flex items-center justify-center' to={item[1]}>{item[0]}</Link>
              </div>
            ))
          }
        </nav>
        <nav className='flex justify-around py-2 sm:hidden  fixed bottom-0 z-20  bg-black w-full'>
          {
            [
              ['fa-list-check', '/tasks'],
              ['fa-plus', '/more'],
              ['fa-house', '/'],
              ['fa-circle-info', '/more'],
              ['fa-user', '/user']
            ].map((item, index) => (
              <div className='cursor-pointer flex items-center justify-center flex-col text-white  w-8 h-8 pt-1 rounded-2xl ' key={index}>
                <Link to={item[1]}><i className={`fa-solid ${item[0]} ${(location.pathname === '/' && item[1] === '/') || (location.pathname !== '/' && location.pathname.startsWith(item[1]) && item[1] !== '/') ? "text-orange-400" : 'text-white'}`}></i></Link>
                <div className='h-2 w-5 bg-orange-500 rounded-md nav-underline'></div>
              </div>
            ))
          }
        </nav>
      </header>
    </>
  )
}
