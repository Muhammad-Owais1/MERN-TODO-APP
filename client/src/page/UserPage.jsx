import React from 'react'
import UserInfo from '../components/UserInfo'
import UserButtons from '../components/UserButtons'

export default function UserPage() {
    return (
        <div className='page bg-slate-900 h-full'>
            <UserInfo />
            <UserButtons />
        </div>
    )
}
