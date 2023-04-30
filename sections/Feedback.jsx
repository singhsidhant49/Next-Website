'use client';

import { StyleButton } from "../components/StyleLink";

const Feedback = () => (
  <section className="text-gray-600 body-font">
    <div className=" px-3 py-10 flex flex-wrap">

      <div className="flex flex-col flex-wrap sm:px-0 md:px-16   lg:py-6  md:w-full lg:w-3/5  lg:text-left text-center ">


        <div className=" xl:px-10">

        <div className="text-sm text-white font-bold py-1 mb-5 px-5 md:w-1/2 bg-blue-600 rounded-full tracking-widest">WHY CHOOSE US?</div>
       <h1 className="text-blue-600   text-2xl font-bold mb-5">OUR COMMITMENT TO YOU</h1>

{/* 
        <p className="my-5">A proven process for delivering high-quality software development and digital marketing services</p> */}
    
        <div className="flex mb-4 gap-5 flex-col md:flex-row  border-2 items-center py-5 lg:px-5 xl:px-10 lg:gap-12 xl:gap-20 " >
         
          <div className="">
            <div className="flex items-center justify-center w-16  h-16  rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>

          <div>
           Quality Products - Our high-quality products meet and exceed industry standards. We use the latest technology to build reliable and durable products that are tailored to meet your needs.
          </div>

          
        </div>

       <div className="flex mb-4 gap-5 flex-col md:flex-row  border-2 items-center py-5 lg:px-5 xl:px-10 lg:gap-12 xl:gap-20 " >
         
          <div className="">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>

          <div>
           Exceptional Customer Service - Our dedicated customer support team prioritizes your satisfaction. We believe in building long-term relationships and providing a personalized and attentive experience.
          </div>

          
        </div>

        <div className="flex mb-4 gap-5 flex-col md:flex-row  border-2 items-center py-5 lg:px-5 xl:px-10 lg:gap-12 xl:gap-20 " >
         
          <div className="">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>

          <div>
           Competitive Pricing - We offer transparent and fair pricing, ensuring you get the best value for your money. Our pricing is competitive without compromising on quality or service.
          </div>

          
        </div>

        


       

        <div className="flex mt-2 items-center   border-gray-100 mb-2">
          <div className="flex gap-10">
            <StyleButton text="CHOOSE SERVICE" />
            <StyleButton text="KNOW MORE" />
          </div>

        </div>
        
        
        </div>







      </div>
      
      <div className="lg:w-2/5 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" className="object-cover object-center h-full w-full" src="mobile.png" />
      </div>

    </div>
  </section>
);

export default Feedback;


