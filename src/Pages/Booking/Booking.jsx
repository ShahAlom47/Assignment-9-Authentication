import { Helmet } from "react-helmet";
import Navbar from "../../Shared Component/Navbar";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const validationSchema = yup
    .object({
        firstName: yup.string().required('Missing First Name'),
        lastName: yup.string().required('Missing Last Name'),
        email: yup.string().required('Missing email').email('Invalid Email'),
        mobile: yup.number().positive().integer('Number must be used ').required('Missing mobile')
            .test('len', 'Mobile number must be exactly 11 digits', val => val && val.toString().length >= 10),
            address: yup.string().required('Missing Address'),
            city: yup.string().required('Missing City Name'),
            zip: yup.string().required('Missing Postal / Zip Code'),

    })
    .required()

const Booking = () => {
    const { id } = useParams();
    const IntId = parseInt(id)
    const navigate =useNavigate()
  


    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
        }
    })

    const onSubmit = (data) =>{   
        bookingBtn(id,{...data,id:IntId})
    }


const bookingBtn = (id,buyerInfo) => {
const idInt=parseInt(id)

    const xx = localStorage.getItem('booking')
    const localBookingData = xx ? JSON.parse(localStorage.getItem('booking')) : [];
    const bookingData = localBookingData.some(item => item.id === idInt);
   
  

    if (bookingData) {
        const updateData = localBookingData.filter(item => item.id !== id)
        localStorage.setItem('booking', JSON.stringify(updateData))    
        toast.error('Already Booked')

    }
    else {
        localBookingData.push(buyerInfo)
        localStorage.setItem('booking', JSON.stringify(localBookingData));
        toast.success('Booking successfully Completed ')
        setTimeout(() => { navigate('/bookinglist') }, 1000)
       
    }
}

    return (




        <div className=' mt-20'>
            <Navbar></Navbar>
            <Helmet>
                <title>Dream House/booking</title>
            </Helmet>
            <h1 className=" text-2xl font-bold text-center px-6 py-2 my-8  border-b-2"> Submit your Information  </h1>

            <div className="bg-gray-200 rounded-lg border-2 w-8/12 m-auto my-6 p-8">



                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div className="flex flex-col  ">
                            <label className="font-semibold">First Name</label>
                            <input {...register("firstName",)} className="p-3 rounded-md" />
                            <p className="text-red-600">{errors.firstName?.message}</p>
                        </div>
                        <div className="flex flex-col ">
                            <label className="font-semibold">Last Name</label>
                            <input {...register("lastName",)} className="p-3 rounded-md" />
                            <p className="text-red-600"> {errors.lastName?.message}</p>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div className="flex flex-col ">
                            <label className="font-semibold">Email</label>
                            <input {...register("email",)} className="p-3 rounded-md" />
                            <p className="text-red-600">{errors.email?.message}</p>
                        </div>
                        <div className="flex flex-col ">
                            <label className="font-semibold">Mobile Number</label>
                            <input {...register("mobile",)} className="p-3 rounded-md" />
                            <p className="text-red-600">{errors.mobile?.message}</p>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                            <label className="font-semibold">Address</label>
                            <input {...register("address",)} className="p-3 rounded-md" />
                            <p className="text-red-600">{errors.address?.message}</p>
                     </div>
                     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div className="flex flex-col ">
                            <label className="font-semibold">City</label>
                            <input {...register("city",)} className="p-3 rounded-md" />
                            <p className="text-red-600">{errors.city?.message}</p>
                        </div>
                        <div className="flex flex-col ">
                            <label className="font-semibold">Postal / Zip Code</label>
                            <input {...register("zip",)} className="p-3 rounded-md" />
                            <p className="text-red-600">{errors.zip?.message}</p>
                        </div>
                    </div>


                    <div className="py-4 flex  flex-col">
                        <p className="text-red-400"> </p>
                        <p className="text-green-400"> </p>
                        <input className="btn bg-[#bcc72a] rounded-sm w-full font-bold mt-3" type="submit" value="Submit" />
                    </div>


                </form>
                <button onClick={()=>navigate(-1)} className="btn  bg-[#b4a992] rounded-sm w-full font-bold "> Cancel </button>






                <ToastContainer />
            </div>


        </div>
    );
};

export default Booking;