import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    // const delay = (d) => {
    //     return new Promise((res, rej) => {
    //         setTimeout(() => {
    //             res()
    //         }, d * 1000)
    //     })
    // }

    const onSubmit = async (data) => {
        const res = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        const response = await res.json()
        // await delay(20)
        console.log(response)
    }

    // const handleSubmi = async () => {

  
    // }
    return (
        <div >
            {/* {isSubmitting ?
               <div className='flex items-center justify-center'>
                   <h1 className='font-["Montserrat"] font-semibold text-4xl mt-52'>Loading...</h1>
               </div>
                
                : */}
                <form onSubmit={handleSubmit(onSubmit)} className='uppercase flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-center pt-20 pb-10 font-["Montserrat"] font-semibold text-4xl '>signup</h1>
                    <input {...register('email')} className='shadow-lg border-black border-2 h-10 w-52 px-2 font-["Montserrat"]' type="email" placeholder='Email' />
                    <input {...register('password')} className='shadow-lg border-black border-2 h-10 w-52 px-2 font-["Montserrat"]' type="password" placeholder='Password' />
                    <div className='flex justify-center items-center gap-2 '>
                        <button className='border-black border-2 h-10 w-[80px] rounded-3xl font-["Montserrat"]'><Link className='h-full w-full ' to="/user">Back</Link></button>
                        <button  type='submit' className={` border-black border-2 h-10 w-[80px] rounded-3xl font-["Montserrat"] `}>Submit</button>
                    </div>
                </form>
            {/* } */}
        </div>
    )
}
