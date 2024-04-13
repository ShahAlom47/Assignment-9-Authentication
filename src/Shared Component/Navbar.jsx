
import { useContext, useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);



    const navi = <>
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink to={'/bookmark'} ><li><a>Bookmarks</a></li></NavLink>
        <NavLink to={'/bookinglist'}><li><a>My Booking</a></li></NavLink>
        {user && <NavLink to={'/userProfile'}><li><a>Update Profile</a></li></NavLink>}
       <li><a href="#footer">Contact Us</a></li>
    </>

    const userLogOutHandel = () => {
        userLogOut()
            .then()
            .catch()
    }

   


    const [visible, setVisible] = useState(true);

    useEffect(() => {
      let prevSPos = window.pageYOffset;
      
      const handleScroll = () => {
        const currentSPos = window.pageYOffset;
        const isVisible = prevSPos > currentSPos;
  
        setVisible(isVisible);
        prevSPos = currentSPos;
        
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [visible]);
   

    return (
        <div className={`className=" max-w-7xl w-full m-auto" p-0 z-50 fixed  ${visible ? 'top-0 transition-all' : '-top-20 transition-all'} duration-1000`} >
      
        <div className='navbar  bg-[#18171760] bb-[#ffffff60]  '>

     

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:px-4 px-0  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold text-gray-700 shadow bg-base-100 rounded-box w-52">
                        {navi}
                    </ul>
                </div>
                <Link to={'/'}>  <button className="flex items-center pl-0 font-bold text-gray-100 text-xl md:text-2xl lg:text-2xl"><IoHomeOutline />Dream <span className="text-[#bcc72a]">House</span></button> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-gray-100">
                    {navi}

                </ul>
            </div>

            <div className="navbar-end">


                {
                    user ? <div title={user.displayName} className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full ">
                                {

                                    user.photoURL ? <img alt='p' src={user.photoURL} /> : <FaRegCircleUser className="w-full h-full text-gray-300"></FaRegCircleUser>
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

                    </div> : <>
                        <Link to={'/login'}><button className="btn btn-sm rounded-sm ml-3 bg-[#bcc72a] border-none ">Login</button></Link>
                        <Link to={'/register'}><button className="btn btn-sm rounded-sm ml-3 bg-[#bcc72a] border-none ">Register</button></Link>
                    </>
                }


            </div>
        </div>
        </div>
    );
};

export default Navbar;