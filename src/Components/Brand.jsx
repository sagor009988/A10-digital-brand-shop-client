import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({brand}) => {
    const {title,image,id}=brand
    return (
        <div>
            <Link to={`/details/${id}`}>
            <div className="card  bg-slate-200 shadow-xl mt-6 gap-5 m-5 relative">
      <figure>
        <img className="h-60 w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
        <p>{title}</p>
    </div>
            </Link>
        </div>
    );
};

export default Brand;