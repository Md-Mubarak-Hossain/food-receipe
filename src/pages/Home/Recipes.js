import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Context';
import Shop from '../shop/Shop';


const Recipes = () => {
    const{loading,user,shop}=useContext(AuthContext)
    const[recipes,setRecipes]=useState([])
    const[recipe,setRecipe]=useState([])

    useEffect(()=>{
        fetch('https://food-server-three.vercel.app/recipes')
        .then(res=>res.json())
        .then(result=>{
            setRecipes(result)
        })
      
    },[])

const handleSub=(e)=>{
    e.preventDefault()
    let search=e.target.search.value;

    fetch('https://food-server-three.vercel.app/recipes')
    .then(res=>res.json())
    .then(result=>{
        setRecipes(result)
        const p=result.filter(p=>p.strMeal.toLowerCase().includes(search.toLowerCase()))
        console.log(p)
        setRecipes(p)
        recipes();
    })
}

const handleAdd=(id)=>{
        fetch(`https://food-server-three.vercel.app/recipes/${id}`)
        .then(res=>res.json())
        .then(result=>{
            setRecipe(result)
        })
      if(!(user && user.uid)){
            return alert('Please login sir for add recipes')
        }
    const email=user.email;
    const strMeal=recipe.strMeal;
    const strMealThumb=recipe.strMealThumb;
    const strCategory=recipe.strCategory;
    const strIngredient1=recipe.strIngredient1;
    const strIngredient2=recipe.strIngredient2;
    const strIngredient3=recipe.strIngredient3;
    const strIngredient4=recipe.strIngredient4;
    const strIngredient5=recipe.strIngredient5;
    const strIngredient6=recipe.strIngredient6;
    const strInstructions=recipe.strInstructions;
    const strMeasure1=recipe.strMeasure1;
    const strMeasure2=recipe.strMeasure2;
    const strMeasure3=recipe.strMeasure3;
    const strMeasure4=recipe.strMeasure4;
    const strMeasure5=recipe.strMeasure5;
    const strMeasure6=recipe.strMeasure6;
    const strSource=recipe.strSource;
    const strTags=recipe.strTags;
    const strYoutube=recipe.strYoutube;
  
    const orderPost={
    email,strMeal,strMealThumb,strCategory,strIngredient1,strIngredient2,strIngredient3,
    strIngredient4,strIngredient5,strIngredient6,
    strInstructions,
    strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,
    strSource,strTags,strYoutube
    }
   
    fetch('https://food-server-three.vercel.app/orders',{
        method:'POST',
        headers:{
                    'content-type':'application/json'
                },
        body:JSON.stringify(orderPost)
                })
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
        if(result.acknowledged){
            alert('The recipe added successfully')
            Shop();
            shop();
        }
    })
}
//    shop()
    if(loading){return <p>loading...</p>}
    return (
       <>
        <div className='flex flex-col justify-center items-center place-items-center'>
            <form onSubmit={handleSub} className="form-control w-full lg:w-2/3 my-5 py-5">
                <label className="label">
                    <span className="label-text">Enter recipes or food name here</span>
                </label>
                 <div className='flex place-items-center'>
                 <input type="text" placeholder="Type here" className="input input-bordered w-full mx-0" name='search' />
                <label className="label mx-0">
                <button className="btn btn-active bg-blue-900 mx-0">search</button>
                </label>
                 </div>
            </form>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 md:grid-cols-2 gap-3 w-full'>
            { recipes.map(recipe=><div key={recipe._id} className="hover:shadow-2xl shadow-violet-800 lg:p-2 hover:p-0">
            {
                recipe.strMealThumb?
                <>
                <img src={recipe.strMealThumb} alt="" className='p-3'/>
                <div className="p-1">
                    <h2 className="text-lg font-bold">
                        {recipe?.strMeal}
                    </h2>
                   
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 md:grid-cols-2 py-4'>
                        <button className="btn btn-sm text-sm bg-blue-900 m-1 uppercase"><Link to={`details/${recipe._id}`}>See Details</Link></button>
                        <button onClick={()=>handleAdd(recipe._id)} className="btn btn-sm text-sm bg-blue-900 m-1 uppercase">Add to cart</button>
                    </div>
                </div>
                </>
                :
                <>
                
                </>
            }
            </div>)}
        </div>
       </>
    );
};

export default Recipes;