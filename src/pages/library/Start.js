import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Start.css'
const Start = () => {
    return (
        <div className='w flex flex-col place-items-center justify-center text-center items-center'>
            <div className='flex flex-col justify-center items-center place-items-center'>
                <Link to='/signup' className='text-white text-xl uppercase flex flex-col place-items-center justify-center text-center items-center'><h2>Get Started</h2><FaExternalLinkAlt className='text-3xl font-bold'></FaExternalLinkAlt></Link>
            </div>
        </div>
    );
};

export default Start;