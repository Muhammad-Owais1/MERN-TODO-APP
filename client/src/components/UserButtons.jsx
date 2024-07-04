import React from 'react'
import { Link } from 'react-router-dom'

export default function UserButtons() {

    return (
        <>
            <h1 className='text-center pt-28 pb-10 font-["Montserrat"] font-semibold text-4xl text-yellow-400'>Login And Start Using</h1>
            <div className='text-white flex flex-wrap justify-center items-center gap-10'>
                <button className='h-10 w-24 border-2 rounded-3xl font-["Montserrat"] uppercase text-xs hover:text-yellow-400 hover:border-yellow-400 '><Link className='h-full w-full flex justify-center items-center' to='/user/login'>login</Link></button>
                <button className='h-10 w-24 border-2 rounded-3xl font-["Montserrat"] uppercase text-xs hover:text-yellow-400 hover:border-yellow-400 '><Link className='h-full w-full flex justify-center items-center' to='/user/signup'>signup</Link></button>
            </div>
        </>
    )
}
