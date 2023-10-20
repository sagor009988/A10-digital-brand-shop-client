import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const CustomerReview = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch('/customer.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
   
    return (
        <div>
            <h1 className='text-center py-5 text-5xl font-bold bg-orange-500 text-white'>Customer review About Service</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
            {
             reviews.map(review=><ReviewCard key={review.id} review={review}></ReviewCard>)
            }
            </div>
        </div>
    );
};

export default CustomerReview;