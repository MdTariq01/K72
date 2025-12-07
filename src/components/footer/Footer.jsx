import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer text-white bg-black w-full h-full flex flex-col justify-between p-6 lg:p-8'>
      <div className='w-full flex items-center justify-between flex-wrap gap-4'>
        <div className='flex-1 min-w-[140px] relative '>
          <p className='font-[font2] text-base lg:text-2xl uppercase'>Let's create</p>
          <p className='font-[font2] text-base lg:text-2xl uppercase'>something great</p>
          <div className='flex items-center space-x-3 absolute top-30'>
            <a href='https://www.linkedin.com/in/mdtariq01/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='hover:opacity-80 transition-opacity'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 sm:w-6 sm:h-6'>
                <path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2.01 3.6 4.63v5.68z'/>
              </svg>
            </a>
            <a href='https://github.com/MdTariq01/' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='hover:opacity-80 transition-opacity'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 sm:w-6 sm:h-6'>
                <path d='M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .5z'/>
              </svg>
            </a>
            <a href='https://www.instagram.com/_tariq.xd' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='hover:opacity-80 transition-opacity'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 sm:w-6 sm:h-6'>
                <path d='M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.402.59.214 1.01.47 1.45.91.44.44.696.86.91 1.45.163.46.348 1.26.402 2.43.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.402 2.43-.214.59-.47 1.01-.91 1.45-.44.44-.86.696-1.45.91-.46.163-1.26.348-2.43.402-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.402-.59-.214-1.01-.47-1.45-.91-.44-.44-.696-.86-.91-1.45-.163-.46-.348-1.26-.402-2.43-.058-1.27-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.402-2.43.214-.59.47-1.01.91-1.45.44-.44.86-.696 1.45-.91.46-.163 1.26-.348 2.43-.402 1.27-.058 1.65-.07 4.85-.07zm0-2.2c-3.26 0-3.667.012-4.947.071-1.28.059-2.157.27-2.91.577a4.92 4.92 0 00-1.77 1.154 4.92 4.92 0 00-1.154 1.77c-.307.753-.518 1.63-.577 2.91-.059 1.28-.071 1.687-.071 4.947s.012 3.667.071 4.947c.059 1.28.27 2.157.577 2.91.27.655.64 1.24 1.154 1.77.53.53 1.116.924 1.77 1.154.753.307 1.63.518 2.91.577 1.28.059 1.687.071 4.947.071s3.667-.012 4.947-.071c1.28-.059 2.157-.27 2.91-.577a4.92 4.92 0 001.77-1.154 4.92 4.92 0 001.154-1.77c.307-.753.518-1.63.577-2.91.059-1.28.071-1.687.071-4.947s-.012-3.667-.071-4.947c-.059-1.28-.27-2.157-.577-2.91a4.92 4.92 0 00-1.154-1.77 4.92 4.92 0 00-1.77-1.154c-.753-.307-1.63-.518-2.91-.577-1.28-.059-1.687-.071-4.947-.071zM12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.84a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z'/>
              </svg>
            </a>
          </div>
        </div>

        <div className='flex-1 min-w-[140px] flex flex-col items-end relative'>
          <p className='text-sm lg:text-base'>© 2025 K72 Studio</p>
          <p className='text-xs lg:text-sm mt-1'>Made with ❤️ by tariq</p>
          <div className='absolute lg:top-25 top-28'>
            <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className=' text-sm sm:text-base font-[font2] uppercase cursor-pointer hover:opacity-80 transition-opacity'>
            Back To Top
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center lg:pt-10 pt-15'>
        <Link to='/contact-us'>
            <button className='font-[font2] text-sm sm:text-base lg:text-[1.2vw] cursor-pointer uppercase border-white border-2 px-4 sm:px-6 lg:px-8 py-2 rounded-full hover:bg-white hover:text-black transition-all'>Contact Us</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Footer
