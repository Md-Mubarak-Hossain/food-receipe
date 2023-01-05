import React from 'react';
import side from '../../../components/assets/side.jpg'
import bangla from '../../../components/assets/ten/bangla.jpg'
import bangla2 from '../../../components/assets/ten/bangla2.jpg'
import bangla3 from '../../../components/assets/ten/bangla3.jpg'
import math from '../../../components/assets/ten/math.jpg'
import higher from '../../../components/assets/ten/higher.jpg'
import english from '../../../components/assets/ten/english.jpg'
import english2 from '../../../components/assets/ten/english2.jpg'
import ict from '../../../components/assets/ten/ict.jpg'
import chemistry from '../../../components/assets/ten/chemistry.jpg'
import physics from '../../../components/assets/ten/physics.jpg'
import biology from '../../../components/assets/ten/biology.jpg'
// import islam from '../../../components/assets/ten/islam.jpg'
// import bangladesh from '../../../components/assets/ten/bangladesh.jpg'

const Ten = () => {
    const books=[
        {img:bangla,name:'bangla'},
        {img:bangla2,name:'bangla 2nd'},
        {img:bangla3,name:'bangla soho pathh'},
        {img:math,name:'math'},
        {img:english,name:'english'},
        {img:english2,name:'english 2nd paper'},
        {img:ict,name:'ict'},
        {img:higher,name:'higher'},
        {img:chemistry,name:'chemistry'},
        {img:physics,name:'Physics'},
        {img:biology,name:'biology'},
        // {img:islam,name:'islam'},
        // {img:bangladesh,name:'bangladesh bishoporichoi'},
    ];
return (
    <div className='w-full'>
        <div className='w-full'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-4'>
              <div className='h-full card lg:pt-10'>
                <img src={side} alt=""/>
              </div>
                {books.map((book,index)=><div key={index}>
                    <div className="card">
                         <figure className="px-10 pt-10">
                            <img src={book.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                         <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase">{book.name}</h2>
                           <div className="card-actions">
                               <button className="btn btn-primary uppercase">Download</button>
                          </div>
                      </div>
                  </div>
                </div>) 
                }     
            </div>
        </div>
    </div>
);
};

export default Ten;