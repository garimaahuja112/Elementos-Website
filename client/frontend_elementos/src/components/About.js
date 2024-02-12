import React from 'react'
import aboutMan from '../images/aboutMan.png'
import myframe1 from '../images/myframe1.png'
import myframe2 from '../images/myframe2.png'
import myframe3 from '../images/myframe3.png'
import myframe4 from '../images/myframe4.png'
// import aboutelementos from '../images/aboutelementos.png'
const About = () => {
  return (
    <div id ="about" >
      <div>
      <img src={aboutMan} alt="man" className=" w-[700px] h-[800px] lg:w-[1000px] lg:h-[600px] absolute  lg:left-[300px] lg:opacity-100 opacity-65 z-0 " />
      </div>
      
     <div >

     <div className="lg:flex lg:gap-[200px] lg:ml-[250px] ml-[20px] ">
   

     <div  className=" lg:h-[250px] lg:w-[400px] h-[170px] w-[170p] text-white  z-10" >
      
      <img src={myframe1} alt="" className="absolute lg:h-[250px] lg:w-[400px] h-[230px] w-[330px] "  />
        <div className="flex flex-col items-center justify-center gap-2 font-serif">
            <h1>heading 1</h1>
            <div className=" h-[100px] w-[250px]  z-40">
            <p className="text-[12px] lg:text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit beatae aperiam molestias? Fuga illum aliquam exercitationem tempore quaerat placeat beatae qui aspernatur autem rerum? Vitae, recusandae! Nihil molestiae ipsa </p>
            </div>
           
        </div>
      
       
        </div>


        <div className=" lg:h-[250px] lg:w-[400px] text-white  z-10" >
       <img src={myframe2} alt="topleftframe" className=" mt-[70px] lg:mt-0 absolute lg:h-[250px]  lg:w-[400px] h-[230px] w-[330px]      " />
       <div className="flex flex-col justify-center items-center gap-3 font-serif ">
            <h1 className="z-40 mt-[70px] lg:mt-0 ">heading 2</h1>
            <div className="h-[100px] w-[250px] z-40 ">
            <p className="text-[12px] lg:text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit beatae aperiam molestias? Fuga illum aliquam exercitationem tempore quaerat placeat beatae qui aspernatur autem rerum? Vitae, recusandae! Nihil molestiae ipsa </p>
            </div>
        </div>
       
       </div>


     </div>
     
       
       <div className="lg:flex gap-[200px] lg:ml-[250px] lg:mt-[50px] sm:flex-wrap ml-[20px]">

       <div  className=" lg:h-[250px] lg:w-[400px] text-white z-10">
         <img src={myframe3} alt="topleftframe" className=" lg:mt-0 mt-[110px] absolute lg:h-[250px] lg:w-[400px] h-[230px] w-[330px]  " />
         <div className="flex flex-col justify-center items-center gap-3 font-serif">
            <h1 className="mt-[110px] lg:mt-0 z-40">heading 3</h1>
            <div className="h-[100px] w-[250px] z-40">
            <p className="text-[12px] lg:text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit beatae aperiam molestias? Fuga illum aliquam exercitationem tempore quaerat placeat beatae qui aspernatur autem rerum? Vitae, recusandae! Nihil molestiae ipsa </p>
            </div>
        </div>
         </div>

         <div  className=" h-[250px] w-[400px] text-white z-10">
        <img src={myframe4} alt="topleftframe"className=" lg:mt-0 mt-[100px] absolute lg:h-[250px] lg:w-[400px] h-[220px] w-[330px]   " />
        <div className="flex flex-col justify-center items-center gap-3 font-serif">
            <h1 className="mt-[100px] lg:mt-0 z-40">heading 4</h1>
            <div className="h-[100px] w-[250px] z-40">
            <p className="text-[12px] lg:text-[15px]"  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit beatae aperiam molestias? Fuga illum aliquam exercitationem tempore quaerat placeat beatae qui aspernatur autem rerum? Vitae, recusandae! Nihil molestiae ipsa</p>
            </div>
        </div>
        </div>

       </div>

  </div>
    </div>
  )
}

export default About
