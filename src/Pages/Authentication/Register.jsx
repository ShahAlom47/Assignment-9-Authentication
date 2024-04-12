import { Link } from "react-router-dom";
import Navbar from "../../Shared Component/Navbar";
import { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Auth Provider/AuthProvider";
import auth from "../../firebase.config";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImGoogle } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { Helmet} from 'react-helmet-async';





const Register = () => {
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)
    const [passError, setPassError] = useState(null)
    const [showPass, setShowPass] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();


    const { githubLogin, googleLogin, userRegister } = useContext(AuthContext);



    const registerHandel = (e) => {
        // reset msg 
        setErrorMsg('')
        setSuccessMsg('')
        setPassError('')

        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get('email')
        const name = data.get('name')
        const photo = data.get('photo')
        const password = data.get('password')

        console.log(photo);



        if (password.length < 6) {
            setErrorMsg('Password must be 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMsg('Use an uppercase letter')
            return
        }
        else if (!/[a-z]/.test(password)) {
            setErrorMsg('Use an lowercase letter')
            return
        }




        userRegister(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => { })
                    .catch((error) => {
                        const errorMessage = error.message;
                        setErrorMsg(errorMessage)
                    });

                toast.success('User created successfully ')
                setSuccessMsg('User created successfully')

                setTimeout(() => { navigate(location.state ? location.state : '/') }, 1500)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setErrorMsg(errorMessage)
                toast.error(errorMessage)
            });



    }

    const googleLoginHandel = () => {
        googleLogin()
            .then(() => {
                navigate(location.state ? location.state : '/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });


    }
    const githubLoginHandel = () => {
        githubLogin()
            .then(() => {
                navigate(location.state ? location.state : '/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });


    }


    return (
        <div className="bg-white min-h-screen">
            <Navbar color={'text-gray-500'}></Navbar>
            <Helmet>
                <title>Dream House/register</title>
            </Helmet>

            <div className=" lg:w-6/12 w-10/12 m-auto border-2 rounded-xl mt-24 p-8">

                <h1 className="text-xl  font-bold"> Create an account</h1>

                <form onSubmit={registerHandel} className="mt-6" >

                    <div className="p-4 flex  flex-col">
                        <label htmlFor="name" className=" font-bold p-1">Name</label>
                        <input className="p-2 border-t-2 " type="text" name="name" id="name" placeholder="Your Name" />
                    </div>
                    <div className="p-4 flex  flex-col">
                        <label htmlFor="email" className=" font-bold p-1">Email</label>
                        <input className="p-2 border-t-2" type="email" name="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="p-4 flex  flex-col">
                        <label htmlFor="photo" className=" font-bold p-1">Your Photo URL</label>
                        <input className="p-2 border-t-2" type="text" name="photo" id="photo" placeholder="Your Photo URL" />
                    </div>
                    <div className="p-4 flex  flex-col">
                        <label htmlFor="password" className=" font-bold p-1">Password</label>
                        <div className="relative">
                            <input className="p-2 border-t-2 w-full" type={showPass ? 'password' : 'text'} name="password" id="password" placeholder="Your Password" />
                            <h5 onClick={() => setShowPass(!showPass)} className="font-semibold absolute top-4 right-5">{showPass ? <FaEye /> : <FaEyeSlash />} </h5>
                        </div>
                        <p className="text-red-500">{passError}</p>
                    </div>






                    <div className="p-4 flex  flex-col">
                        <p className="text-red-400">{errorMsg} </p>
                        <p className="text-green-400">{successMsg} </p>
                        <input className="btn bg-[#bcc72a] rounded-sm w-full font-bold mt-3" type="submit" value="Create An Account" />
                    </div>

                </form>
                <div >

                    <h1 className="font-semibold text-center">Already have an account?
                        <Link to={'/login'}><button className="btn btn-link">Login</button></Link></h1>
                </div>

            </div>



            <div className='my-8   '>
                <hr className='border-t-2 border-gray-400 w-6/12 m-auto' />
                <p className=' relative -top-3 left-1/2 font-semibold p-1 border-2  border-gray-600 bg-slate-100 rounded-lg inline'>OR</p>
            </div>

            <div className=" md:w-8/12 lg:w-6/12 m-auto px-6 mb-10 flex flex-col gap-3 ">
                <button onClick={googleLoginHandel} className="btn btn-outline px-2 rounded-full"> <ImGoogle className=" text-red-500  w-6 h-6" /> Continue With Google </button>
                <button onClick={githubLoginHandel} className="btn btn-outline px-2 rounded-full"> <IoLogoGithub className="  w-8 h-8" /> Continue With Google </button>
            </div>

            <ToastContainer />

        </div>
    );
};

export default Register;