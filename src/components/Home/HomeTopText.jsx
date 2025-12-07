import React from 'react'
import Video from './Video'

const HomeTopText = () => {
  return (
    <div className='font-[font1] lg:pt-5 pt-25 text-center '>
      <div className='lg:pt-0 pt-30'>
        <div className='lg:text-[9.5vw] text-[11vw] justify-center flex items-center lg:leading-[8vw] leading-[10vw] uppercase'>
        The spark for
      </div>
      <div className='lg:text-[9.5vw] text-[11vw] justify-center flex items-center lg:leading-[8vw] leading-[10vw] uppercase'>
        all
        <div className = 'h-[7vw] w-[16vw] rounded-full overflow-hidden lg:-mt-5 -mt-1'>
            <Video />   
        </div>
        things
        </div>
      <div className='lg:text-[9.5vw] text-[11vw] justify-center flex items-center lg:leading-[8vw] leading-[10vw] uppercase'>
        creative
      </div>
      </div>

      <div>
        <p className='lg:w-[20vw] lg:leading-[1.5vw] w-[55vw] font-[font2] lg:mt-13 mt-20 lg:text-[15px] text-[11px] leading-[4vw] lg:ml-[80vw] ml-42 text-start'>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We're transparent, honest and when we believe in something, we're all in.
        </p>
      </div>
    </div>
  )
}

export default HomeTopText
