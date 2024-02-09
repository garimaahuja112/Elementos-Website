import React from 'react'
import aboutMan from '../images/aboutMan.png'
import myframe1 from '../images/myframe1.png'
import myframe2 from '../images/myframe2.png'
import myframe3 from '../images/myframe3.png'
import myframe4 from '../images/myframe4.png'
import aboutelementos from '../images/aboutelementos.png'
const About = () => {
  return (
    <div >
        <div  className="absolute h-[250px] w-[400px] left-[250px] top-[50px] z-10" >
        <img src={myframe1} alt="topleftframe" className="absolute  "  />
        <div className="flex flex-col justify-center items-center gap-3 font-serif">
            <h1>heading 1</h1>
            <p className="ml-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit beatae aperiam molestias? Fuga illum aliquam exercitationem tempore quaerat placeat beatae qui aspernatur autem rerum? Vitae, recusandae! Nihil molestiae ipsa est?</p>
        </div>
        </div>
       
       <div className="absolute h-[250px] w-[400px] left-[810px] top-[50px] z-10" >
       <img src={myframe2} alt="topleftframe" className="absolute" />
       <div className="flex flex-col justify-center items-center gap-3 font-serif">
            <h1>heading 1</h1>
            <p className="ml-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit beatae aperiam molestias? Fuga illum aliquam exercitationem tempore quaerat placeat beatae qui aspernatur autem rerum? Vitae, recusandae! Nihil molestiae ipsa est?</p>
        </div>
       
       </div>
        
         <div  className="absolute h-[250px] w-[400px] left-[250px] top-[400px] z-10">
         <img src={myframe3} alt="topleftframe" className="absolute" />
         <div className="flex flex-col justify-center items-center gap-3 font-serif">
            <h1>heading 1</h1>
            <p className="ml-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit beatae aperiam molestias? Fuga illum aliquam exercitationem tempore quaerat placeat beatae qui aspernatur autem rerum? Vitae, recusandae! Nihil molestiae ipsa est?</p>
        </div>
         </div>
        
        <div  className="absolute h-[250px] w-[400px] left-[810px] top-[400px] z-10">
        <img src={myframe4} alt="topleftframe"className="absolute" />
        <div className="flex flex-col justify-center items-center gap-3 font-serif">
            <h1>heading 1</h1>
            <p className="ml-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit beatae aperiam molestias? Fuga illum aliquam exercitationem tempore quaerat placeat beatae qui aspernatur autem rerum? Vitae, recusandae! Nihil molestiae ipsa est?</p>
        </div>
        </div>
       
         
         <div>
         <img src={aboutelementos} alt="topleftframe" className="absolute h-[250px] w-[400px] left-[540px] top-[230px] z-10" />
         </div>
        
        

        <img src={aboutMan} alt="man" className=" w-[938px] h-[670px] relative left-[250px] " />
    </div>
  )
}

export default About
