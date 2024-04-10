
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar from '../../Shared Component/Navbar';
import { MdOutlineAreaChart } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const Bookmarks = () => {
    const { id } = useParams();
    const IntId = parseInt(id)
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        fetch('../data.json')
            .then((res) => res.json())
            .then(homeData => setDatas(homeData))
        setLoading(false)

    }, [])


    // local storage start 
    const xx = localStorage.getItem('bookMark')
    const localData = xx ? JSON.parse(localStorage.getItem('bookMark')) : [];

    const bookMarkData = datas.filter(item => localData.includes(item.id))

    console.log(bookMarkData);

    return (
        <div>

            <Navbar></Navbar>
            <div>
                <h1 className=" text-2xl font-bold text-center px-6 py-2 my-8  border-b-2"> Bookmark List  </h1>
                <div className='border-2 rounded-md p-5 my-4'>
                    {
                        bookMarkData.map(data => <>
                            {
                                <div className="card card-compact w-8/12 m-auto bg-base-100 shadow-xl flex flex-row justify-start">
                                    <figure className='rounded-xl w-6/12'><img className='rounded-xl ' src={data.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data?.estate_title}</h2>
                                        <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <MdOutlineAreaChart /> Area : {data?.area} </p>
                                        <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <CiLocationOn /> Locattion : {data?.location} </p>
                                        <div className="card-actions justify-start">
                                            <Link to={`/estateDetails/${data?.id}`}>  <button className='btn  rounded-md p-4 font-bold my-5 border-none bg-[#bcc72a]'>View Property</button></Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>)
                    }


                </div>


            </div>
        </div>
    );
};

export default Bookmarks;