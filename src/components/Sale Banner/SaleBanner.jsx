import React from 'react'
import './SaleBanner.css';
import OfferImage from '../../assets/offer_img.png';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function SaleBanner() {
  return (
    <section className='arazona-sale-banner'>
        <img src={OfferImage} className='arazona-sale-banner-img' alt="offer" />
        <div className="arazona-sale-banner-content">
            <h1>Weekly Sale on 60% Off All Products</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt esse nulla minus id dolores fugit a accusantium, iure exercitationem quia!</p>
            <button>Checkout Now <DoubleArrowIcon style={{marginLeft:'2%'}}/> </button>
        </div>
    </section>
  )
}
