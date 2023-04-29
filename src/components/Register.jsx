import React, { useContext } from 'react';
import { AuthProvider } from '../AuthProvider/UserProvider';
import { sendEmailVerification } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const {createUser, loginWithGoogle} = useContext(AuthProvider)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
        createUser(email,password)
        .then(result => {
            const loggedInUser = result.user
            // console.log(loggedInUser)
            Swal.fire({
                // position: 'top-end',
                icon: 'success',
                title: 'Sign up in successfully',
                showConfirmButton: false,
                timer: 1500
              })
            emailVerification(result.user)
            navigate(from, {replace: true})
            form.reset()
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message
              })
        })
    }

    const emailVerification = (user)=>{
        return (
            sendEmailVerification(user)
            .then(()=>{
                Swal.fire('Please verify your email address')
            })
            .catch(error=> console.log(error.message))
        )
    }
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Sign Up now!</h1>
                </div>
                <form onSubmit={handleForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <p className='text-sm'>Already have account please, <Link to='/login'><span className='text-blue-600 underline'>Login</span></Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </form>
                <div className='flex flex-col gap-2'>
                <button onClick={loginWithGoogle} className="btn btn-active btn-primary">Login With Google</button>
                <button className="btn btn-active btn-secondary">Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Register;