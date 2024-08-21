import React from 'react'

const Frequently = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-black gap-1 px-[10vw] py-[5vw] '>
      <h1 className='text-[4vmax] text-white font-bold '>Frequently Asked Questions</h1>
      <div className=' text-white  text-[24px] flex flex-col gap-1 w-full '>
        <div className=' bg-zinc-800 w-full my-2 p-6'>
        <details>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            <summary>What is Netflix?</summary>
        </details>
        </div>
        <div className=' bg-zinc-800 w-full my-2 p-6'>
        <details>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            <summary>What is Netflix?</summary>
        </details>
        </div><div className=' bg-zinc-800 w-full my-2 p-6'>
        <details>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            <summary>What is Netflix?</summary>
        </details>
        </div><div className=' bg-zinc-800 w-full my-2 p-6'>
        <details>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            <summary>What is Netflix?</summary>
        </details>
        </div><div className=' bg-zinc-800 w-full my-2 p-6'>
        <details>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            <summary>What is Netflix?</summary>
        </details>
        </div>
       
      </div>
      <div className='flex gap-2 flex-wrap justify-center '>
            <input type="text" placeholder='Email Address' className='py-2 w-[280px] px-4 bg-[#202020] text-white border rounded border-zinc-500 ' />
            <button className='px-3 py-2 bg-red-600 text-white font-semibold rounded text-[24px] '>Get Started</button>
        </div>
    </div>
  )
}

export default Frequently
