import React from 'react'
import Footer from '../Footer';
import "./Home.css"
import ImageSlider from '../SliderComp/ImageSlider';
import { SliderData } from '../SliderComp/SliderData';
import TopAccesories from '../Topproducts/TopAccesories';
import TopMobile from '../Topproducts/TopMobile';
import TopLaptops from '../Topproducts/TopLaptops';
import TopFashion from '../Topproducts/TopFashion';
import Support from '../Support/Support';
import Productslider from '../SliderComp/Productslider';

const Home = () => {

  return (

    <div>
      <ImageSlider slides={SliderData} />
      <TopAccesories />
     
      <div className='shop_now'>
        <video width="100%" height="400" controls autoPlay muted>
          <source src="https://d5glw3nnbe3pc.cloudfront.net/transcode/storyTeller/AWL7IGI88Y2SD/1637177630543/f12f47a1-0509-4728-98a7-1099eae67841/1637177832670sbv.mp4" />
        </video>
      </div>
      <TopMobile />
      <TopLaptops />
      <TopFashion />
      

      <div className='imagess'>
        <Support />
      </div>

      <Productslider />


      <Footer />
    </div>
  )
}

export default Home