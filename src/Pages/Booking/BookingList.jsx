import { Helmet } from "react-helmet";
import Navbar from "../../Shared Component/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAreaChart, MdOutlineDelete } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


const BookingList = () => {


    const [datas, setDatas] = useState([]);
    const [localDatas, setLocalDatas] = useState([])

    useEffect(() => {
        fetch('../data.json')
            .then((res) => res.json())
            .then(homeData => setDatas(homeData))
    }, [localDatas])



    // local storage start 
    const xx = localStorage.getItem('booking')
    const localData = xx ? JSON.parse(localStorage.getItem('booking')) : [];

    const bookingData = datas.filter(item => localData.some(ldata => ldata.id === item.id))



    const deleteItemHandel = (id) => {

        const updateData = localData.filter(item => item.id !== id)

        localStorage.setItem('booking', JSON.stringify([...updateData]))
        // console.log(localData, updateData);
        setLocalDatas([...updateData]);

    }

  

    return (
        <div className=' mt-20'>
            <Navbar></Navbar>
            <Helmet>
                <title>Dream House/booking/list</title>
            </Helmet>
            <h1 className=" text-2xl font-bold text-center px-6 py-2 my-8  border-b-2"> Booking List  </h1>
            <div className='border-2 rounded-md p-5 my-4 space-y-3'>

                {localData.length <= 0 ? <h1 className=' text-2xl my-6 text-center'>Not Booking Now</h1> :

                    bookingData.map(data =>{
                        
                         const buyerInfo = localData.filter(item => item.id === data?.id)
                              
                          console.log(buyerInfo[0].firstName);

                      return (                       
                        <div key={data.id} className={`lg:w-10/12 m-auto lg:flex md:flex gap-2 border-4 rounded-lg p-5 `}  >
                                <div className="lg:w-4/12 mg:4/12 lg:border-r-4 md:border-r-4 lg:pr-8 md:pr-8 ">
                                    <div className="card card-compact       animate__animated animate__flipInY "  >
                                        <figure><img src={data?.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{data?.estate_title}</h2>
                                            <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <MdOutlineAreaChart /> Area : {data?.area} </p>
                                            <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <CiLocationOn /> Location : {data?.location} </p>
                                            <div className="card-actions justify-start">
                                                <Link to={`/estateDetails/${data?.id}`}>  <button className='btn  rounded-md px-4 font-bold my-2 border-none bg-[#bcc72a]'>View Property</button></Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className=" flex-1 pl-8 flex flex-col ">
                             <div className="flex-1">
                             <p className=" font-semibold text-lg"> Full Name:  <span className=" font-medium text-base  text-gray-600"> {buyerInfo[0]?.firstName } {buyerInfo[0]?.lastName}</span></p>
                                   <p className=" font-semibold text-lg"> Email:  <span className=" font-medium text-base  text-gray-600"> {buyerInfo[0]?.email } </span></p>
                                   <p className=" font-semibold text-lg"> Mobile :  <span className=" font-medium text-base  text-gray-600"> {buyerInfo[0]?.mobile } </span></p>
                                   <p className=" font-semibold text-lg"> Address:  <span className=" font-medium text-base  text-gray-600"> {buyerInfo[0]?.address } </span></p>
                                   <p className=" font-semibold text-lg"> City:  <span className=" font-medium text-base  text-gray-600"> {buyerInfo[0]?.city } </span></p>
                                   <p className=" font-semibold text-lg"> Postal/Zip Code:  <span className=" font-medium text-base  text-gray-600"> {buyerInfo[0]?.zip } </span></p>

                             </div>
                             <div>
                             <button onClick={() => deleteItemHandel(buyerInfo[0]?.id)} className='btn  rounded-md font-semibold my-5 border-none text-base '>Cancel Booking</button>
                                
                             </div>
                                   


                                </div>


                            </div>
                      )
                    } 
                )
                   
                   
                }

            </div>

        </div>
    );
};

export default BookingList;