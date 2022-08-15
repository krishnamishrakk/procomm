import { IoMdCloseCircle } from 'react-icons/io'
import React from 'react';
import { Link } from 'react-router-dom'
const Sidebar = ({ close }) => {
  return (
    <>

      <span className='sidebarmenu '>
        <span  >

        </span>
        <div className="ulsidebarmenu">
          <IoMdCloseCircle color='red' size={50} onClick={() => close()} className="Cross" />

          <Link className="links mx-2 " to="/" style={{ textDecoration: 'none', color: 'white', display: "block" }} >Home</Link>


          <Link className="links mx-2 " to="/About" style={{ textDecoration: 'none', color: 'white', display: "block" }} >About</Link>


          <Link className="links mx-2 " to="/Product" style={{ textDecoration: 'none', color: 'white', display: "block" }} >Product</Link>



          <Link className="links mx-2 " to="/Contactus" style={{ textDecoration: 'none', color: 'white', display: "block" }} >Contact Us</Link>

        </div>



      </span>

    </>
  )
}

export default Sidebar;