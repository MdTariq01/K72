import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = ({ children }) => {

  const currentPath = useLocation().pathname
  const stairParentRef = useRef(null)
  const pageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    gsap.set(pageRef.current, { opacity: 0 })

    gsap.set(stairParentRef.current, { display: 'block' })

    tl.from('.stair', {
      height: 0,
      stagger: { amount: -0.2 }
    })

    tl.to('.stair', {
      y: '100%',
      stagger: { amount: -0.2 }
    })

    tl.set('.stair', { y: '0%' })

    tl.set(stairParentRef.current, { display: 'none' })

    tl.to(pageRef.current, {
      opacity: 1,
      delay:'-0.5'
    })
  }, [currentPath])

  return (
    <>
      <div ref={stairParentRef} className='h-screen fixed top-0 w-full z-20 pointer-events-none'>
        <div className='h-full flex w-full'>
          <div className='stair bg-black w-1/5 h-full'></div>
          <div className='stair bg-black w-1/5 h-full'></div>
          <div className='stair bg-black w-1/5 h-full'></div>
          <div className='stair bg-black w-1/5 h-full'></div>
          <div className='stair bg-black w-1/5 h-full'></div>
        </div>
      </div>

      <div ref={pageRef}>
        {children}
      </div>
    </>
  )
}

export default Stairs
