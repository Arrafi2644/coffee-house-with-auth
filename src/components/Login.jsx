import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        console.log(user);

        loginUser(email, password)
        .then(result => {
            console.log(result);
            
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            console.log(lastSignInTime);
            const updatedInfo = {lastSignInTime, email}

            fetch(`http://localhost:5000/users`, {
                method: "PATCH",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(updatedInfo)
            })
            .then(result => {
                console.log(result);
            })
            .then(data => {
                console.log(data);
                
            })

            navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='max-w-7xl w-11/12 mx-auto my-10 '>
            <div className="hero bg-base-200 min-h-screen rounded-lg">
                <div className="hero-content flex-col">
                    <div className="text-center w-full md:w-3/5">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full md:w-3/5 shrink-0 shadow-2xl">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='mt-4'>Don't have any account ? <Link to='/signUp' className='text-primary underline'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;