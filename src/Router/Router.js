import React from 'react';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from '../account/Signup';
import Login from '../account/Login';
import Protect from './Protect';
import Demo from '../Demo/Demo';
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