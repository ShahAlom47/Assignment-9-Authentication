import { useContext, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import Navbar from "../../Shared Component/Navbar";
import { IoCameraReverseOutline } from "react-icons/io5";
import { update } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)
    const navigate = useNavigate();


    const { user, updateUserProfile } = useContext(AuthContext);
    console.log(user);

    const updateProfileHandel = (e) => {
        setErrorMsg('')
        setSuccessMsg('')

        e.preventDefault();
        const data = new FormData(e.target);
        const photo = data.get('photo')
        if(photo.length===0){
            setErrorMsg('Please Provide URL')
            return

        }

        updateUserProfile(photo)
            .then(() => {

                toast.success('Photo Updated successfully ')
                setSuccessMsg('Photo Updated successfully')
                
                e.target.reset()

                setTimeout(() => { navigate('/userProfile'); document.getElementById('my_modal_5').close() }, 1500)
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
                                <img alt='p' className="w-full rounded-full" src={user.photoURL}></img>
                            </div>
                            <button
                                onClick={() => document.getElementById('my_modal_5').showModal()}
                                title="Change Profile "
                                className=" flex absolute left-8  bg-white rounded-full p-1">
                                <IoCameraReverseOutline />
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-lg font-semibold "> Name: {user.displayName}</h1>
                        <h1 className="text-lg font-semibold "> Email: {user.email}</h1>

                    </div>

                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h1 className="text-lg text-center font-bold border-b-2 pb-2">Submit your new image url</h1>

                        <form onSubmit={updateProfileHandel}>

                            <div className="p-4 flex  flex-col">
                                <label htmlFor="photo" className=" font-semibold p-1">Your Photo URL</label>
                                <input  className="p-2 border-2 rounded-md" type="text" name="photo" id="photo" placeholder="Your Photo URL" />
                            </div>

                            <div className="p-4 flex  flex-col">
                                <p className="text-red-400">{errorMsg} </p>
                                <p className="text-green-400"> {successMsg}</p>
                                    <input method="dialog" className="btn bg-[#bcc72a] rounded-sm w-full font-bold mt-3" type="submit" value="Update Profile" />
                               
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