import React from 'react';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from '../account/Signup';
import Login from '../account/Login';
import Library from '../pages/library/Library';
import Protect from './Protect';
import Start from '../pages/library/Start';
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
                    loader: () => fetch('https://library-psi.vercel.app/paper')

                },
                {
                    path: '/signup',
                    element: <Signup></Signup>,

                },
                {
                    path: '/login',
                    element: <Login></Login>,
                    loader: () => fetch('https://library-psi.vercel.app/creator')

                },
                {
                    path: '/demo',
                    element: <Demo></Demo>,
                    loader: () => fetch('https://library-psi.vercel.app/creator')

                },
                {
                    path: '/login/:id',
                    element: <Login></Login>,
                    loader: ({ params }) => fetch(`https://library-psi.vercel.app/creator/${params.id}`)

                },
                {
                    path: '/start',
                    element: <Start></Start>
                },
                {
                    path: '/library',
                    element: <Protect> <Library></Library></Protect>
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