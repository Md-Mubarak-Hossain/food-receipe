import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Context';
import Shop from '../shop/Shop';
const Add = () => {
    const{loading,user}=useContext(AuthContext)
    const[recipes,setRecipes]=useState([])
    const[recipe,setRecipe]=useState([])

    useEffect(()=>{
        fetch('https://food-server-three.vercel.app/recipes')
        .then(res=>res.json())
        .then(result=>{
            setRecipes(result)
        })
      
    },[])
const handleAdd=(id)=>{
        fetch(`https://food-server-three.vercel.app/recipes/${id}`)
        .then(res=>res.json())
        .then(result=>{
            setRecipe(result)
        })
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
   email, strMeal,strMealThumb,strCategory,strIngredient1,strIngredient2,strIngredient3,
    strIngredient4,strIngredient5,strIngredient6,
    strInstructions,
    strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,
    strSource,strTags,strYoutube,
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
        }
    })



}
    if(loading){return <p>loading...</p>}
    return (
       <>
         <button onClick={()=>handleAdd(recipe._id)} className="btn bg-blue-900">Add to cart</button>
       </>
    );
};

export default Add;