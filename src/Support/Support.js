import React from 'react'
import refund from "./refund.svg"
import support from "./support.svg"
import shipping from "./shipping.svg"
import "./Support.css"
const Support = () => {
    return (
        <>
            <div className='maincontainer'>
                <div className="child">
                    <img src={shipping} alt="refundImg" />
                    <h2> FREE SHIPPING</h2>
                    <p>Get Free Shipping on all orders! And Upto 20% additional discount for new users </p>

                </div>
                <div className="child">
                    <img src={refund} alt="supportImg" />
                    <h2>100% REFUND</h2>
                    <p className='text-cnter'>we will refund the full price of the product or service the customer is returning.</p>

                </div>
                <div className="child">
                    <img src={support} alt="shippingImg" />
                    <h2>SUPPORT 24*7</h2>
                    <p>For any Help please contact us via mail or Toll Free No. 0512-22255588 </p>

                </div>
            </div>
        </>
    )
}

export default Support
