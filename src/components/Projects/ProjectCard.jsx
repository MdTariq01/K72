import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
          <div className='lg:w-1/2 w-full group relative h-full hover:rounded-[45px] overflow-hidden transition-all mb-10'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0  left-0 bg-black/20 h-full w-full flex items-center justify-center'>
              <h2 className='text-white text-[3vw] uppercase font-[font1] border-2 rounded-full border-white px-4 pt-2'>View Project</h2>
            </div>
          </div>
          <div className='lg:w-1/2 w-full group relative h-full hover:rounded-[45px] overflow-hidden transition-all '>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0  left-0 bg-black/20 h-full w-full flex items-center justify-center'>
              <h2 className='text-white text-[3vw] uppercase font-[font1] border-2 rounded-full border-white px-4 pt-2'>View Project</h2>
            </div>
          </div>
    </>
  )
}

export default ProjectCard
