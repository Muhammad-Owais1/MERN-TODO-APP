import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {



    return (
        <div >
            {/* {isSubmitting ?
               <div className='flex items-center justify-center'>
                   <h1 className='font-["Montserrat"] font-semibold text-4xl mt-52'>Loading...</h1>
               </div>
                
                :
                <form onSubmit={handleSubmit(onSubmit)} className='uppercase flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-center pt-20 pb-2 font-["Montserrat"] font-semibold text-4xl '>signup</h1>
                    <input {...register('email')} className='shadow-lg border-black border-2 h-10 w-52 px-2 font-["Montserrat"]' type="email" placeholder='Email' />
                    <input {...register('password')} className='shadow-lg border-black border-2 h-10 w-52 px-2 font-["Montserrat"]' type="password" placeholder='Password' />
                    <div className='flex justify-center items-center gap-2 '>
                        <button className='border-black border-2 h-10 w-[80px] rounded-3xl font-["Montserrat"]'><Link className='h-full w-full ' to="/user">Back</Link></button>
                        <button  type='submit' className={` border-black border-2 h-10 w-[80px] rounded-3xl font-["Montserrat"] `}>Submit</button>
                    </div>
                    <p className={`font-semibold text-xs ${response.status == 201 ? 'text-green-600' : 'text-red-600'}`}>{response.message}</p>
                </form>
            }  */}
        </div>
    )
}
