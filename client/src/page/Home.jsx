import React from 'react'
import Timer from '../components/Timer'
import HomeTiles from '../components/HomeTiles'

export default function Home() {

  return (
    <div className='bg-slate-900 h-full px-10 overflow-scroll'>
      <p className='text-white text-xs uppercase'>Wellcome, Muhammad Owais.</p>

      <Timer />
      <HomeTiles />

    </div>
  )
}
