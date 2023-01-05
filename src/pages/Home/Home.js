import React, { useContext, useState } from 'react';
import Login from '../../account/Login';
import { AuthContext } from '../../contexts/Context';
import Video from '../contents/Video';
import Start from '../library/Start';
import Sidebar from './Sidebar';

const Home = () => {
    const { user } = useContext(AuthContext)
    const[content,setContent]=useState(<Video></Video>)
    return (
        <div>
            <div className="drawer drawer-mobile flex">
                <div className="drawer-side  px-5">
                    {
                        user && user.uid ?
                            <Sidebar setContent={setContent}></Sidebar>
                            :
                            <Login></Login>
                    }
                </div>
                <div className="drawer-content flex flex-col  text-justify p-10 w-full bg-violet-900 text-gray-100 overflow-y-scroll">
                 
                    {/* <!-- Page content here --> */}
                    {
                        user && user.uid ?
                           <div>
                           {content}
                           </div>
                            :
                            <div className='w-full h-screen'>
                                <Start></Start>
                            </div>
                    }
                </div>

            </div>
        </div >
    );
};

export default Home;