import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import "./Style.css"
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../Redux/actions/action';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';



const Nav = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(pre => !pre)
    }

    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);
    const [anchorEl, setAnchorEl] = useState(null);
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id) => {
        dispatch(DLT(id))
    }


    const total = () => {
        let price = 0;
        getdata.map((ele) => {
            return(price = ele.price * ele.qnty + price)

        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])



    return (
        <div className='navbarstyles'>
            <nav className=" navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">All In One Store</a>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">

                            <li className="nav-item " >
                                <Link className="mx-2 " to="/" style={{ textDecoration: 'none', color: 'black' }} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="mx-2 " to="/About" style={{ textDecoration: 'none', color: 'black' }} >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="mx-2 " to="/Product" style={{ textDecoration: 'none', color: 'black' }} >Product</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="mx-2 " to="/Contactus" style={{ textDecoration: 'none', color: 'black' }} >Contact Us</Link>
                            </li>
                        </ul>

                    </div>

                    <Badge
                        color='primary'
                        badgeContent={getdata.length}
                        className='shoppingcart btn btn-dark'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <button className=" navbar-toggler menu_btn" >


                            <i class="fa-solid fa-bars" onClick={handleToggle} style={{ color: "white" }} > Menu</i>
                        </button>
                        <button className=" menu_btn" >
                            <i className="fa-solid fa-cart-shopping" onClick={handleClick}></i>
                        </button>
                    </Badge>


                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Product Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imageurl} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.name}</p>
                                                                <p>Price : ₹{e.price}</p>
                                                                <p>Quantity : {e.qnty}</p>
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i
                                    className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="https://www.statementclothing.net/images/cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>

                    }

                </Menu>
            </nav>
            {toggle && <Sidebar close={() => setToggle(false)} />}

        </div>
    )
}

export default Nav