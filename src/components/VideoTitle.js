import React from 'react'

const VideoTitle = ({title, overview}) => {
    console.log(title, overview)
  return (
    <div className='w-screen aspect-video md:pt-[20%] px-6 md:px-24 absolute text-white md:bg-gradient-to-r from-black'>
    <div className='pt-[50%] md:pt-[0%]'>     
    <h1 className='text-lg md:text-4xl font-bold text-white mt-10 md:mt-0'>{title}</h1>
    <p className='md:w-2/5 text-white my-2 hidden md:block'> {overview}</p>
    </div>
    
    <div>
        <button className='text-black bg-white px-6 py-2 rounded-lg hover:bg-opacity-80'> ▶️ Play</button>
        <button className='text-white bg-gray-500 px-6 py-2 rounded-lg mx-6 my-2 bg-opacity-80 hover:bg-opacity-95'> More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle;
