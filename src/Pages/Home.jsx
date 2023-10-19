import React from 'react';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
  
    const brands=useLoaderData()
    console.log(brands);
    return (
        <div>
           <Banner></Banner>
           <Brands brands={brands}></Brands>
        </div>
    );
};

export default Home;