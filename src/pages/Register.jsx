import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
import AuthHooks from '../hooks/AuthHooks';

const Register = () => {
    const { createUser, updateUserProfile } = AuthHooks()
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, fullName, photoURL } = data;
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Za-z]/.test(password)) {
            toast.error('Your password should have at least one upper and one lower case characters.')
            return;
        }
        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, photoURL)
                    .then(() => {
                        toast.success('Successfully registered')
                        navigate("/");
                    });
            })
            .catch(() => {
                toast.error('Please try again')
            })
    }
    return (
        <div>
            <Helmet>
                <title>NomedNest || Register</title>
            </Helmet>
            <div className="flex flex-col items-center">
                <h1 data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" className="text-2xl font-bold text-center">Please Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto md:w-2/3 lg:w-1/3">
                    <div data-aos="fade-left" data-aos-delay="1800" className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div data-aos="fade-left" data-aos-delay="2000" className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo Url" name="photo" className="input input-bordered" {...register("photoURL")} />
                    </div>
                    <div data-aos="fade-left" data-aos-delay="2200" className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div data-aos="fade-left" data-aos-delay="2400" className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className='relative'>
                            <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-600'>This field is required</span>}
                            <span className='absolute top-4 right-2' onClick={() => setShowPass(!showPass)}>
                                {showPass ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}
                            </span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="font-bold text-2xl">Already have an account? <Link to={'/login'} className="text-blue-600">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;