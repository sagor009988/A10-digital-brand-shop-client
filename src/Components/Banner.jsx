import React from 'react';

const Banner = () => {
    return (
        <div className='h-[80vh] my-5 bg-green-300'>
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="/public/bannner4.jpg " className="w-full h-[80vh]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/banner3 (2).jpg" className="w-full h-[80vh]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/banner3.jpg" className="w-full h-[80vh]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  
 
  </div>
</div>
        </div>
    );
};

export default Banner;