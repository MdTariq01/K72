import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 lg:mb-3 mb-5'>
        <div className='border-4 hover:border-[#d3fd50] hover:text-[#defd50] lg:h-25 flex items-center rounded-full lg:px-14 px-7  border-white uppercase'>
            <Link to='/projects' className='text-[6vw] lg:mt-3'>WORK</Link>
        </div>
        <div className='border-4 hover:border-[#d3fd50] hover:text-[#defd50] lg:h-25 flex items-center rounded-full lg:px-14 px-7  border-white uppercase '>
            <Link to= '/agence' className='text-[6vw] lg:mt-3'>Agency</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
