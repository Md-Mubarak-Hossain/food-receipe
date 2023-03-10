import React, { useContext, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Context';
import Footer from '../pages/shared/Footer';
import logo from '../components/assets/logo.png';
import { BsSun, BsMoon } from 'react-icons/bs';
import {HiShoppingCart} from 'react-icons/hi';
const Main = () => {
    const { user, logOut, loading,shop } = useContext(AuthContext)
    const [them, setThem] = useState('light')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/'
    const logout = () => {
        logOut()
            .then(() => {
                alert('Do you want to log out???')
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    const menu = <>

        {
            them === 'night' ?
                <button onClick={() => setThem('light')} className='p-1 justify-center items-center place-items-center rounded-3xl  bg-white block'><BsSun className='text-red-800 text-lg'></BsSun></button>
                :
                <button onClick={() => setThem('night')} className='p-1 justify-center items-center place-items-center rounded-3xl  bg-black block'><BsMoon className='font-bold text-white text-lg'></BsMoon></button>

        }
        <li className='mx-1'><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>wish list</Link></li>
        <li className='mx-1'><Link to='/shop' className='flex'><HiShoppingCart className='text-xl text-orange-600 relative block'></HiShoppingCart><p className='text-blue-900 font-bold absolute  top-0 right-1 mx-0'>
            {user && user.uid?<>{shop}</>:<>0</>}
            </p></Link></li>
        {
            user && user.uid ?
                <button onClick={() => logout()} className="btn bg-blue-900 btn-md mx-1">Log out</button>
                :
              <>
               <div className="dropdown dropdown-hover mx-1">
                    <label tabIndex={0} className={` m-1`}>Account</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='mx-1 uppercase'><Link to='/signup'>sign up</Link></li>
                        <li className='mx-1 uppercase'><Link to='/login'>log in</Link></li>
                    </ul>
                </div> 
              </>
        }
    </>
    if (loading) { return <p>loading...</p > }
    return (
        <>
            <div data-theme={them}>
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <div className="w-full navbar shadow-lg shadow-violet-800">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 flex">
                                <img src={logo} alt="" className='mx-1' />
                                <h2 className='uppercase font-bold text-xl text-purple-900'>food recipes</h2>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal uppercase place-items-center text-sm">
                                    {menu}
                                </ul>
                            </div>
                        </div>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 uppercase place-items-center text-sm">
                            {menu}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;