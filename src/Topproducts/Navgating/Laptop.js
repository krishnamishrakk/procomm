import React from 'react'
import "../Top.css"
import Cardsdata from '../../Navbar/CardsData'
import { useDispatch} from 'react-redux'
import { ADD } from '../../Redux/actions/action';
const Laptop = () => {
    const dispatch = useDispatch();
const send=(e)=>{
console.log(e);
dispatch(ADD(e))
}
    const product = Cardsdata.filter((list) => list.category === "Laptop")
    return (
      <div>
  

        <div className='accsbox homebrands'>
          {product.map((items) => {
            return (
              <div className='homebrand d-flex'>
                <div className='accscard' >
                  <img className='accsimage' src={items.imageurl} alt=""  style={{width:"200px" , textAlign:"center"} }/>
                  <h5 className="card-title">{items.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{items.category}</h6>
                  <p>Rs.{items.price}</p>
  
                
                <div className=''>
                      <button className=" btn btn-info mx-4  buttoninfo" onClick={()=>send(items)}>Add To Cart</button>
                      <button 
                      className=" btn btn-primary  buttoninfo"
                      
                      >Buy Now</button>
                  </div>
              </div>
              </div>
            )
  
          })}
  
        </div>
      </div>
    )
}

export default Laptop
