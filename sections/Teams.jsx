import Image from "next/image";

export const Teams = () => {
  return (
    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //   <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
    //     <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
    //       Know Our Team
    //     </p>
    //     <p className="text-base text-gray-700 md:text-lg">
    //       Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //       accusantium doloremque laudantium.
    //     </p>
    //   </div>
    //   <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
    //     <div className="grid sm:grid-cols-3">
    //       <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
    //         <img
    //           className="absolute object-cover w-full h-full rounded"
    //           src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
    //           alt="Person"
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
    //         <p className="text-lg font-bold">Oliver Aguilerra</p>
    //         <p className="mb-4 text-xs text-gray-800">Product Manager</p>
    //         <p className="mb-4 text-sm tracking-wide text-gray-800">
    //           Vincent Van Gogh’s most popular painting, The Starry Night.
    //         </p>
    //         <div className="flex items-center space-x-3">
    //           <a
    //             href="/"
    //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    //           >
    //             <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
    //               <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
    //             </svg>
    //           </a>
    //           <a
    //             href="/"
    //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    //           >
    //             <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
    //               <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="grid sm:grid-cols-3">
    //       <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
    //         <img
    //           className="absolute object-cover w-full h-full rounded"
    //           src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    //           alt="Person"
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
    //         <p className="text-lg font-bold">Marta Clermont</p>
    //         <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>
    //         <p className="mb-4 text-sm tracking-wide text-gray-800">
    //           Amet I love liquorice jujubes pudding croissant I love pudding.
    //         </p>
    //         <div className="flex items-center space-x-3">
    //           <a
    //             href="/"
    //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    //           >
    //             <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
    //               <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
    //             </svg>
    //           </a>
    //           <a
    //             href="/"
    //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    //           >
    //             <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
    //               <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="grid sm:grid-cols-3">
    //       <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
    //         <img
    //           className="absolute object-cover w-full h-full rounded"
    //           src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    //           alt="Person"
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
    //         <p className="text-lg font-bold">Alice Melbourne</p>
    //         <p className="mb-4 text-xs text-gray-800">Human Resources</p>
    //         <p className="mb-4 text-sm tracking-wide text-gray-800">
    //           Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
    //           elit.
    //         </p>
    //         <div className="flex items-center space-x-3">
    //           <a
    //             href="/"
    //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    //           >
    //             <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
    //               <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
    //             </svg>
    //           </a>
    //           <a
    //             href="/"
    //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    //           >
    //             <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
    //               <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="grid sm:grid-cols-3">
    //       <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
    //         <img
    //           className="absolute object-cover w-full h-full rounded"
    //           src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    //           alt="Person"
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
    //         <p className="text-lg font-bold">John Doe</p>
    //         <p className="mb-4 text-xs text-gray-800">Good guy</p>
    //         <p className="mb-4 text-sm tracking-wide text-gray-800">
    //           Bacon ipsum dolor sit amet salami jowl corned beef, andouille
    //           flank.
    //         </p>
    //         <div className="flex items-center space-x-3">
    //           <a
    //             href="/"
    //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    //           >
    //             <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
    //               <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
    //             </svg>
    //           </a>
    //           <a
    //             href="/"
    //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    //           >
    //             <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
    //               <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  <section className="text-gray-600 body-font overflow-hidden px-3 lg:px-28 ">

    <div className="bg-white py-6 sm:py-8 lg:py-12 ">
  <div className="mx-auto px-4 md:px-8">
  
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>
    </div>


    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">

      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
          <Image src={require('../public/1.png')}    loading="lazy"  className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">Vibhuti bhist</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Ui/Ux Designer</p>


          <div className="flex justify-center">
            <div className="flex gap-4">
              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <Image src={require('../public/2.png')}    loading="lazy"  className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">Somaya bijalwan</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Backend developer</p>


          <div className="flex justify-center">
            <div className="flex gap-4">
              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <Image src={require('../public/3.png')}    loading="lazy"  className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">Saurabh Uniyal</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">FullStack Developer/Founder</p>


          <div className="flex justify-center">
            <div className="flex gap-4">
              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <Image src={require('../public/4.png')}    loading="lazy"  className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">Karan thapliyal</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Marketing Expert</p>


          <div className="flex justify-center">
            <div className="flex gap-4">
              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <Image src={require('../public/5.png')}    loading="lazy"  className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">Riya rawat</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Graphic Designer</p>


          <div className="flex justify-center">
            <div className="flex gap-4">
              <a target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
      
        </div>
      </div>

      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <Image src={require('../public/6.png')}    loading="lazy"  className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">Rajat singh bhandari</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Frontend developer</p>

          <div className="flex justify-center">
            <div className="flex gap-4">
              <a target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a  target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
     

    </div>
  </div>
</div>
</section>
  );
};