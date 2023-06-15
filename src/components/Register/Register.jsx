import Lottie from "lottie-react";
import register from "../../assets/register.json";
import { Form, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
const Register = () => {
    const [error, setError] = useState('');
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoUrl.value;
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateProfile(user, name, photo);
                setError('');
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Sign Up Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                event.target.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="md:px-36 px-4">
            <div className="hero-content grid md:grid-cols-2 grid-cols-1">
                <div className="w-full">
                    <Lottie animationData={register} loop={true} />
                </div>
                {/* register form  */}
                <div className="w-full ">
                    <div className="">
                        <h1 className='text-center font-bold my-4 text-3xl text-primary'>Register here</h1>
                        <Form onSubmit={handleRegister} className="card-body w-full  md:w-3/4 mx-auto rounded shadow-lg shadow-indigo-500/50">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required name='name' placeholder="name" className="input login-input" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl</span>
                                </label>
                                <input type="text" name='photoUrl' required placeholder="photo url" className="input login-input" />
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-red-500 mb-2'>{error}</p>
                                <button className="btn btn-primary text-white" >Register</button>
                                <small className='mt-2 text-center'>Already have an account? <Link to='/login' className='text-primary font-bold'>Login</Link> </small>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;