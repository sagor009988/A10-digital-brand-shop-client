import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandItemsCard from "./BrandItemsCard";
import Slider from "./Slider";

const BrandItems = () => {
  const [productBrand, setProductBrand] = useState();
  

  const products = useLoaderData();
 
  const { id } = useParams();

  useEffect(() => {
    const filterBrandProduct = products.filter(
      (product) => product.brand == id
    );
    
    setProductBrand(filterBrandProduct);
  }, [id, products]);
 

  return (
    <div>
     <Slider></Slider>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
      {
        productBrand?.map(bands=><BrandItemsCard key={bands._id} bands={bands}></BrandItemsCard>)
      }
      </div>
    </div>
  );
};

export default BrandItems;
