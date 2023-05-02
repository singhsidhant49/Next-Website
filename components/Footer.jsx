'use client';

import { TfiFacebook, TfiInstagram, TfiPinterest, TfiTwitter } from 'react-icons/tfi';

const Footer = () => (
  <footer>
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4 lg:-mt-2">
              <a href="/" className="text-black-800 inline-flex items-center gap-2 text-xl font-bold md:text-2xl" aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                Flowrift
              </a>
            </div>
            <p className="mb-6 text-gray-500 sm:pr-8">A Trusted Partner for Customized Development and Marketing Services to Maximize Your Business's Potential.</p>
            <div className="flex gap-4 ">
              <a href="/" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <TfiInstagram fontSize={20} className="cursor-pointer" />
              </a>
              <a href="/" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <TfiTwitter fontSize={20} className="cursor-pointer" />
              </a>

              <a href="/" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <TfiFacebook className="cursor-pointer" />
              </a>

              <a href="/" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <TfiPinterest fontSize={20} className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>
            <nav className="flex flex-col gap-4">
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
              </div>

              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
              </div>
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
              </div>
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
              </div>
            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>
            <nav className="flex flex-col gap-4">
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
              </div>
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
              </div>
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
              </div>
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
              </div>
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
              </div>
            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>
            <nav className="flex flex-col gap-4">
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
              </div>

              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
              </div>

              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
              </div>

              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
              </div>
            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>
            <nav className="flex flex-col gap-4">
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
              </div>

              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
              </div>
              <div>
                <a href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
              </div>
            </nav>
          </div>
        </div>
        <div className="border-t py-8 text-center text-sm text-gray-400">© 2023 - Shero Incrop Pvt Ltd. All rights reserved.</div>
      </footer>
    </div>
  </footer>
);

export default Footer;
