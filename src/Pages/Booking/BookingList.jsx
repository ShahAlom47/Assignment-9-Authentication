import { Helmet } from "react-helmet";
import Navbar from "../../Shared Component/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAreaChart} from "react-icons/md";
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
    
    const bookMarkData = datas.filter(item => localData.some(ldata => ldata.id === item.id.toString()))
   


    const deleteItemHandel = (id) => {

        const updateData = localData.filter(item => item !== id)

        localStorage.setItem('booking', JSON.stringify([...updateData]))
        // console.log(localData, updateData);
        setLocalDatas([...updateData]);

    }

console.log(bookMarkData);
console.log(localData);

    return (
        <div className=' mt-20'>
             <Navbar></Navbar>
            <Helmet>
                <title>Dream House/booking/list</title>
            </Helmet>
        <h1 className=" text-2xl font-bold text-center px-6 py-2 my-8  border-b-2"> Booking List  </h1>
        <div className='border-2 rounded-md p-5 my-4 space-y-3'>

{localData.length <= 0 ? <h1 className=' text-2xl my-6 text-center'>Not Booking Now</h1> :

    localData.map(data => <>
        {
            <div className="card card-compact w-8/12 m-auto bg-base-100 shadow-xl flex flex-row justify-start  animate__animated animate__fadeInRight">
               <h1>{data.email}</h1>
            </div>
        }
    </>)
}

</div>

        </div>
    );
};

export default BookingList;