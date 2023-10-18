import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-[80vh]'>
            <div className=' text-center justify-center items-center'>
            <h2 className='text-6xl font-bold text-red-600'>404 Page is not Funding </h2>
            <Link to={'/'}>
        <button className='btn btn-warning'>Go Home</button>
        </Link>
        </div>
        
        </div>
    );
};

export default Error;