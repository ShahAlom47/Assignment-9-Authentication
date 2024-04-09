import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineAreaChart } from 'react-icons/md';

const DisplayCard = ({data}) => {

    console.log(data);
    const {image, estate_title, area,location}=data;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl shadow-[#bcc72a]  border-2">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <MdOutlineAreaChart /> Area : {area} </p>
          <p className=' text-l font-semibold text-gray-700 flex gap-1 items-center'> <CiLocationOn /> Locattion : {location} </p>
          <div className="card-actions justify-start">
          <button className='btn  rounded-md p-4 font-bold my-5 border-none bg-[#bcc72a]'>View Property</button>
          </div>
        </div>
      </div>
    );
};

export default DisplayCard;

DisplayCard.propTypes ={
    data : PropTypes.object.isRequired
}