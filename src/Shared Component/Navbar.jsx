
import { useContext } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";
import { FaRegCircleUser } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
const Navbar = () => {
    const { user,userLogOut } = useContext(AuthContext);



    const navi = <>
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink to={'/userProfile'}><li><a>Update Profile</a></li></NavLink>
        <NavLink><li><a>Blog</a></li></NavLink>
        <NavLink to={'/'} ><li><a>Contact</a></li></NavLink>
    </>

    const userLogOutHandel =()=>{
        userLogOut()
        .then()
        .catch()

    }



   

    return (
        <div className="navbar bg-[#18171760] bb-[#ffffff60]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold text-gray-100 shadow bg-base-100 rounded-box w-52">
                        {navi}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-gray-100 text-2xl"><IoHomeOutline />Dream <span className="text-[#bcc72a]">House</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-gray-100">
                    {navi}

                </ul>
            </div>
           
            <div className="navbar-end">

           
                {
                    user? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full ">
                            {
                             
                              user.photoURL? <img alt='p' src={user.photoURL}/>: <FaRegCircleUser className="w-full h-full text-gray-300"></FaRegCircleUser>
                            }
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                      <Link to={"/userProfile"}>    <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge font-semibold  ">{user.displayName}</span>
                            </a>
                        </li></Link>
                        <li><a>Settings</a></li>
                        <li onClick={userLogOutHandel} ><a>Logout</a></li>
                    </ul>
                 
                </div>:<>
                <Link to={'/login'}><button className="btn btn-sm rounded-sm ml-3 bg-[#bcc72a] border-none ">Login</button></Link>
                <Link to={'/register'}><button className="btn btn-sm rounded-sm ml-3 bg-[#bcc72a] border-none ">Register</button></Link>
                </>
                }
                
                
            </div>
        </div>
    );
};

export default Navbar;