'use client';

const Insights = () => (
 <section className="text-gray-600 body-font overflow-hidden px-3 lg:px-28 ">
    <div className="bg-white py-6 sm:py-8 lg:py-12 ">
  <div className=" max-w-screen-2xl ">
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">

      <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Andras Vas" className="h-full w-full object-cover object-center" />
      </div>



      <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Don't let your business fall behind!</h2>

        <p className="mb-8 max-w-lg text-lg font-bold text-gray-600">Contact us today and let's work together to create innovative solutions that drive success for your business.</p>

        <div className="mt-auto">
          <a href="#" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Contact support</a>
        </div>
      </div>

    </div>
  </div>
    </div>
  </section>
);

export default Insights;
