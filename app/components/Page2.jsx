import React from 'react'
import image from '../assets/mobileframe.jpg'

const Page2 = () => {
  return (
    <div className='w-full min-h-screen bg-black flex flex-wrap px-2 justify-center items-center '>
      <div className='w-[50vw] hero relative z-[9999] py-[25vh] flex flex-col items-center justify-center  gap-4 flex-wrap px-8 text-center  '>
        <h1 className='text-white font-bold text-[4vmax] tracking-tight '>Enjoy on your TV</h1>
        <p  className='text-white text-[24px] tracking-tight desc'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        
      </div>
      <div>
        <img src={image.src} alt="" />
      </div>

    </div>
  )
}

export default Page2
