import React from 'react';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Context';
import useTitle from '../hooks/useTitle';

const Signup = () => {
    useTitle('signup')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/';
    const { loading, createUser, googleLogIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSub = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (!password.includes(confirm)) {
            return setError('Password is not matched')
        }
        if (password.length < 8) {
            return setError('Password minimum 8 characters')
        }
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)

                const userInfo = {
                    email, password
                }
                fetch('https://library-psi.vercel.app/creator', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.acknowledged) {
                            form.reset();
                            console.log(result)
                            navigate(from, { replace: true })
                            alert('successfully account created')
                        }
                    })
                    .catch(error => {
                        console.error(error)
                        alert('Try again!!!')
                    })
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
        <div className='w-full flex flex-col justify-center items-center place-items-center my-5'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-violet-800 flex flex-col justify-center items-center place-items-center y-10 py-5">
                <h2 className='uppercase lg:text-xl'>Sign up form</h2>
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
                            </div>
                            <div className="form-control w-64">
                                <label className="label">
                                    <span className="label-text">Confirm password</span>
                                </label>
                                <input type="password" placeholder="confirm password" name='confirm' className="input input-bordered" required />
                            </div>
                            <label className="label">
                                <p className='text-xs text-error'>{error}</p>
                            </label>
                            <div className="form-control w-64 mt-6">
                                <button className="btn bg-violet-600 hover:bg-violet-900 uppercase">Sign Up</button>
                                <p className='text-xs'>already have an account <Link to='/login' className='link active-link active text-primary'>sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divider horizontal-divider mb-1'>or</div>
                <button onClick={() => googleSign()} className="btn btn-outline hover:bg-violet-800 w-64">log in with google</button>
            </div >
        </div >
    );
};

export default Signup;