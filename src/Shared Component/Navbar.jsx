
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
const navi=<>


<NavLink><li><a>Home</a></li></NavLink>
<NavLink><li><a>About</a></li></NavLink>
<NavLink><li><a>Blog</a></li></NavLink>
<NavLink><li><a>Contact</a></li></NavLink>


</>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold text-gray-500 shadow bg-base-100 rounded-box w-52">
                       {navi}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-gray-10 text-2xl"><IoHomeOutline />Dream <span className="text-[#bcc72a]">House</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-gray-500">
                    {navi}
                   
                </ul>
            </div>
            <div className="navbar-end">
                <Link><button className="btn btn-sm rounded-sm ml-3 bg-[#bcc72a] ">Logout</button></Link>
                <Link><button className="btn btn-sm rounded-sm ml-3 bg-[#bcc72a] ">Login</button></Link>
                <Link><button className="btn btn-sm rounded-sm ml-3 bg-[#bcc72a] ">Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;