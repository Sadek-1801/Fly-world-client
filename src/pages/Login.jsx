import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import AuthHooks from '../hooks/AuthHooks';

const Login = () => {
    const { signIn, googleLogin, githubLogin } = AuthHooks()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                if (result.user) {
                    toast.success('Successfully Login')
                    navigate(from)
                }
            })
            .catch(() => {
                toast.error('Try Again')
            })
    }
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(() => {
                toast.success('Successfully Login')
                navigate(from)
            })
            .catch(() => {
                toast.error('Try Again')
            })
    }
    const handleGithubSignIn = () => {
        githubLogin()
            .then(result => {
                if (result.user) {
                    toast.success('Successfully Login')
                    navigate(from)
                }
            })
            .catch(() => {
                toast.error('Try Again')
            })
    }


    return (
        <div>
            <Helmet>
                <title>NomedNest || Login</title>
            </Helmet>
            <div className="flex flex-col items-center">
                <h1 data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" className="text-2xl font-bold text-center">Please Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto md:w-2/3 lg:w-1/3">
                    <div data-aos="fade-left" data-aos-delay="1600" className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1700" className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                        {errors.password && <span className='text-red-600'>This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1800" className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div data-aos="zoom-in" data-aos-delay="1900" className='flex items-center gap-3'><span className='font-bold text-xl'>Login with:</span>
                    <button onClick={handleGoogleSignIn} className="btn btn-circle"><FcGoogle className='text-3xl' />
                    </button>
                    <button onClick={handleGithubSignIn} className="btn btn-circle"><FaGithub className='text-3xl' />
                    </button>
                </div>
                <p className="font-bold text-2xl">Do not have an account? <Link to={'/register'} className="text-blue-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;