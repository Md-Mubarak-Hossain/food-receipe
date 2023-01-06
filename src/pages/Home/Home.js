import React, { useContext, useState } from 'react';
import Login from '../../account/Login';
import { AuthContext } from '../../contexts/Context';
import Recipes from './Recipes';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='p-5'>
                          <Recipes></Recipes>       
        </div>
    );
};

export default Home;