import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';


const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto  md:px-10 lg:px-20'>
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;