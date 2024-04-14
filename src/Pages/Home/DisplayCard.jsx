import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineAreaChart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..
// AOS.init();

const DisplayCard = ({data}) => {
  useEffect(()=>{
    AOS.init();
  },[])


    const {id, image, estate_title, area,location}=data;

    return (
        <div className="card card-compact  bg-base-100 rounded-lg shadow-lg shadow-[#bcc72a]  border-2  "  
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" >

        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body" >
          <h2 className="card-title">{estate_title}</h2>
          <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <MdOutlineAreaChart /> Area : {area} </p>
          <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <CiLocationOn /> Locattion : {location} </p>
          <div className="card-actions justify-start">
        <Link to={`/estateDetails/${id}`}>  <button  className='btn  rounded-md p-4 font-bold my-5 border-none bg-[#bcc72a]'
        data-aos="fade-left"
        data-aos-duration="2000" 
        >View Property</button></Link>
          </div>
        </div>
      </div>
    );
};

export default DisplayCard;

DisplayCard.propTypes ={
    data : PropTypes.object.isRequired
}