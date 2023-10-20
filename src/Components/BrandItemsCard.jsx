import React from 'react';

const BrandItemsCard = ({bands}) => { 
    const {brand,image,type,price,rating,text}=bands || {}
    return (
        <div className=' '>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-60' src={image} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex justify-around items-center'>
   <h2 className="card-title text-orange-500 mr-5">{brand}</h2>
    <p className='text-red-500'>{type}</p>
    <p className='text-bold'>Price : {price}</p>
   </div>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandItemsCard;