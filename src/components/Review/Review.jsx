import React from 'react';
import './Review.css';
import Box from '@mui/material/Box';
import ReviewCard from './ReviewCard';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Review() {
    const [value, setValue] = React.useState(2);
    return (
        <div className='reviews-container' style={{padding:"2% 0%"}}>
            <div>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
            <div className="review-form">
                <h2>Add a Review</h2>
                <div className='review-form-rating'>
                    <h4>Your Rating:</h4>
                    <Rating name="simple-controlled" value={value} style={{width:'fit-content'}} onChange={(event, newValue) => { setValue(newValue); }} />
                </div> 
                <div className="review-form-content">
                    <input type="text" placeholder='Your Full name' />
                    <textarea placeholder='Review' rows="5"></textarea>
                    <button className='submit-btn'>Submit</button>
                </div>
            </div>
        </div>
    )
}
