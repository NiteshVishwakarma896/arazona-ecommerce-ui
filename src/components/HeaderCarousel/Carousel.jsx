import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css';
import BannerImg from '../../assets/banner_img.png';

export default function Carousel() {
  return (
    <OwlCarousel className='owl-theme' loop dots={false} items={1} margin={10} center nav>
        <div className='arazona-header-carousel-item'>
            <div className='item-left'>
                <h1>Wood & Cloth Sofa</h1>
                <p className='truncate-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti suscipit corporis aspernatur porro unde. Ad quos earum quibusdam ut molestias, saepe debitis sequi eligendi modi deserunt accusamus eveniet asperiores, deleniti iure provident architecto aliquam blanditiis voluptas, facere dignissimos? Neque.</p>
                <button>Buy Now</button>
            </div>
            <img src={BannerImg} className='item-img-banner hidden-mobile' alt="Banner Image" />
        </div>
        <div className='arazona-header-carousel-item'>
            <div className='item-left'>
                <h1>Wood & Cloth Sofa</h1>
                <p className='truncate-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti suscipit corporis aspernatur porro unde. Ad quos earum quibusdam ut molestias, saepe debitis sequi eligendi modi deserunt accusamus eveniet asperiores, deleniti iure provident architecto aliquam blanditiis voluptas, facere dignissimos? Neque.</p>
                <button>Buy Now</button>
            </div>
            <img src={BannerImg} className='item-img-banner hidden-mobile' alt="Banner Image" />
        </div>
        <div className='arazona-header-carousel-item'>
            <div className='item-left'>
                <h1>Wood & Cloth Sofa</h1>
                <p className='truncate-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti suscipit corporis aspernatur porro unde. Ad quos earum quibusdam ut molestias, saepe debitis sequi eligendi modi deserunt accusamus eveniet asperiores, deleniti iure provident architecto aliquam blanditiis voluptas, facere dignissimos? Neque.</p>
                <button>Buy Now</button>
            </div>
            <img src={BannerImg} className='item-img-banner hidden-mobile' alt="Banner Image" />
        </div>
    </OwlCarousel>
  )
}
