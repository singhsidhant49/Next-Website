'use client';

import { StyleButton } from "../components/StyleLink";

const About = () => (
  <section className="text-gray-600 body-font overflow-hidden">

     <div className=" bg-yellow-400 mt-50   flex self-center  h-4/6 absolute -left-16 w-28 shadow-[5px_8px_70px_0px_#fed7d7] -z-10  " style={{ borderRadius: '200%' }}/>

  <div className="container px-5 lg:px-20 py-16 mx-auto   ">


    <div className="flex flex-col md:flex-row z-10 ">
      
     
      
      <div className=" w-full lg:pl- lg:px-20 lg:py-6 mt-6 lg:mt-0 flex-1">
       <div className="bg-yellow-400  flex md:w-4/6 sm:w-full  mb-10 rounded-full ">
         <h2 className="text-lg font-bold bg-blue-500 w-5/6 h-full text-white tracking-widest px-10 py-1 rounded-full">ABOUT US</h2> 
       </div>
        <h1 className="text-blue-600 text-3xl font-bold mb-1">We’re Leading Software Development & Digital Marketing Agency!</h1>
        <div className="flex mb-4">
         {/* sdfdfsdf */}
          
        </div>
        <p className="leading-relaxed font-medium">We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the people and that platforms where interests converge.We develop the relationships that underpin the next phase in your</p>
        <div className="flex mt-6 items-center  border-b-2 border-gray-100 mb-2">
          <div className="flex gap-10">
              <StyleButton text="GET STARTED"/>
              <StyleButton text="KNOW MORE"/>
          </div>
         
        </div>
        
        <div className="flex items-center ">
          <img alt="ecommerce" width={150} className="" src="mission.jpg"/>
         <span className="font-bold text-blue-600 text-lg">Our mission is to become the best Software Company in Town!</span>
        </div>
        
      </div>

       <div className=" flex-1 ">
      <img alt="ecommerce" className=".max-w-full   object-cover object-center rounded" src="1532.jpg"/>
      </div>
    </div>
  </div>
</section>
);

export default About;

