import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    if(loding){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;