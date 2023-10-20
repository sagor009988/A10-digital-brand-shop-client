import React from 'react';
import { Link } from 'react-router-dom';

const BrandItemsCard = ({bands}) => { 
  console.log(bands);
    const {brand,image,type,price,rating,text,_id}=bands || {}
    return (
        <div className=' '>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-60' src={image} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex justify-around items-center'>
   <h2 className="card-title text-orange-500 mr-5">{brand}</h2>
    <p className='text-red-500'>{type}</p> || 
    
   </div>
   <div>
   <p className='text-bold'>Price : {price}</p>
    <p>Rating : {rating}</p>
   </div>
   
    <div className='flex justify-between'>
    <button className="btn btn-secondary ">Details</button>
    <Link to={`/update/${_id}`}>
    <button className="btn btn-secondary ">Update</button>
    </Link>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default BrandItemsCard;