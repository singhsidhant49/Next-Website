'use client';

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WhatsNew = () => {
    const [name, setName] = useState('newsletter');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('newsletter');
    const [number, setNumber] = useState('newsletter');
    const [loading, setLoading] = useState(false);
    const [subject, setSubject] = useState('newsletter');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("hhiiiis")
        try {
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message, number, subject }),
          });
          const data = await response.text();
          console.log(data);
          toast.success('Email sent successfully!');
          setLoading(false);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setNumber('');
        } catch (error) {
          console.error(error);
    
          toast.error('Internal Server Error!');
          setLoading(false);
        }
      };
      return(
    <section>

        <div className="relative bg-violet-600">
            <div className="absolute inset-x-0 bottom-0">
                <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
                    <path
                        d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
                    </path>
                </svg>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                    <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        Subscribe to our newsletter
                    </h2>
                    <p className="mb-6 text-base text-indigo-200 md:text-lg">
                        Want to stay ahead of the competition? Our newsletter delivers the latest updates and expert advice on software development and digital marketing strategies.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                        <input
                            placeholder="Email"
                            required=""
                            name="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-3  transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                        />
                        <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">{loading ? 'Sending...' : 'Subscribe'}</button>
                        
                    </form>
                    <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{ zIndex: 2 }}
            />
                    <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                        Stay informed and take your business to the next level - subscribe now!
                    </p>
                    <a href="/" aria-label="Scroll down"
                        className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                            <path
                                d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    </section>


)}



export default WhatsNew;
