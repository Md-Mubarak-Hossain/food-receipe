import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Context';

const Recipes = () => {
    const{loading}=useContext(AuthContext)
    const[recipes,setRecipes]=useState([])
    useEffect(()=>{
        fetch('https://food-server-three.vercel.app/recipes')
        .then(res=>res.json())
        .then(result=>{
            setRecipes(result)
            console.log(result)
        })
      
    },[])
    console.log(recipes)
    if(loading){return<p>loading...</p>}
    return (
       <>
        <div className='flex flex-col justify-center items-center place-items-center'>
            <div className="form-control w-full lg:w-2/3 my-5 py-5">
                <label className="label">
                    <span className="label-text">Enter recipes or food name here</span>
                </label>
                 <div className='flex place-items-center'>
                 <input type="text" placeholder="Type here" className="input input-bordered w-full mx-0" />
                <label className="label mx-0">
                <button className="btn btn-active btn-primary mx-0">search</button>
                </label>
                 </div>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
            { recipes.map(recipe=><div key={recipe._id} className="hover:bg-base-200 hover:shadow-2xl shadow-violet-800 p-5 hover:p-0">
             <figure> <img src={recipe.strMealThumb} alt="" className=''/></figure>
                <div className="p-1">
                    <h2 className="text-xl font-bold">
                        {recipe?.strMeal.slice(0,20)}
                    </h2>
                    <p>{recipe?.strInstructions.slice(0,200)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>)}
        </div>
       </>
    );
};

export default Recipes;