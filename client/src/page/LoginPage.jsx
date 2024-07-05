import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleSubmit = async () => {
    //     fetch('http://localhost:3000/api/user', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //             password: password,
    //         })
    //     })
    // }
    return (
        <div className='uppercase flex flex-col justify-center items-center gap-10'>
            <h1 className='text-center pt-28 pb-10 font-["Montserrat"] font-semibold text-4xl '>Login</h1>
            <input value={email} className='shadow-lg border-black border-2 h-10 w-52 px-2 font-["Montserrat"]' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
            <input value={password} className='shadow-lg border-black border-2 h-10 w-52 px-2 font-["Montserrat"]' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
            <div className='flex justify-center items-center gap-2 '>
                <button className='border-black border-2 h-10 w-[80px] rounded-3xl font-["Montserrat"]'><Link className='h-full w-full ' to="/user">Back</Link></button>
                {/* <button onClick={handleSubmit} className='border-black border-2 h-10 w-[80px] rounded-3xl font-["Montserrat"]'>Submit</button> */}
            </div>
        </div>
    )
}
