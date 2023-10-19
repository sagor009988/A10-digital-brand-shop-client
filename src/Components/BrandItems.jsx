import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandItems = () => {

    const [productBrand,setProductBrand]=useState()

    const products=useLoaderData()
    console.log(products);
    const {id}=useParams()
 

    useEffect(()=>{
        
        const filterBrandProduct=products.filter(product=>product.brand == id)
        console.log(filterBrandProduct);
        setProductBrand(filterBrandProduct)

    },[id,products])

    return (
        <div>
            <h1>total products : {products.length}</h1>
           
        </div>
    );
};

export default BrandItems;