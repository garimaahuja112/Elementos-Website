import React from 'react'
import { ReactTyped } from "react-typed";
import main from '../images/bggg.png'

const Hero = () => {
  return (
    <div className="bg-cover bg-center  text-white">
   
      <div className='mt-[50px] max-w-[800px]  flex flex-col text-center mx-auto w-full'>
        <p className=' text-[#fc75cf] font-bold p-2'>ninne.0</p>
        <h1 className='uppercase md:text-7xl sm:text-6xl text-4xl font-bold md:py-1 '>ELEMENTOS</h1>
        <div className='text-center flex justify-center'>
            <p className='md:text-5xl sm:text-4xl text-0.5xl font-bold'>BEST EVENT </p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-0.5xl font-bold pl-4 text-purple-500' strings={["BIGGER","BETTER","BOLDER","BETTER"]} typeSpeed={120}  loop backSpeed={140} />
            
        </div>
        <button className='bg-[#e879db] w-[200px] rounded-md mx-auto py-2 text-black font-bold m-4'>REGISTER NOW</button>
        
      </div>
      
      
    </div>
  )
}

export default Hero
