
import { useEffect, useState } from 'react';
import Navbar from '../../Shared Component/Navbar';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight,  FaBookmark, FaRegBookmark } from 'react-icons/fa6';
import { MdOutlineAreaChart } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
// import { getLocalData } from '../../Utility  file/utility';

const CardDetails = () => {
    const { id } = useParams();
    const IntId = parseInt(id)

    const [datas, setDatas] = useState([]);
    const [isBooked,setBooked]=useState(false)
  
    const navigate = useNavigate();

    useEffect(() => {
        fetch('../data.json')
            .then((res) => res.json())
            .then(homeData => setDatas(homeData))
     

    }, [])

    const cardData = datas.find((data) => data.id === IntId)

    // local Storage start 

    useEffect(()=>{
   
        const localData= localStorage.getItem('bookMark') ?JSON.parse(localStorage.getItem('bookMark')) : [];

        const bookMData = localData.some(item=>item.id===IntId);
        console.log(bookMData);
        isBooked?setBooked(true):setBooked(false);
        
  },[id])


  const bookMarkBtn = (id) => {
    const xx= localStorage.getItem('bookMark')
    const localData= xx ?JSON.parse(localStorage.getItem('bookMark')) : [];
    const bookMData = localData.some(item=>item===id);

    if(bookMData){
        const updateData = localData.filter(item => item.id !== id)
        localStorage.setItem('bookMark',JSON.stringify(updateData))
      
        setBooked(false);

    }
    else{
        localData.push(id)
        localStorage.setItem('bookMark', JSON.stringify(localData));
        setBooked(true);
    }
}

  // local Storage end 


    return (
        <div>
            <Navbar></Navbar>
           
                        <div className=' md:w-10/12 lg:w-8/12 m-auto my-9  '>
                            <div className="card  bg-base-100 shadow-xl">
                                <figure className="px-10 lg:pt-10 w-full">
                                    <img src={cardData?.image} alt="Shoes" className="rounded-xl w-full" />
                                </figure>
                                <div className="card-body   lg:mx-10">
                                    <h2 className="card-title text-2xl">{cardData?.estate_title}</h2>
                                    <p>{cardData?.description}</p>
                                    <div className=' flex gap-6  my-4 text-gray-700  '>
                                        <h2 className=' text-lg font-semibold'>Price: <span className='text-xl font-semibold'> {cardData?.price} </span> </h2>

                                        <span className=" border-green-400 border-2  px-7 rounded-full text-lg font-semibold"> {cardData?.status}</span>

                                    </div>

                                    <div className="lg:flex md:flex gap-2  mb-3 text-gray-700 ">
                                        <p className=' text-lg font-semibold text-gray-700 flex gap-1 items-center'> <MdOutlineAreaChart /> Area : {cardData?.area} </p>
                                        <p className=' text-lg font-semibold text-gray-700 flex gap-1 items-center'> <CiLocationOn /> Location : {cardData?.location} </p>

                                    </div>
                                    <div className="">
                                        <h1 className="text-xl text-gray-700 font-semibold"> Facilities :</h1>
                                        <ul className=' flex gap-3 lg:gap-7 flex-col md:flex-row lg:flex-row px- py-4 text-lg font-medium text-gray-500'>
                                            {
                                                cardData?.facilities.map((f, idx) => <li className='border-2 rounded-full px-2' key={idx}>{f}</li>)
                                            }
                                        </ul>

                                    </div>
                                    <div className="card-actions justify-between ">
                                        <button onClick={() => navigate(-1)} className='btn  rounded-md px-6 py-0 font-bold my-5 border-none bg-[#bcc72a]'> <FaArrowLeft /> Back</button>
                                     
                                     <div className=' flex items-center gap-3'>
                                     <button onClick={()=>bookMarkBtn(cardData?.id)}  className=' text-xl flex'> {isBooked? <FaBookmark /> :<FaRegBookmark />  } </button>
                                  
                                     <button onClick={() => navigate(-1)} className='btn  rounded-md px-6 py-0 font-bold my-5 border-none bg-[#45d143]'> Booking Now  <FaArrowRight /></button>
                                  
                                     </div>
                                       </div>
                                </div>
                            </div>
                        </div>
           
        </div>
    );
};

export default CardDetails;