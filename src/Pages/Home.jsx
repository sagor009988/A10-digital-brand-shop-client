import React from 'react';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import { useLoaderData } from 'react-router-dom';
import CustomerReview from '../Components/CustomerReview';
import Upcoming from '../Components/Upcoming';


const Home = () => {
  
    const brands=useLoaderData()
    console.log(brands);
    return (
        <div>
           <Banner></Banner>
           <Brands brands={brands}></Brands>
           <CustomerReview></CustomerReview>
           <Upcoming></Upcoming>
        </div>
    );
};

export default Home;