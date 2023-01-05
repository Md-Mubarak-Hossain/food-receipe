import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/Context';

const Protect = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) { return <p>loading...</p> }
    if (user && user.uid) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }}
            replace>
        </Navigate>
    );
};

export default Protect;