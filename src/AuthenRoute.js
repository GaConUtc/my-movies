import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthenRoute = () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken ? <Outlet /> : <Navigate to={'/login'} />;
};

export default AuthenRoute;
