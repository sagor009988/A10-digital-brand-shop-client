import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {

    const [prodctDetails, setProductDetails] =useState()

    const products = useLoaderData()
    
    const { id } = useParams()

    useEffect(() => {
        const find= products.find(
          (product) => product._id == id
        );
       
        setProductDetails(find);
      }, [id, products]);
      
      console.log(prodctDetails);
 
    
    return (
        <div>
           <DetailsCard prodctDetails={prodctDetails}></DetailsCard>
        </div>
    );
};

export default Details;