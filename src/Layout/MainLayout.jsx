import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer';



const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto  md:px-10 lg:px-20'>
                <Navbar></Navbar>
               <div className='my-10'>
               <Outlet></Outlet>
               </div>
               <Footer></Footer>
        </div>
    );
};

export default MainLayout;