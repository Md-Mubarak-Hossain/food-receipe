import React from 'react';
import { Link } from 'react-router-dom';
import Six from './Books/Six';
import Story from './Books/Story';
import Job from './Books/Job';
import Other from './Books/Other';
import Seven from './Books/Seven';
import Eight from './Books/Eight';
import Ten from './Books/Ten';
import Eleven from './Books/Eleven';
import Admission from './Books/Admission';
import BSc from './Books/BSc';


const LibraryNav = ({ setBook }) => {
    return (
        <div className='w-full lg:flex justify-center flex-wrap uppercase'>
            <ul className='menu menu-horizontal'>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link> <button onClick={()=>setBook(<Six/>)}className='btn btn-link btn-xs text-xs'>Six</button> </Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link> <button onClick={()=>setBook(<Seven/>)}className='btn btn-link btn-xs text-xs'>Seven</button> </Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link> <button onClick={()=>setBook(<Eight/>)}className='btn btn-link btn-xs text-xs'>Eight</button></Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link>  <button onClick={()=>setBook(<Ten/>)}className='btn btn-link btn-xs text-xs'>ix-x</button>  </Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link>  <button onClick={()=>setBook(<Eleven/>)}className='btn btn-link btn-xs text-xs'>xi-xii</button>  </Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link>  <button onClick={()=>setBook(<Admission/>)}className='btn btn-link btn-xs text-xs'>Admission</button>  </Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link>  <button onClick={()=>setBook(<BSc/>)}className='btn btn-link btn-xs text-xs'>B.Sc</button>  </Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link>  <button onClick={()=>setBook(<Job/>)}className='btn btn-link btn-xs text-xs'>Job</button>  </Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link>  <button onClick={()=>setBook(<Story/>)}className='btn btn-link btn-xs text-xs'>Story</button>  </Link></li>
                <li className='rounded font-bold flex flex-col place-items-center justify-center items-center'><Link>  <button onClick={()=>setBook(<Other/>)}className='btn btn-link btn-xs text-xs'>Other</button>  </Link></li>
               
            </ul>
        </div>
    );
};

export default LibraryNav;