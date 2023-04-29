import React, { useContext } from 'react';
import { AuthProvider } from '../AuthProvider/UserProvider';
import { NavLink, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthProvider)
    const location = useLocation()

    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
};

export default PrivateRoute;