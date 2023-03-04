import React from 'react';
import './Featured.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeaturedProduct from './../Product Card/FeaturedProduct';
import { featuredCarousel } from '../../utils/featuredCarousel';

//Owl Carousel Settings
const options = {
  loop: true,
  dots:false,
  items: 4,
  margin: 16,
  autoplay: true,
  autoplayTimeout: 8500,
  smartSpeed: 450,
  nav: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 3
      },
      1000: {
          items: 3
      },
      1200: {
          items: 4
      }
  }
};
export default function Featured(props) {
  const {headerTitle} = props;
  return (
    <section className='arazona-featured'>
        <h1 className='arazona-featured-title'>{headerTitle}</h1>
        <p>Our best class featured products that suits you</p>
        <div className="arazona-featured-content">
            <OwlCarousel id="featured-products" className='owl-theme' {...options} >
                {
                  featuredCarousel.map((e,i)=>(
                    <FeaturedProduct data={e} key={i} />
                  ))
                }
            </OwlCarousel>
            
        </div>
    </section>
  )
};
