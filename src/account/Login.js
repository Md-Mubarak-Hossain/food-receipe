import React from 'react';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Context';
import useTitle from '../hooks/useTitle';

const Login = () => {
    useTitle('Sign in')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/';
    const { logIn, googleLogIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSub = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 8) {
            return setError('Password minimum 8 characters')
        }
        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
                alert('successfully login')
            })
            .catch(error => {
                return setError('wrong email or password')
                // console.error(error)
            })
    }
    const googleSign = () => {
        googleLogIn()
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
                alert('successfully login')

            })
            .catch(err => {
                console.error(err)
                alert('failed login')
            })
    }

    return (
        <div className='w-full flex flex-col justify-center items-center place-items-center'>
            <div className="card flex-shrink-0 w-full max-w-sm  flex flex-col justify-center items-center place-items-center y-10 py-5">
                <h2 className='uppercase lg:text-xl'>Sign in form</h2>
                <form onSubmit={handleSub}>
                    <div className="hero">
                        <div className="hero-content flex-col">
                            <div className="form-control w-64">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control w-64">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <p className='text-xs text-error'>{error}</p>
                                </label>
                            </div>
                            <div className="form-control w-64 mt-2">
                                <button className="btn bg-violet-600 hover:bg-violet-900 uppercase">Sign in</button>
                                <p className='text-sm mt-2 justify-start text-justify'>Don't have an account?<Link to='/signup' className='link active-link active text-primary'>sign up</Link></p>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divider horizontal-divider mb-1'>or</div>
                <button onClick={() => googleSign()} className="btn btn-outline hover:bg-violet-800 w-64">Sign in with google</button>
            </div>
        </div>
    );
};

export default Login;