import React from "react";

const DetailsCard = ({ prodctDetails }) => {
  const { brand, image, type, price, rating, text, _id } = prodctDetails || {};


  const handleAddTOCart=e=>{
    e.preventDefault()
    const form=e.target;

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
            <div className="">
            <button onClick={handleAddTOCart} className="btn btn-primary mr-5">ADD TO CART</button>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
