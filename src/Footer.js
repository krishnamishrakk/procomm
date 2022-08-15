import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"
// import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
    return (
        <div className='main-div' style={{ backgroundColor: "lightgrey" }}>
            <div className='container'>
                <div className='flex-items'>
                    <h1 className='shopheading'><i>All In One</i></h1>
                    <p>
                        All in one Store helps the people to save there time by going to shopping malls and waisting ther time .here we give the best product with the
                        less price as compared to market
                    </p>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <p>For connecting with us Please Follow Us on Social Medias</p>
                    {/* <p><FacebookIcon/></p> */}
                </div>
                <div>
                    <h3>Contact Us</h3>
                    Call us on :9294854245
                    Email Us : krishm9294@gmail.com

                </div>

            </div>
            <hr className='hr' />
            <div className='container'>
                <div>
                    <h3>Information</h3>
                    <NavLink className="NavLink" to="/Home">
                        Home
                    </NavLink>
                    <br />
                    <NavLink className="NavLink" to="/about">
                        About Us
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Privacy Policy
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Terms And Conditions
                    </NavLink><br />

                </div>
                <div>
                    <h3>Services</h3>
                    <NavLink className="NavLink" to="/">
                        Clothes
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Jwellary Items
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Top Brand Laptops
                    </NavLink><br />
                </div>
                <div>
                    <h3>UseFul Links</h3>
                    <NavLink className="NavLink" to="/">
                        Clothes
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Jwellary Items
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Top Brand Laptops
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Top Brand Mobiles
                    </NavLink><br />
                </div>
                <div>
                    <h3>UseFul Links</h3>
                    <NavLink className="NavLink" to="/">
                        Clothes
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Jwellary Items
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Top Brand Laptops
                    </NavLink><br />
                    <NavLink className="NavLink" to="/">
                        Top Brand Mobiles
                    </NavLink><br />
                </div>


            </div>
            <hr />
            <div className='copyright text-center'>
                Copyright © 2022 Material UI SAS
            </div>
            <hr />





        </div>
    )
}

export default Footer
