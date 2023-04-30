import { useGetPerticularTspProfileQuery, usePostRatingMutation } from '@/services/api';
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';


export default function PerticularTspProfile() {
  const router = useRouter()
  const { id } = router.query
  const { data: tsp, isLoading, isSuccess } = useGetPerticularTspProfileQuery(id)
  const [postRating] = usePostRatingMutation()

  // for rating
  const inputHandler = (event) => {

    const idd = tsp.id
    event.preventDefault()
    const body = new FormData()
    body.append("rating", event.target['rating'].value)
    body.append("review", event.target['review'].value)

    postRating(idd, body)

  }
  return (
    <div>

      <div className="bg-dark" style={{ height: '50px' }}>

      </div>

      <div>
        {isSuccess &&

          <div>
            {/* ==================================== */}

            <div className=' container mt-3' >

              <Image src={require('../../public/images/tsp/banner.png')} layout='responsive' className=' ' style={{ objectFit: 'contain' }} />

              <div className='row  mt-4' >

                <div className='col-12 col-md-6 p-5' style={{ borderTop: '2px solid gray', borderRight: '2px solid gray', borderBottom: '2px solid gray' }} >

                  <div className='d-flex flex-column gap-2' >

                    <span> </span>

                    <h3>Tiffin Service Provider Name</h3>
                    <span>Speciality In Business</span>
                    <span>Address of Tiffin Service Provider</span>
                    <span>Closed - 8AM (MORNING) - 10PM (MIDNIGHT) </span>

                    <div className=' d-flex justify-content-around mt-2'>
                      <button type="button" className="btn btn-secondary  px-5 rounded-pill">Direction</button>
                      <button type="button" className="btn btn-secondary  px-5 rounded-pill">Share</button>
                      <button type="button" className="btn btn-secondary  px-5 rounded-pill">Bookmark</button>
                    </div>

                  </div>



                </div>

                <div className='col-12 col-md-6  '>

                  <div className='row h-100' >

                    <div className='col-12 col-md-8  ' >

                      <div className='d-flex justify-content-around'>

                        <div><Image src={require('../../public/images/tsp/displaytopleft.png')} className=' ' style={{ objectFit: 'contain' }} /></div>
                        
                        <div><Image src={require('../../public/images/tsp/displaytopright.png')} className=' ' style={{ objectFit: 'contain' }} /></div>




                      </div>

                      <div className='d-flex justify-content-center mt-3'>
                        <Image src={require('../../public/images/tsp/displaybottom.png')} className=' ' style={{ objectFit: 'contain' }} />
                      </div>

                    </div>

                    <div className='col-12 col-md-4   ' >
                      <Image src={require('../../public/images/tsp/displayright.png')} className=' ' style={{ objectFit: 'contain' }} />
                    </div>

                  </div>





                </div>


              </div>



            </div>














            {/* ==================================== */}


            {/* <div key={tsp.id} className='card m-3 p-3'>
              <div className='d-flex justify-content-end'>
                <form onSubmit={inputHandler}>
                <h4>Give Rating</h4>
                  <input  type='number' name='rating'></input><br></br>
                  <input  type='text' name='review'></input><br></br>
                  <button type='submit' >s</button>
                </form>
              </div>
              <div>ID:{tsp.id}</div>
              <div>NAME:{tsp.name}</div>
              <div>ABOUT:{tsp.about}</div>


              {
                tsp.meals.map((meal) =>
                  <div className='card m-3 p-3 '>

                    <div>NAME:{meal.name}</div>
                    <div>PRICE:{meal.price}</div>

                  </div>

                )
              }
            </div> */}


          </div>

        }
      </div>
    </div>
  )
}
