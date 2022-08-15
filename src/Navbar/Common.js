import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Common.css"
import Footer from '../Footer'
const Common = (props) => {
    return (
        <>
            <div id='header' className=' details main-container'>

                <div className=' flex'>
                    <div className=''>
                        <h1>{props.name}</h1>
                        <p className=' mx-2'>
                            <h2 className='text-center bg-danger'>{props.title}</h2>
                            {props.tiltledisc}
                            <br />
                            {props.endpart}


                            <div className=''>
                                <NavLink to={props.web} className="btn-get-started">
                                    {props.btname}
                                </NavLink>
                            </div>
                        </p>
                    </div>

                    <div className='header-img'>
                        <img

                            src={props.image}
                            className=" imageac mx-2 animated rounded"
                            alt='homeimh'
                        />
                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Common