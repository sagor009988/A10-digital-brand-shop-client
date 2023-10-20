import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandItemsCard from "./BrandItemsCard";

const BrandItems = () => {
  const [productBrand, setProductBrand] = useState();
  

  const products = useLoaderData();
 
  const { id } = useParams();

  useEffect(() => {
    const filterBrandProduct = products.filter(
      (product) => product.brand == id
    );
    console.log(filterBrandProduct);
    setProductBrand(filterBrandProduct);
  }, [id, products]);
  console.log(productBrand);

  return (
    <div>
      <h1>total products : {products.length}</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
      {
        productBrand?.map(bands=><BrandItemsCard key={bands._id} bands={bands}></BrandItemsCard>)
      }
      </div>
    </div>
  );
};

export default BrandItems;
