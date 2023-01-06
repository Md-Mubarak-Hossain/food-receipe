import React from 'react';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from '../account/Signup';
import Login from '../account/Login';
import Protect from './Protect';

import Details from '../pages/Home/Details';
import Shop from '../pages/shop/Shop';
import Edit from '../pages/shop/Edit';
import Recipes from '../pages/Home/Recipes';
import Demo from '../components/Demo/Demo';
const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://food-server-three.vercel.app/recipes')

                },
                {
                    path: '/recipes',
                    element: <Recipes></Recipes>,
                    loader: () => fetch('https://food-server-three.vercel.app/recipes')

                },
                {
                    path: '/demo',
                    element: <Demo></Demo>,
                    loader: () => fetch('https://food-server-three.vercel.app/recipes')

                },
                {
                    path: '/shop',
                    element: <Shop></Shop>,
                    loader: () => fetch('https://food-server-three.vercel.app/recipes')

                },
                {
                    path: '/details/:id',
                    element: <Details></Details>,
                    loader: ({ params }) => fetch(`https://food-server-three.vercel.app/recipes/${params.id}`)
                },
                {
                    path: '/edit/:id',
                    element: <Edit></Edit>,
                    loader: ({ params }) => fetch(`https://food-server-three.vercel.app/orders/${params.id}`)
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>,

                },
                {
                    path: '/login',
                    element: <Login></Login>,
                    loader: () => fetch('https://food-server-three.vercel.app/users')

                },
                {
                    path: '/demo',
                    element: <Demo></Demo>,
                    loader: () => fetch('https://food-server-three.vercel.app/recipes')

                },
                {
                    path: '/login/:id',
                    element: <Login></Login>,
                    loader: ({ params }) => fetch(`https://food-server-three.vercel.app/users/${params.id}`)

                },
               
            ]
        },
        {
            path: '/*',
            element: <div>404</div>
        }
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Router;