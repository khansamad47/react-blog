import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'

export default function PrivateRoutes() {
    const { user } = useContext(UserContext);
    return (
        user ? <Outlet/> : <Navigate to="/login" />
    );
}
