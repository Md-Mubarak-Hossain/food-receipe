import React, { useContext, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Context';
import Footer from '../pages/shared/Footer';
import logo from '../components/assets/logo.png';
import { BsSun, BsMoon } from 'react-icons/bs';
const Main = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [them, setThem] = useState('night')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/'
    const logout = () => {
        logOut()
            .then(() => {
                alert('log out')
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    const menu = <>
        {
            them === 'night' ?
                <li className=' justify-center items-center place-items-center'><button onClick={() => setThem('light')} className='w-full btn btn-outline btn-white  justify-center items-center place-items-center rounded-3xl  bg-white block'><BsSun className='text-red-800 text-lg'></BsSun></button></li>
                :
                <li className=' justify-center items-center place-items-center'><button onClick={() => setThem('night')} className='w-full btn btn-outline btn-white  justify-center items-center place-items-center rounded-3xl  bg-black block'><BsMoon className='font-bold text-white text-lg'></BsMoon></button></li >

        }
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/library'>Library</Link></li>
        {
            user && user.uid ?
                <li className='flex place-items-center'><button onClick={() => logout()} className='btn btn-sm bg-violet-800 hover:bg-violet-900 flex place-items-center rounded font-semibold text-gray-100'><p>Log out</p></button></li> :
                <li><Link to='/signup'>sign up</Link></li>
        }
    </>
    if (loading) { return <p>loading...</p > }
    return (
        <>
            <div data-theme={them}>
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <div className="w-full navbar">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 flex">
                                <img src={logo} alt="" className='mx-1' />
                                <h2 className='uppercase'>AMAR Library</h2>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal uppercase place-items-center">
                                    {menu}
                                </ul>
                            </div>
                        </div>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 uppercase place-items-center">
                            {menu}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;