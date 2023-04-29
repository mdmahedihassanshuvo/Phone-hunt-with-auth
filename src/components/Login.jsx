import React, { useContext, useRef } from 'react';
import { AuthProvider } from '../AuthProvider/UserProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { signIn, auth } = useContext(AuthProvider)
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef()
    console.log(emailRef)
    console.log(location)

    const from = location.state?.from?.pathname || '/'

    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then((result) => {
                const loggedInUser = result.user
                // console.log(loggedInUser)
                Swal.fire({
                    // position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
                navigate(from, { replace: true })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message
                })

            })
    }

    const forgetPassword = () => {
        const email = emailRef.current.value
        if (!email) {
            return (
                Swal.fire('Please enter your email address')
            )
        }
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire('Please check your email address')
            })
            .catch((err) => Swal.fire(err.message))
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <button className='text-left' onClick={forgetPassword}>Forgot password?</button>
                        </div>
                        <p className='text-sm'>Don't have any account please, <Link to='/register'><span className='text-blue-600 underline'>Sign Up</span></Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;