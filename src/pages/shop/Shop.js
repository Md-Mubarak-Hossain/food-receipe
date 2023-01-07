import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Context';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {GrDocumentUpdate} from 'react-icons/gr';

const Shop = () => {
    const{loading,setShop,user}=useContext(AuthContext)
    const [orders,setOrders]=useState([])
    setShop(orders.length)
    useEffect(()=>{
        fetch('https://food-server-three.vercel.app/orders',{
            method:'GET',
    headers:{
        'content-type':'application/json'
    }    
    })
    .then(res=>res.json())
    .then(result=>{
        const userOrder=result.filter(order=>order.email===user.email)
        setOrders(userOrder)
        orders()

    })
},[])


 const handleDelete=(id)=>{
    const proceed=window.confirm('Are you sure delete this recipe???')
    if(proceed){
        fetch(`https://food-server-three.vercel.app/orders/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
        console.log(id)
        if(result.deletedCount>0){
            const remainOrders=orders.filter(d=>d._id!==id)
            setOrders(remainOrders)
            alert('successfully deleted')
            orders()
        }
    })
    }
 }
if(loading)
{
    return <p className='w-full min-h-screen text-blue-800  flex flex-col place-items-center'>loading...</p>
}
    return (
        <div className='w-10/12 mx-auto lg:px-10 my-5'>
         <h2 className='text-xl uppercase font-semibold my-5 '> Your total recipe: {orders.length}</h2>
           {orders.map(order=><div key={order._id}>
                <div className='bg-violet-400 rounded-lg hover:bg-violet-600 hover:shadow-2xl hover:shadow-purple-700'>
                <div className='grid grid-cols-3  border-b m-5 place-items-center px-10 py-4'>
                    <div className='w-full'>
                        <div className='w-32 h-32 rounded-full flex flex-col justify-center items-center place-items-center bg-violet-200'>
                            <Link to={`/edit/${order._id}`}>
                                <GrDocumentUpdate className='text-7xl font-bold text-blue-800'></GrDocumentUpdate>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center place-items-center'>
                        <div>
                            <img src={order.strMealThumb} alt="" className='w-24 rounded'/>
                        </div>
                        <h2 className='text-xl text-white'>{order.strMeal}</h2>
                        <h2 className='text-xl text-white'>{order.email}</h2>
                    </div>
                   <div className='w-full flex justify-end'>
                        <div className='w-32 h-32 rounded-full bg-red-200 flex flex-col justify-center items-center place-items-center'>
                                <button onClick={()=>handleDelete(order._id)} className='mx-2'>
                                    <RiDeleteBin6Line className='text-7xl font-semibold text-red-500'>
                                    </RiDeleteBin6Line>
                                </button>
                        </div>
                   </div>
                </div>
                </div>
           </div>
           
           )

           }
        </div>
    );
};

export default Shop;