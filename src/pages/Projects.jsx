import React, { useRef } from 'react'
import ProjectCard from '../components/Projects/ProjectCard'
import thumbnail1 from '../assets/Images/thumbnail1.jpg'
import thumbnail2 from '../assets/Images/thumbnail2.jpg'
import thumbnail3 from '../assets/Images/thumbnail3.jpg'
import thumbnail4 from '../assets/Images/thumbnail4.jpg'
import thumbnail5 from '../assets/Images/thumbnail5.jpg'
import thumbnail6 from '../assets/Images/thumbnail6.jpg'
import thumbnail7 from '../assets/Images/thumbnail7.jpg'
import thumbnail8 from '../assets/Images/thumbnail8.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function Projects() {
  const projects = [{
    image1: thumbnail1,
    image2: thumbnail2
  }, {
    image1: thumbnail3,
    image2: thumbnail4
  }, {
    image1: thumbnail5,
    image2: thumbnail6
  } , {
    image1: thumbnail7,
    image2: thumbnail8
  }]

 const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

useGSAP(() => {
  const heroes = gsap.utils.toArray('.hero')

  if (!heroes.length) return

  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: ".lol",
      start: "top 80%",      
      end: "bottom top",    
      scrub: true,          
    }
  })

  heroes.forEach((hero, index) => {
    tl.addLabel(`card-${index}`)
      .from(
        hero,
        {
          height: 120,
          y: 80,
        },
        "<" 
      )
  })
}, { scope: container })
 

  return (
    <div ref={container} className='text-black'>
      <div className='px-4'>
        <div className=' pt-[40vh] flex'>
        <h2 className='font-[font2] lg:text-[13vw] text-[20vw] uppercase'>Work</h2>
        <p className='lg:mt-14 mt-4 lg:text-4xl text-sm font-[font2] '>16</p>
      </div>
      <div className='-mt-20 lol'>
        {projects.map((elem , idx) => {
          return <div key={idx} className= 'hero w-full lg:h-[500px] mb-4 flex lg:flex-row flex-col lg:gap-2 gap-0.5'>
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>

        })}
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Projects