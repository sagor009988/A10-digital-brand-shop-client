import React from "react";

const DetailsCard = ({ prodctDetails }) => {
  const { brand, image, type, price, rating, text, _id } = prodctDetails || {};
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
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
