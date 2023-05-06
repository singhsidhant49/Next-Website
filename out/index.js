import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <section className='w-100'>
        <Image src={require('../public/images/home/hero.png')} className='w-100 h-auto' style={{ objectFit: 'contain' }} />
      </section>

      <section className='mb-5'>

        <div className='container d-flex flex-column align-items-center mt-5'>

          <p >OUR HIGHLIGHTS</p>
          <h4>Why Should You Order & Schedule Tiffin's !</h4>

          <div className='row mt-5'>

            <div className='col-12 col-sm-12 col-md-6   d-flex align-items-center justify-content-center'>
              <Image src={require('../public/images/home/vector.png')} className='' layout='responsive'


                style={{ objectFit: 'contain' }} />

            </div>


            <div className='col-12 col-sm-12 col-md-6  d-flex align-items-center flex-column justify-content-center gap-3 '>


              <h3>Enjoy homemade meals without the hassle of cooking and cleaning</h3>

              <p>Tired of cooking and cleaning? Let our tiffin service provider take care of it! Our expert chefs use fresh, locally-sourced ingredients to prepare delicious and healthy meals that can be delivered right to your doorstep. With easy online ordering and delivery options, you can enjoy homemade meals without any of the work or cleanup. Try us today and enjoy the convenience and flavor of our tiffin service provider!</p>



            </div>

          </div>

          <div className='row mt-5'>


            <div className='col-12 col-sm-12 col-md-6  d-flex align-items-center flex-column justify-content-center gap-3 '>


              <h3>Never worry about meal planning again with our convenient tiffin service</h3>

              <p>At [name of your website], we understand the importance of healthy and timely meals in your busy life. Our carefully curated network of tiffin service providers offers a variety of delicious and nutritious options, from traditional home-cooked meals to fusion cuisine, all delivered to your doorstep. With our easy-to-use scheduling system, you can plan ahead for the week and enjoy fresh, hot meals at your desired mealtime without any hassle. Say goodbye to the stress of meal planning and let us take care of your daily nutritional needs. Order your tiffin today and experience the convenience and health benefits of our tiffin service!</p>



            </div>

            <div className='col-12 col-sm-12 col-md-6   d-flex align-items-center justify-content-center'>

              <Image src={require('../public/images/home/food2.png')} className='' layout='responsive'


                style={{ objectFit: 'contain' }} />

            </div>

          </div>

          <div className='row mt-5'>

            <div className='col-12 col-sm-12 col-md-6   d-flex align-items-center justify-content-center'>

              <Image src={require('../public/images/home/food3.png')} className='' layout='responsive'


                style={{ objectFit: 'contain' }} />

            </div>


            <div className='col-12 col-sm-12 col-md-6 d-flex align-items-center flex-column justify-content-center gap-3 '>


              <h3>Experience a variety of delicious homemade meals delivered straight to your doorstep</h3>

              <p>Indulge in a diverse and flavorful selection of homemade meals, Our tiffin service providers specialize in preparing a variety of delicious and healthy meals, From savory curries to wholesome salads and everything in between, our menu has something to satisfy every palate and dietary preference. Whether you're a vegetarian, vegan, or a meat lover, we've got you covered. With easy online ordering and flexible scheduling options, you can enjoy the convenience and comfort of homemade meals. Order now and discover the joy of flavorful and nutritious meals, made with love and care by our expert tiffin service providers.</p>



            </div>

          </div>

          <div className='row mt-5'>

            <div className='col-12 col-sm-12 col-md-6 d-flex align-items-center flex-column justify-content-center gap-3 '>


              <h3>Save time and effort by letting us take care of your daily meal needs</h3>

              <p>At [your company name], we believe that your time and energy are valuable. That's why we offer a convenient tiffin service that takes care of your daily meal needs. You won't have to worry about grocery shopping, meal prep, or cooking - we'll handle it all for you.  This means that you can save time and effort, and focus on the things that matter most to you. We offer a variety of healthy and delicious meal options to choose from, so you can enjoy a satisfying meal every day without any extra effort. Say goodbye to the stress of meal planning and preparation, and let us take care of it for you. Order your tiffin today and start enjoying the convenience of our service.!</p>



            </div>

            <div className='col-12 col-sm-12 col-md-6  d-flex align-items-center justify-content-center'>
              <Image src={require('../public/images/home/food4.png')} className='' layout='responsive' style={{ objectFit: 'contain' }} />

            </div>




          </div>

          <div className='row mt-5'>




            <div className='col-12 col-sm-12 col-md-6  d-flex align-items-center justify-content-center'>
              <Image src={require('../public/images/home/food5.png')} className='' layout='responsive' style={{ objectFit: 'contain' }} />

            </div>

            <div className='col-12 col-sm-12 col-md-6  d-flex align-items-center flex-column justify-content-center gap-3 '>


              <h3>Elevate your mealtime experience with healthy and tasty tiffin meals, freshly prepared by local chefs</h3>

              <p>At [your company name], we believe that mealtime should be an enjoyable experience. Our tiffin service providers use only the freshest and highest-quality ingredients to prepare each meal, ensuring that you receive a nutritious and delicious meal every time. Our local chefs are passionate about food and bring their expertise and creativity to each tiffin meal they prepare. With our tiffin service, you can enjoy a variety of healthy and tasty meal options that are sure to satisfy your taste buds. Say goodbye to boring and repetitive meals, and elevate your mealtime experience with our tiffin service. Order your tiffin today and taste the difference that freshly prepared, locally sourced ingredients can make.</p>



            </div>

          </div>

          <div>
            <button type="button" className="btn btn-dark py-2 px-4 rounded-pill">Start Ordering</button>
          </div>

        </div>

      </section>

      <section className='' style={{ height: '40%', background: '#343434' }} >

        <div className='container d-flex  align-items-center h-100' >

          <div className='row   '>

            <div className=" col-12 col-md-6 " >
                <h1 className='text-white' >Order Tiffin Anytime, Anywhere with Our App!</h1>

                <p className='text-white'>Order your favorite tiffin meals anytime, anywhere with our easy-to-use app. Enjoy convenience and flexibility at your fingertips - download now!</p>

                <div>

                <Image src={require('../public/images/home/button1.png')} className='w-10 h-auto mx-1' style={{ objectFit: 'contain' }} />

                <Image src={require('../public/images/home/google2.png')} className='w-10 h-auto' style={{ objectFit: 'contain' }} />

                </div>

             
            </div>

            <div className=' col-12 col-md-6' >

            </div>




          </div>

        </div>



      </section>


    </>
  )
}
