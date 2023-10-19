import React from 'react';
import Brand from './Brand';


const Brands = ({brands}) => {
    
    return (
        <div className='py-10 text-center'>
            <h1 className='text-3xl underline font-bold text-orange-600 '>Our Available Brands </h1>
            <p className='text-xl font-semibold text-pink-600 pt-3'>"Excellence in Service: Our Commitment to Your Satisfaction"</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
            {
                brands.map(brand=><Brand key={brand.id} brand={brand}></Brand>)
            }
            </div>
        
            
        </div>
    );
};

export default Brands;