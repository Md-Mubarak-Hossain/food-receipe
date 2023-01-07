import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/Context';
import ReactPlayer from 'react-player/youtube';
const Edit = () => {
    const orderData=useLoaderData()
    const[order,setOrder]=useState(orderData)
    const{ strMeal,strMealThumb,strCategory,strIngredient1,strIngredient2,strIngredient3,
        strIngredient4,strIngredient5,strIngredient6,strInstructions,
        strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,
        strSource,strTags,strYoutube}=order;
    const {loading,user}=useContext(AuthContext)
    const handleSub=e=>{
        e.preventDefault()
        const form=e.target;
        fetch(`https://food-server-three.vercel.app/orders/${order._id}`,{
            method:'PATCH',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.modifiedCount>0){
                form.reset();
                alert('successfully updated')
            }
        })
    }
    const onChangeHandle=e=>{
        e.preventDefault()
        const form=e.target;
        const value=form.value;
        const field=form.name;
        const newData={...order}
        newData[field]=value;
        setOrder(newData);
    }
    if(loading){
        return <p>loading...</p>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-2 w-full my-5'>
          <div className="flex-shrink-0 w-full px-5 place-items-start text-justify">
                 <h2 className="card-title">{strMeal}</h2>
                <p>{strCategory}</p>
            <figure><img src={strMealThumb} alt="" className='w-full rounded-xl'/></figure>
          </div> 
          <form onSubmit={handleSub} className="flex-shrink-0 w-full">
            <h2 className='uppercase text-xl font-bold'>Update your Recipe</h2>
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                     <span className="label-text">User Name</span>
                    </label>
                    <input type="text" name='user'onChange={onChangeHandle} defaultValue={user?.displayName} className="input input-bordered" readOnly/>
                </div>
                <div className="form-control">
                    <label className="label">
                     <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' onChange={onChangeHandle} defaultValue={user?.email} className="input input-bordered" readOnly/>
                </div>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter recipe name</span>
                    </label>
                        <input type="text" name='strMeal' onChange={onChangeHandle} placeholder={strMeal} className="input input-bordered" />
            </div>
            <h2>Ingredients</h2>
            <div className='grid grid-cols-2 gap-2'>
                <div className="form-control">
                        <input type="text" onChange={onChangeHandle} defaultValue={strIngredient1} name='strIngredient1' className="input input-bordered" />
                </div>
                <div className="form-control">
                        <input type="text" onChange={onChangeHandle} defaultValue={strIngredient2} name='strIngredient2' className="input input-bordered" />
                </div>
                <div className="form-control">
                        <input type="text" onChange={onChangeHandle} defaultValue={strIngredient3} name='strIngredient3' className="input input-bordered" />
                </div>
                <div className="form-control">
                        <input type="text" onChange={onChangeHandle} defaultValue={strIngredient4} name='strIngredient4' className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
            <button className="btn bg-blue-900 uppercase">Update</button>
        </div>
    </div>
</form>
 </div>
    );
};

export default Edit;