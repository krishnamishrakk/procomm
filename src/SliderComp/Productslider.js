import "./Slider.css"
import React, { useState } from 'react'
import CardsData from '../Navbar/CardsData'
import { ADD } from '../Redux/actions/action';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { useDispatch} from 'react-redux'
const Productslider = (slides) => {
    const dispatch = useDispatch();
    const send = (e) => {
        console.log(e);
        dispatch(ADD(e))
    }
    const [first, setFirst] = useState(0);

    const nextSlide = () => {
        setFirst(first === slides - 1 ? 0 : first + 1)
    }
    const prevSlide = () => {
        setFirst(first === 0 ? slides - 1 : first - 1)
    }
    console.log(first);

  
    return (
        <section className='slider featurslider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {CardsData.map((element, index) => {
                return (
                    <div key={index}>

                        {index === first && (
                            <div className=" feature card my-4" >
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
                                    <button className=" btn btn-info mx-4  buttoninfo"onClick={()=>send(element)} >Add To Cart</button>
                                    <button className=" btn btn-primary  buttoninfo">Buy Now</button>
                                </div>
                            </div>


                        )}


                    </div>
                )
            })}

        </section>
    )
}

export default Productslider;
