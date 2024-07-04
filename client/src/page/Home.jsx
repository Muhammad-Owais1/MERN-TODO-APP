import React from 'react'
import getTime from '../helper/getTime'

export default function Home() {

  const { day, month, year, hour, minute, second, ampm } = getTime();

  return (
    <div className='bg-slate-900 h-full px-4'>
        <p className='text-white'>Wellcome Muhammad Owais.</p> 
        <h1 className='text-white'>{day}</h1>
        <h1 className='text-white'>{month}</h1>
        <h1 className='text-white'>{year}</h1>
        <h1 className='text-white'>{hour}</h1>
        <h1 className='text-white'>{minute}</h1>
        <h1 className='text-white'>{second}</h1>
        <h1 className='text-white'>{ampm}</h1>
    </div>
  )
}
