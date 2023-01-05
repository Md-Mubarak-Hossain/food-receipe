    import React from 'react';
    import six from '../../../components/assets/side.jpg'
    import bangla from '../../../components/assets/six/bangla.jpg'
    import bangla2 from '../../../components/assets/six/bangla2.jpg'
    import math from '../../../components/assets/six/math.png'
    import english from '../../../components/assets/six/english.png'
    import ict from '../../../components/assets/six/ict.jpg'
    import science from '../../../components/assets/six/science.jpg'
    import krisi from '../../../components/assets/six/krisi.jpg'

    const Six = () => {
        const books=[
            {img:bangla,name:'bangla'},
            {img:bangla2,name:'bangla 2nd'},
            {img:math,name:'math'},
            {img:english,name:'english'},
            {img:ict,name:'ict'},
            {img:science,name:'science'},
            {img:krisi,name:'Krishi'}
        ];
    return (
        <div className='w-full flex'>
            <div className='w-full'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-4'>
                  <div className='h-full card lg:pt-10'>
                    <img src={six} alt=""/>
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

    export default Six;