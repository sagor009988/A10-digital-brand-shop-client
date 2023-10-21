import { data } from "autoprefixer";
import React from "react";
import swal from "sweetalert";


const DetailsCard = ({ prodctDetails }) => {
  const { brand, image, type, price, rating, text, _id } = prodctDetails || {};


  const handleAddTOCart=e=>{
    e.preventDefault()
    const saveValue={ brand, image, type, price, rating, text}
   
    fetch('https://brand-shop-server-five-mu.vercel.app/productAdd',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(saveValue)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        swal("Product Addeded to cart successfully", "Check My Cart", "success");
      }
    })
    

  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{type}</h1>
            <h1 className="text-3xl font-bold">Brand : {brand}</h1>
            <p className="py-6">
              {text}
            </p>
            <p>Price : {price} BDT</p>
            <div >
            <form > 

            <button onClick={handleAddTOCart} className="btn btn-primary mr-5">ADD TO CART</button>
          
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
