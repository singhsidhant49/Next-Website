'use client';

import React from "react";
import { Link } from 'react-scroll';




const Explore = () => (
  <>
    <div id="section4" className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">

        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)" width="52" height="24"></rect>
              </svg>
            </span>
            OUR WORK / PORTFOLIO
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Check out some of our latest projects and see how we've helped our clients achieve their business goals.
          </p>
        </div>




      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="p1.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">flashfeed</p>
              <p className="text-sm tracking-wide text-gray-300">
                It is an application is a platform that allows users to upload, share, and view images. These platforms can be used for personal purposes, such as sharing photos with friends and family, or for professional purposes, such as displaying a portfolio of work or marketing products and services.  
              </p> 
            </div>              
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="p2.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Video Streaming App
              </p>
              <p className="text-sm tracking-wide text-gray-300">
              My video streaming app allows users to stream and watch their favorite videos online. With a vast collection of movies, TV shows, and other videos, users can easily search and discover new content to enjoy. The app provides a user-friendly interface that allows users to easily navigate and find what they're looking for
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="p4.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Comic Book</p>
              <p className="text-sm tracking-wide text-gray-300">
              A comic website is an online platform that provides access to a wide range of comics, manga, graphic novels, and other sequential art forms. It allows users to browse and read comics from various genres and publishers, as well as to engage with other comic enthusiasts through forums, reviews, and social media
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="p3.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Portfolio Website
              </p>
              <p className="text-sm tracking-wide text-gray-300">
              A portfolio website is an online platform that showcases your skills, experience, and accomplishments to potential clients or employers. It is a place where you can highlight your best work, share your story, and make a strong first impression.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="p5.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Gym Mangement System</p>
              <p className="text-sm tracking-wide text-gray-300">
              A gym management system is a software application that assists gym owners and managers in managing their gym operations. It provides tools for member management, scheduling, payment processing, staff management, and reporting etc.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="p6.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Landing Page
              </p>
              <p className="text-sm tracking-wide text-gray-300">
              A landing page for a business typically serves as the first point of contact between the business and its potential customers. It should provide a clear and concise overview of what the business does, its value proposition, and how it can solve the customers' problems
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="p7.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Affiliate Website</p>
              <p className="text-sm tracking-wide text-gray-300">
              An affiliate website is a platform that promotes other companies' products or services and earns a commission for any sales generated through the website's referral links. These websites typically feature product reviews, comparisons, and recommendations to help users make informed purchase decisions. 
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="p8.png"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
              E-commerce Website
              </p>
              <p className="text-sm tracking-wide text-gray-300">
              An e-commerce website is an online platform that enables businesses to sell products and services to customers over the internet. It is a virtual storefront that allows customers to browse and purchase products, make payments, and track their orders. 
              </p>
            </div>
          </div>
        </a>
      </div>
      {/* <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          EXPLORE MORE
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div> */}
    </div>




    {/* <section className="mb-5">

      <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: '50%', backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/154.jpg')", height: '350px' }}></div>

      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-800">
          <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{ marginTop: '-170px', background: 'hsla(0, 0%, 100%, 0.7)', backdropFilter: ' blur(30px)' }}>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer on the market <br /><span className="text-red-600">for your business</span></h1>

            <Link to="section5" className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</Link>


            <Link to="section5" className="inline-block px-7 py-3 text-red-500 bg-gray-200 font-medium text-sm leading-snug   uppercase rounded hover:text-white hover:bg-red-600 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</Link>
          </div>
        </div>
      </div>
    </section> */}
  </>
);

export default Explore;



