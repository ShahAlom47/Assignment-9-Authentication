import { useContext, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import Navbar from "../../Shared Component/Navbar";
import { IoCameraReverseOutline } from "react-icons/io5";
import { update } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { LuPenSquare } from "react-icons/lu";

const UserProfile = () => {
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)
    const [isPhotoBtn, setPhotoBtn] = useState(true);
    const navigate = useNavigate();


    const { user, updateUserProfile, updateUserName } = useContext(AuthContext);
    console.log(isPhotoBtn);




    const updateProfileHandel = (e) => {
        setErrorMsg('')
        setSuccessMsg('')

        e.preventDefault();
        const data = new FormData(e.target);
        const photo = data.get('photo')
        if (photo?.length === 0) {
            setErrorMsg('Please Provide URL')
            return

        }

        console.log('photo');

        updateUserProfile(photo)
            .then(() => {

                toast.success('Photo Updated successfully ')
                setSuccessMsg('Photo Updated successfully')

                e.target.reset()

                setTimeout(() => { navigate('/userProfile'); document.getElementById('my_modal_5').close() }, 1000)
            })

            .catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage)

            });
    }

    // name update
    const updateNameHandel = (e) => {
        setErrorMsg('')
        setSuccessMsg('')

        e.preventDefault();
        const data = new FormData(e.target);
        const name = data.get('name')
      
      
        if (name?.length === 0) {
            setErrorMsg('This is not a valid name ')
            return

        }

        updateUserName(name)
            .then(() => {

                toast.success('Name Change successfully ')
                setSuccessMsg('Name Change successfully')

                e.target.reset()

                setTimeout(() => { navigate('/userProfile'); document.getElementById('my_modal_5').close() }, 1000)
            })

            .catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage)

            });
    }



    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className=" text-2xl text-center py-4 border-b-2">Your Profile</h1>
                <div className="lg:w-6/12 m-auto border-4 my-5 p-4 rounded-md">
                    <div className=" flex justify-center pb-5">
                        <div className=" flex items-end  relative">
                            <div className="w-16 rounded-full   ">
                                {

                                    user.photoURL ? <img className=" rounded-full" alt='null' src={user.photoURL} /> : <FaRegCircleUser className="w-full h-full rounded-full text-gray-300"></FaRegCircleUser>
                                }
                            </div>
                            <button
                                onClick={() => {

                                    document.getElementById('my_modal_5').showModal()
                                    setPhotoBtn(true)
                                }}
                                title="Change Profile "
                                className=" flex absolute left-8  bg-white rounded-full p-1">
                                <IoCameraReverseOutline />
                            </button>
                        </div>
                    </div>
                    <div className="rounded-md bg-slate-300">
                        <div className=" flex justify-between border-b-2 p-3 rounded-md bg-slate-300">
                            <h1 className="text-lg font-semibold "> Name: {user.displayName} </h1>
                            <button
                                onClick={() => {

                                    document.getElementById('my_modal_5').showModal()
                                    setPhotoBtn(false)
                                }}
                                title="Change Name "
                            >
                                <LuPenSquare /></button>

                        </div>
                        <h1 className="text-lg font-semibold p-3 "> Email: {user.email}</h1>

                    </div>

                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h1 className="text-lg text-center font-bold border-b-2 pb-2">{isPhotoBtn ? 'Submit your new image url' : 'Change Your Name'}</h1>

                        <form onSubmit={isPhotoBtn?updateProfileHandel:updateNameHandel}>

                            {
                                isPhotoBtn ? <div className="p-4 flex  flex-col">
                                    <label htmlFor="photo" className=" font-semibold p-1">Your Photo URL</label>
                                    <input className="p-2 border-2 rounded-md" type="text" name="photo" id="photo" placeholder="Your Photo URL" />
                                </div>:
                                <div className="p-4 flex  flex-col">
                                <label htmlFor="name" className=" font-semibold p-1">Your Name</label>
                                <input className="p-2 border-2 rounded-md" type="text" name="name" id="name" placeholder="Enter Your New Name " />
                            </div>
                            }

                            <div className="p-4 flex  flex-col">
                                <p className="text-red-400">{errorMsg} </p>
                                <p className="text-green-400"> {successMsg}</p>
                                {
                                    isPhotoBtn ? <input method="dialog" className="btn bg-[#bcc72a] rounded-sm w-full font-bold mt-3" type="submit" value="Update Profile" /> :
                                        <input method="dialog" className="btn bg-[#bcc72a] rounded-sm w-full font-bold mt-3" type="submit" value="Change Name" />


                                }
                            </div>

                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </form>



                    </div>
                </dialog>

            </div>
            <ToastContainer />
        </div>
    );
};

export default UserProfile