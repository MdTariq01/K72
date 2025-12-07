import React from 'react'
import videoSrc from '../../assets/video.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
        className='h-full w-full object-cover'
        muted
        autoPlay
        loop
        playsInline
        preload='auto'
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
