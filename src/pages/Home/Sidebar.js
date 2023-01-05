import React from 'react';
import Admission from '../contents/Admission';
import Guide from '../contents/Guide';
import Hand from '../contents/Hand';
import Job from '../contents/Job';
import Preparation from '../contents/Preparation';
import Question from '../contents/Question';
import Suggestion from '../contents/Suggestion';
import TestPaper from '../contents/TestPaper';
import Video from '../contents/Video';

const Sidebar = ({setContent}) => {
    return (
        <div className='w-full flex flex-col justify-center items-center place-items-center'>
            <div className="card flex-shrink-0 w-full max-w-sm  flex flex-col text-justify justify-start items-center place-items-center y-10 py-5">
                <h2 className='uppercase lg:text-xl'>Contents</h2>
                <button onClick={()=>setContent(<Guide></Guide>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">Guid note</button>
                <button onClick={()=>setContent(<Hand></Hand>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">hand note</button>
                <button onClick={()=>setContent(<TestPaper></TestPaper>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">test paper</button>
                <button onClick={()=>setContent(<Video></Video>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">video series</button>
                <button onClick={()=>setContent(<Question></Question>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">question bank</button>
                <button onClick={()=>setContent(<Job></Job>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">job solutions</button>
                <button onClick={()=>setContent(<Suggestion></Suggestion>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">Suggestion</button>
                <button onClick={()=>setContent(<Preparation></Preparation>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">Preparation</button>
                <button onClick={()=>setContent(<Admission></Admission>)} className="rounded px-4 py-1 uppercase text-justify my-1 hover:bg-violet-800 lg:w-48 hover:text-white">Admission</button>
            </div>
        </div>
    );
};

export default Sidebar;