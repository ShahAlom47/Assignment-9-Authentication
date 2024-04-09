import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";


const Estates = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then((res)=>res.json())
        .then(homeData=>setDatas(homeData))

    }, [])



    return (
        <div className=" w-10/12 m-auto my-12">
            <h1 className=" text-2xl font-bold text-center px-6 py-2 my-8  border-b-2"> Our Residential Services</h1>
            <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
                {
                    datas.map((data, index)=><DisplayCard key={index}  data={data}></DisplayCard>)
                }
            </div>

        </div>

    );
};

export default Estates;