import Lottie from "lottie-react";
import login from "../../../assets/sign in.json";
import { FaGoogle } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import './Login.css'
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className="px-36">
            <div className="hero-content grid md:grid-cols-2 grid-cols-1">
                <div className="w-full">
                    <Lottie animationData={login} loop={true} />
                </div>
                {/* login form  */}
                <div className="w-full ">
                    <div className="">
                        <h1 className='text-center font-bold my-4 text-3xl text-primary'>Login here</h1>
                        <Form className="card-body  w-3/4 mx-auto rounded shadow-lg shadow-indigo-500/50" onSubmit={handleLogin}>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='email' placeholder="email" className="input login-input" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input login-input" />
                            </div>
                            <div className="form-control mt-6">
                                {/* <p className='text-red-500 mb-2'>{error}</p>
                        <p className='text-emerald-500 mb-2'>{success}</p> */}
                                <button className="btn btn-primary text-white" >Login</button>
                                <div className="divider">OR</div>
                                <button className='btn btn-outline btn-success'> <FaGoogle className='me-2 text-2xl'></FaGoogle> Login with Google</button>

                                <small className='mt-2 text-center'>New to this website? <Link to='/register' className='text-primary font-bold'>Create New Account</Link> </small>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;