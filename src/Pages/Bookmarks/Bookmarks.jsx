
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared Component/Navbar';
import { MdOutlineAreaChart, MdOutlineDelete } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import 'animate.css';
import { Helmet } from 'react-helmet-async';





const Bookmarks = () => {

    const [datas, setDatas] = useState([]);
    const [localDatas, setLocalDatas] = useState([])

    useEffect(() => {
        fetch('../data.json')
            .then((res) => res.json())
            .then(homeData => setDatas(homeData))
    }, [localDatas])



    // local storage start 
    const xx = localStorage.getItem('bookMark')
    const localData = xx ? JSON.parse(localStorage.getItem('bookMark')) : [];
    const bookMarkData = datas.filter(item => localData.includes(item.id))


    const deleteItemHandel = (id) => {

        const updateData = localData.filter(item => item !== id)

        localStorage.setItem('bookMark', JSON.stringify([...updateData]))
        console.log(localData, updateData);
        setLocalDatas([...updateData]);

    }

    return (
        <div>
            <Navbar></Navbar>
            <Helmet>
                <title>Dream House/bookmark</title>
            </Helmet>
            <div className=' mt-20'>
                <h1 className=" text-2xl font-bold text-center px-6 py-2 my-8  border-b-2"> Bookmark List  </h1>

                <div className='border-2 rounded-md p-5 my-4 space-y-3'>

                    {bookMarkData.length <= 0 ? <h1 className=' text-2xl my-6 text-center'>Not bookmarked now</h1> :

                        bookMarkData.map(data => <>
                            {
                                <div className="card card-compact w-8/12 m-auto bg-base-100 shadow-xl flex flex-row justify-start  animate__animated animate__fadeInRight">
                                    <figure className='rounded-xl w-6/12'><img className='rounded-xl ' src={data.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data?.estate_title}</h2>
                                        <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <MdOutlineAreaChart /> Area : {data?.area} </p>
                                        <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <CiLocationOn /> Locattion : {data?.location} </p>
                                        <div className="card-actions justify-start">
                                            <Link to={`/estateDetails/${data?.id}`}>  <button className='btn  rounded-md p-4 font-bold my-5 border-none bg-[#bcc72a]'>View Property</button></Link>
                                            <button onClick={() => deleteItemHandel(data?.id)} className='btn  rounded-md font-bold my-5 border-none text-3xl '><MdOutlineDelete /></button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>)
                    }

                </div>


            </div>

            <div>

   
            </div>
        </div>
    );
};

export default Bookmarks;