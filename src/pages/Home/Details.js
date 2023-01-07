import React, { useContext } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/Context';

const Details = () => {
    const recipe=useLoaderData()
    const{strMeal,strMealThumb,strCategory,strIngredient1,strIngredient2,strIngredient3,
        strIngredient4,strIngredient5,strIngredient6,strInstructions,
        strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,
        strSource,strTags,strYoutube}=recipe;
    const{shop,setShop}=useContext(AuthContext);
    console.log(recipe)
    return (
      <>
       {
        <div className="shadow-xl">
        <div className="card-body items-start text-justify">
          <h2 className="card-title">Recipe name: {recipe.strMeal}</h2>
          <h2 className="card-title"> category: {recipe.strCategory}</h2>
          <div className='grid grid-cols-2 max-h-96'>
            <p className='text-justify'>{recipe.strInstructions}</p>
            <figure> <img src={recipe.strMealThumb} alt="" className='max-h-80 rounded w-full px-4 pb-4 hover:p-0'/></figure>
          </div>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 max-h-96'>
            <div className='w-full'>
            <ReactPlayer url={recipe.strYoutube} controls>
            </ReactPlayer>
            </div>
            <div className='flex flex-col justify-center items-center place-items-center w-full'>
                    <h2 className='text-xl font-bold uppercase'>Ingredients</h2>
                    <div className='grid grid-cols-2'>
                        <p className='m-1'>1:{recipe.strIngredient1}</p>
                        <p className='m-1'>2:{recipe.strIngredient2}</p>
                        <p className='m-1'>3:{recipe.strIngredient3}</p>
                        <p className='m-1'>4:{recipe.strIngredient4}</p>
                        <p className='m-1'>5:{recipe.strIngredient5}</p>
                        <p className='m-1'>6:{recipe.strIngredient6}</p>
                    </div>     
                    <div className="card-actions flex pt-5">
                            <button onClick={()=>setShop(shop+1)} className="btn bg-blue-900 mx-2">Add to cart</button>
                            <button className="btn bg-blue-900">Order Now</button>
                    </div>
            </div>
          </div>
        </div>
      </div>
       }
      </>
    );
};

export default Details;