import React, { useContext, useState } from 'react';
import Login from '../../account/Login';
import { AuthContext } from '../../contexts/Context';
import Recipes from './Recipes';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="flex">
                <div className="">
                    {
                        user && user.uid ?
                            <></>
                            :
                           <div className='w-1/5 px-5 border-r'>
                             <Login></Login>
                           </div>
                    }
                </div>
                <div className="flex flex-col  text-justify p-5 ">
                          <Recipes></Recipes>
                           
                </div>

            </div>
        </div >
    );
};

export default Home;