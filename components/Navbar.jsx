'use client';
import React, { useState } from 'react'
import { HiMenu, GrLocation } from 'react-icons/hi';
import Link from 'next/link';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TfiEmail, TfiFacebook, TfiInstagram, TfiLocationPin, TfiPinterest, TfiTwitter, TfiYoutube } from "react-icons/tfi";
import { BiPhoneCall } from "react-icons/bi";
import { RiHomeFill } from 'react-icons/ri';

import { StyleButton, StyleFill, StyleHover } from './StyleLink';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const Navbar = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
   
      <nav className="shadow-md w-full flex flex-wrap justify-between  items-center bg-pink-200 gap-5   p-6" >
        <a href="https://flowbite.com" className="flex items-center ml-6">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        
        <div className="flex items-center  ">
          <div className='  bg-slate-300 h-8 w-8 flex justify-center items-center rounded mx-1'>
            <TfiFacebook className="cursor-pointer " />
          </div>
          <div className='  bg-slate-300 h-8 w-8 flex justify-center items-center rounded mx-1'>
            <TfiInstagram fontSize={20} className="cursor-pointer" />
          </div>
          <div className='  bg-slate-300 h-8 w-8 flex justify-center items-center rounded mx-1'>
            <TfiTwitter fontSize={20} className="cursor-pointer" />
          </div>
          <div className='  bg-slate-300 h-8 w-8 flex justify-center items-center rounded mx-1'>
            <TfiPinterest fontSize={20} className="cursor-pointer" />
          </div>
          <div className='  bg-slate-300 h-8 w-8 flex justify-center items-center rounded mx-1'>
            <TfiYoutube fontSize={20} className="cursor-pointer" />
          </div>
        </div>

        <div className='  flex gap-4  md:gap-8  flex-wrap ' >

          <div className="flex items-center gap-5  md:gap-8 ">
            <TfiLocationPin fontSize={25} className="cursor-pointer " />
            <p className=' '> <span className='text-xs'>Our Address</span> <br /> Dehradun  </p>
            <div className=" border-l-2   border-gray-400 h-10  "></div>
          </div>
          <div className="flex items-center gap-5 md:gap-8">
            <BiPhoneCall fontSize={25} className="cursor-pointer " />
            <p className=' '> <span className='text-xs'>Reach Us</span> <br /> +91 7983928641  </p>
            <div className=" border-l-2   border-gray-400 h-10  "></div>
          </div>
          <div className="flex items-center gap-5 md:gap-8">
            <TfiEmail fontSize={25} className="cursor-pointer  " />
            <p className=''> <span className='text-xs'>Email Us At</span><br />singhsidhant49@gmail.com</p>

          </div>
        </div>
      </nav>

      <nav className=" sticky top-0 w-full    bg-slate-50  z-20">
        <div className=" w-full flex flex-row justify-between items-center shadow-md   p-6">
          <HiMenu fontSize={40} className="cursor-pointer flex md:hidden" onClick={() => setToggleSidebar(true)} />

          <ul className="hidden md:flex flex-row font-medium mt-0 ml-5 space-x-5 text-sm w-full item-center">
            <li>
              {/* <Link href="#" className="" aria-current="page">Home</Link> */}
              <StyleFill text={'HOME'} />

            </li>
            <li>
              <StyleHover text={'ABOUT US'} />
            </li>
            <li>
              <StyleHover text={'SERVICES'} />
            </li>
            <li>
              <StyleHover text={'INDUSTRIES'} />
            </li>
            <li>
              <StyleHover text={'PORTFOLIO'} />
            </li>

            <li>
              <StyleHover text={'CONTACT'} />
            </li>

            <li className=''>
              <StyleButton text={'GET QUOTE'} />
            </li>
          </ul>

        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in top-0">
            <div className="absolute w-full flex justify-end items-center p-2 ">
              <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar />
          </div>
        )}
      </nav>

 
    </>
  )
}

export const Sidebar = ({ }) => {

  return (
    <div className="flex flex-col justify-between bg-white  overflow-y-scroll min-w-210 hide-scrollbar ">
      <Link
        href="/"
        className="flex px-5 gap-2 my-6 pt-1 items-center"
      >
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </Link>

      <ul class="space-y-2 font-medium">
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            <span class="ml-3">HOME</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">ABOUT US</span>
            <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">SERVICES</span>
            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">INDUSTRIES</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">PORTFOLIO</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">CONTACT US</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">GET FREE QUOTE</span>
            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
          </a>
        </li>

      </ul>

    </div>
  );
};


export default Navbar