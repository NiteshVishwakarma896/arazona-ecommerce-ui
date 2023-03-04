import React from 'react'
import './Category.css';
import Almirah from '../../assets/category/almirah.jpg';
import Cabinet from '../../assets/category/cabinet.jpg';
import Chair from '../../assets/category/chair.jpg';
import Desk from '../../assets/category/desk.jpg';
import Sofa from '../../assets/category/sofa.jpg';
import TVUnit from '../../assets/category/tv-unit.jpg';

export default function Category() {
  return (
    <section className='arazona-category'>
        <h1 className='arazona-category-title'>Categories</h1>
        <p>Choose from variety of different categories</p>
        <div className="arazona-category-container">
           <div className="arazona-category-item">
            <img src={Almirah} className='arazona-category-item-img' alt="category" />
            <p>Almirah</p>
           </div>
           <div className="arazona-category-item">
            <img src={Cabinet} className='arazona-category-item-img' alt="category" />
            <p>Cabinet</p>
           </div>
           <div className="arazona-category-item">
            <img src={Chair} className='arazona-category-item-img' alt="category" />
            <p>Chair</p>
           </div>
           <div className="arazona-category-item">
            <img src={Desk} className='arazona-category-item-img' alt="category" />
            <p>Desk</p>
           </div>
           <div className="arazona-category-item">
            <img src={Sofa} className='arazona-category-item-img' alt="category" />
            <p>Sofa</p>
           </div>
           <div className="arazona-category-item">
            <img src={TVUnit} className='arazona-category-item-img' alt="category" />
            <p>TV Unit</p>
           </div>
        </div>
    </section>
  )
};
