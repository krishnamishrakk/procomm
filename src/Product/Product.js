import React, { useState } from 'react'
import Footer from '../Footer';
import CardsData from '../Navbar/CardsData';
import { useDispatch } from 'react-redux'
import { ADD } from '../Redux/actions/action';
const Product = () => {
  const [data] = useState(CardsData)
  const dispatch = useDispatch();
  const send = (e) => {
    console.log(e);
    dispatch(ADD(e))
  }



  return (
    <div className='main_card'>
      <div className="row d-flex justify-content-around align-items-center my-5 mx-2 mb-2">
        {
          data.map((element, id) => {
            return (
              <>

                <div className="card my-4" style={{ width: "20rem", height: "25rem" }}>
                  <div className='imagess text-center'>
                    <img src={element.imageurl} alt={element.category} style={{ width: "12rem", height: "12rem" }} />
                  </div>
                  <div className="card-body" style={{ width: "20rem", height: "15rem" }}>
                    <h5 className="card-title">{element.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{element.category}</h6>
                    <p className="card-text">{element.description}</p>
                    <p>Rs.{element.price}</p>

                  </div>
                  <div className=''>
                    <button className=" btn btn-info mx-4  buttoninfo" onClick={() => send(element)}>Add To Cart</button>
                    <button
                      className=" btn btn-primary  buttoninfo"

                    >Buy Now</button>
                  </div>
                </div>


              </>
            )
          })
        }
      </div>





      <Footer />
    </div>
  )
}

export default Product