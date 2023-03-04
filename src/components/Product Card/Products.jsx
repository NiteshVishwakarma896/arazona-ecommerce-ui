import React from 'react';
import './FeaturedProduct.css';

export default function Products(props) {
  const {id,title,description,price,img} = props.data;
  return (
    <div className='arazona-featured-card' id={id}>
        <img src={img} className='arazona-featured-card-img' alt="product" />
        <div className="arazona-featured-card-content">
            <h3>{title}</h3>
            <p className='truncate'>{description}</p>
            <span>$ {price}</span>
            <div className="card-btn-row">
              <button className='arazona-featured-card-content-btn'>Buy Now</button>
              <button className='arazona-featured-card-content-btn-outline'><i className='bi bi-heart'></i>{' '}{' '}Add to Wishlist</button>
            </div>
        </div>
    </div>
  )
};
