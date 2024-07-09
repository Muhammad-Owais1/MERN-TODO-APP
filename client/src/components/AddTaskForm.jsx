import React from 'react'

export default function AddTaskForm() {
  return (
    <form className='w-full sm:w-[50vw] h-full flex flex-col items-center justify-center gap-8'>
        <input className='focus:outline-none border-b-[1px] border-gray-950 h-8 w-[90%] font-["Montserrat"] px-1' type="text" placeholder='Add Task' maxLength='50'/>
        <select className='focus:outline-none bg-white border-b-[1px] border-gray-950 h-8 w-[90%] font-["Montserrat"] px-1' name="" id="">
            <option value="" className='font-["Montserrat"]'>Incomplete</option>
            <option value="" className='font-["Montserrat"]'>Complete</option>
        </select>
        <input type="date" className='bg-white focus:outline-none border-b-[1px] border-gray-950 h-8 w-[90%] font-["Montserrat"] px-1' />
        <textarea className='resize-none focus:outline-none border-b-[1px] border-r-[1px] border-gray-950 h-64 w-[90%] font-["Montserrat"] px-1' name="" id="" placeholder='Description' maxLength='400'></textarea>
    </form>
  )
}
