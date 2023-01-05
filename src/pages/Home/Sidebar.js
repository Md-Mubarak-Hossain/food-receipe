import React from 'react';


const Sidebar = ({setContent}) => {
    return (
        <div className='w-full flex flex-col justify-center items-center place-items-center'>
            <div className="card flex-shrink-0 w-full max-w-sm  flex flex-col text-justify justify-start items-center place-items-center y-10 py-5">
                <h2 className='uppercase lg:text-xl'>Contents</h2>
                <button onClick={()=>setContent()} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">Guid note</button>
                
            </div>
        </div>
    );
};

export default Sidebar;