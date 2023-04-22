'use client';

import { StyleButton } from "../components/StyleLink";

const Feedback = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-10 mx-auto flex flex-wrap">

      <div className="flex flex-col flex-wrap  lg:px-10 lg:py-6  lg:w-1/2 lg:pl-12 lg:text-left text-center ">


        <h1 className="text-blue-600   text-3xl font-bold mb-5">Softwares which stands still the wave of time!</h1>


        <p className="my-5">We develop the relationships that underpin the next phase in your organization’s growth. We do this by discerning the We develop the relationships</p>




        <div className="flex mb-6 gap-5 flex-col md:flex-row  border-2 items-center py-5 px-10 md:gap-20 " >
          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis architecto atque, cupiditate pariatur doloribus ratione, error ipsum deleniti incidunt
          </div>
        </div>






        <div className="flex mb-6 gap-5 flex-col md:flex-row  border-2 items-center py-5 px-10 md:gap-20 " >
          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis architecto atque, cupiditate pariatur doloribus ratione, error ipsum deleniti incidunt
          </div>
        </div>

        <div className="flex mb-6 gap-5 flex-col md:flex-row  border-2 items-center py-5 px-10 md:gap-20 " >
          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis architecto atque, cupiditate pariatur doloribus ratione, error ipsum deleniti incidunt
          </div>
        </div>



        <div className="flex mt-2 items-center   border-gray-100 mb-2">
          <div className="flex gap-10">
            <StyleButton text="CHOOSE SERVICE" />
            <StyleButton text="KNOW MORE" />
          </div>

        </div>








      </div>
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" className="object-cover object-center h-full w-full" src="mobile.png" />
      </div>

    </div>
  </section>
);

export default Feedback;


