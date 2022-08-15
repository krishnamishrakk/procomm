import React from 'react'
import "./Top.css"
import { useNavigate } from 'react-router-dom';
import Cardsdata from '../Navbar/CardsData';
// import Mobile from './Navgating/Mobile';
const TopMobile = () => {
  let store = useNavigate();
  const product = Cardsdata.filter((list) => list.category === "Mobile")
  return (
    <div>

      <h1 className='lap'>Mobiles</h1>
      <div className='accsbox homebrands'>
        {product.filter((value) => value.price >= 16000).map((elements) => {
          return (
            <div className='homebrand d-flex'>
              <div className='accscard' onClick={() => store(`/Mobile`)}>
                <img className='accsimage' src={elements.imageurl} alt="" style={{ width: "200px", textAlign: "center" }} />
                <h5 className="card-title">{elements.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{elements.category}</h6>
                <p>Rs.{elements.price}</p>

              </div>
            </div>

          )

        })}

      </div>
    </div>
  )
}

export default TopMobile
