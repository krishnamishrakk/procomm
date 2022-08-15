import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Product from "../Product/Product";
import Order from "../Product/Order";
import Contactus from "../Product/Contactus";
import Error from '../Error/Error';
import Nav from './Nav';
import Mobile from '../Topproducts/Navgating/Mobile';
import Laptop from '../Topproducts/Navgating/Laptop';
import Fashion from '../Topproducts/Navgating/Fashion';
import Accesories from '../Topproducts/Navgating/Accesories';


const Routingpart = () => {
    return (
        <div>
            < BrowserRouter>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/About" element={<About />} />
                    <Route exact path="/Product" element={<Product />} />
                    <Route exact path="/Mobile" element={<Mobile />} />
                    <Route exact path="/Laptop" element={<Laptop />} />
                    <Route exact path="/Fashion" element={<Fashion />} />
                    <Route exact path="/Accesories" element={<Accesories />} />
                    <Route exact path="/Order" element={<Order />} />
                    <Route exact path="/Contactus" element={<Contactus />} />
                    <Route exact path="*" element={<Error />} />
                    <Route exact path="/cart/:id" element={<Order />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}
export default Routingpart