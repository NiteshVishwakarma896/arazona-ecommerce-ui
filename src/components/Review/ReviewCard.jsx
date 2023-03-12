import React from 'react';
import './Review.css';

export default function ReviewCard() {
  return (
    <div className='review-container'>
        <div className='review-container-header'>
            <h4>Blake Ruiz</h4>
            <span><i className="bi bi-star-fill yellow-color"></i> 5 Stars</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut nobis dolores quisquam optio nam.</p>
    </div>
  )
}
