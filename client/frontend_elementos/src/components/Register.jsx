import React from 'react'
import ball from '../images/SuperToroid-1.png'
import ring from '../images/SuperToroid-1 (1).png'
import pill from '../images/Pill.png'

const Register = () => {
  return (
    <div>
    <div className='relative mb-32'>
    <img src={ring} alt='/' className='absolute right-5 size-20 top-14 sm:size-50 sm:right-14'/>
    <div className='flex flex-col mt-[50px] items-center justify-center '>
      <h1 className='text-white font-bold text-4xl sm:text-2xl text-center md:text-5xl'>SHOW CASE YOUR UI/UX SKILLS</h1>
      <p className='text-white w-[75%]  py-20 leading-loose  font-regular text-center sm:text-2xl md:text-1xl'>Lorem ipsum dolor sit amet. Sit delectus quos non nemo minima in ducimus consequatur eum voluptas alias. Qui impedit illo quo vitae pariatur et saepe ipsum non reiciendis harum. Qui possimus dignissimos sit voluptas sequi sed labore officia ea officia veniam ea vitae sapiente qui reprehenderit velit et saepe ipsum.

Est autem cumque in assumenda saepe sit quos accusamus a molestiae dignissimos qui minus dolor qui nemo consequuntur. Et natus quia ut sunt beatae qui blanditiis voluptatum ea iusto consectetur cum esse natus aut commodi sunt. Sit molestiae exercitationem est veritatis magni eum iure magnam et quia distinctio sed fuga sequi in quibusdam odit! Et sapiente quia vel laborum corrupti quo corrupti necessitatibus et maxime debitis qui animi deleniti quo eveniet provident.

Et minus commodi id asperiores voluptas eos voluptatum Quis. Qui asperiores velit 33 quae minima id consequatur iste aut nulla dignissimos et doloremque voluptatem quo ipsam autem.

</p>
      <button type="button" class=" w-[200px] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-1.5xl  py-2.5 text-center me-2 mb-2 tracking-widest font-bold rounded-full  hover:text-black shadow-lg shadow-indigo-500/50">REGISTER</button>
      <img src={ball} alt='/' className='absolute left-2 size-20 bottom-20 sm:size-40 sm:left-8 sm:bottom-1 '/>
     <img src={pill} alt='/' className='absolute right-5 bottom-5 h-15 w-15 sm:right-90 sm:size-100'/>
    </div>
    
    </div>
    
    </div>
  )
}

export default Register
