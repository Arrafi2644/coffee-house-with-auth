import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const {signUpUser} = useContext(AuthContext)

   const handleSignUp = e => {
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = {name, email}
    // console.log(user);

    signUpUser(email, password)
    .then(result => {
        // console.log(result);

        fetch('https://coffee-house-server-iota.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User created successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })


    })
    .catch(error => {
        // console.log(error);
    })

   

   

   }


    return (
        <div className='max-w-7xl w-11/12 mx-auto my-10 '>
            <div className="hero bg-base-200 min-h-screen rounded-lg">
                <div className="hero-content flex-col">
                    <div className="text-center w-full md:w-3/5">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full md:w-3/5 shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='mt-4'>Already have an account ? <Link to='/login' className='text-primary underline'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;