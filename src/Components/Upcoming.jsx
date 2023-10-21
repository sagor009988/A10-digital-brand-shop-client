import React from "react";
import { Link } from "react-router-dom";

const Upcoming = () => {
  return (
    <div>
        <h1 className='text-center py-5 text-3xl font-bold bg-stone-900 text-white'>Our Upcoming Services Loading</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Up coming ....</h1>
            <p className="py-6">
            Augmented Reality (AR) and Virtual Reality (VR): AR and VR technologies were gaining traction, with applications in gaming, education, and various industries. Companies like Oculus (owned by Facebook) and Microsoft were making strides in this area.
            </p>
            <Link to={'/upComing'}>
            <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
