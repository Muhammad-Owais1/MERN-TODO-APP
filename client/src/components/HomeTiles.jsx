import React from 'react'
import Img1 from '../imgs/img1.jpg'
import Img2 from '../imgs/img2.jpg'
import Img3 from '../imgs/img3.jpg'
import Img4 from '../imgs/img4.jpg'


export default function HomeTiles() {
    return (
        <div className='flex justify-center gap-16 flex-wrap pt-10 pb-52'>
            <div className='flex justify-evenly flex-wrap gap-16'>
                {
                    ['Learnings', 'Achivements'].map((item, index) => (
                        <div key={index} className='cursor-pointer tile flex flex-col justify-center items-center gap-5'>
                            <div className='relative text-white border-[3px] shadow-md shadow-black rounded-2xl h-52 w-52 py-5 overflow-hidden '>
                                <img className='w-52 absolute top-0 left-0 ' src={index === 0 ? Img1 : Img2} alt="" />
                                <p className='relative z-10 text-black font-bold bg-[#ffffff9d] pl-5'>
                                    {item}
                                </p>
                            </div>
                            <div className='h-2  rounded-lg bg-[#00ff00] invisible tile-underline'></div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-evenly flex-wrap gap-16 '>
                {
                    ['Notes', 'Insites'].map((item, index) => (
                        <div key={index} className='cursor-pointer tile flex flex-col justify-center items-center gap-5'>
                            <div className='relative text-white border-[3px] shadow-md shadow-black rounded-2xl h-52 w-52 py-5 overflow-hidden '>
                                <img className='w-52 absolute top-0 left-0 ' src={index === 0 ? Img3 : Img4} alt="" />
                                <p className='relative z-10 text-black font-bold bg-[#ffffff9d] pl-5'>
                                    {item}
                                </p>
                            </div>
                            <div className='h-2  rounded-lg bg-[#00ff00] invisible tile-underline'></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
