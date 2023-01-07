import React, { useState } from 'react';

const Demo = () => {
    const products=[
        {meal:'cake',price:'200tk'},
        {meal:'ake',price:'200tk'},
        {meal:'cake',price:'200tk'},
        {meal:'cake',price:'200tk'},
        {meal:'ake',price:'200tk'},
        {meal:'cake',price:'200tk'},
    ]
   const[matched,setMatched]=useState(products)
   console.log(matched,matched.length)
const handleSub=(e)=>{
e.preventDefault()
const search=e.target.search.value;
console.log(search)
const p=products.filter(p=>p.meal.startsWith(search))
// console.log(p)
setMatched(p)

}
    return (
        <div>
            <form onSubmit={handleSub}>
                <input type="text" className='border'name='search'placeholder='enter food' />
                <button className='btn btn-primary'>search</button>
            </form>
        </div>
    );
};

export default Demo;