import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Navbar from "../../Shared Component/Navbar";

import 'animate.css';

const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className=' relative bg-gradient-to-br from-black to-gray-900 mb-10'>
 
            <div className="absolute top-0 right-0 z-10 w-full "> <Navbar ></Navbar></div>
            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper relative"
            >
                <SwiperSlide><div className='relative '>
                    <img className=' w-full rounded-lg' src="https://i.ibb.co/S6mPm5m/banner1.png" alt="" />
                    <div className=" bg-[#18171786] absolute bottom-5 left-5 z-40 p-10 rounded-md  animate__animated animate__fadeInLeft">
                        <h1 className='text-5xl mb-2 text-gray-100 '>Cozy Vacation Rental</h1>
                        <p className='text-gray-300 '>Contemporary townhouse in a vibrant urban community with easy access to amenities.</p>
                        <button className='btn  rounded-full p-4 font-bold my-5 border-none bg-[#bcc72a]'>View Gallery</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>
                    <img className='-[500px] w-full rounded-lg' src="https://i.ibb.co/PDnJV0T/banner2.png" alt="" />
                    <div className=" bg-[#18171786] absolute bottom-5 left-5 z-40 p-10 rounded-md  animate__animated animate__fadeInLeft">
                        <h1 className='text-5xl mb-2 text-gray-100 '>Senior Living Community</h1>
                        <p className='text-gray-300 '>Luxury apartment complex offering stunning views and upscale amenities.</p>
                        <button className='btn  rounded-full p-4 font-bold my-5 border-none bg-[#bcc72a]'>View Gallery</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='-[500px] w-full rounded-lg' src="https://i.ibb.co/Z1cDYh0/banner3.png" alt="" />
                    <div className=" bg-[#18171786] absolute bottom-5 left-5 z-40 p-10 rounded-md  animate__animated animate__fadeInLeft">
                        <h1 className='text-5xl mb-2 text-gray-100 '>Luxurious Apartment </h1>
                        <p className='text-gray-300 '>Retirement community offering care and amenities for senior residents.</p>
                        <button className='btn  rounded-full p-4 font-bold my-5 border-none bg-[#bcc72a]'>View Gallery</button>
                    </div>

                </SwiperSlide>


                <div className="autoplay-progress w-40 absolute " slot="container-end ">

                    <svg viewBox="0 0 48 48" ref={progressCircle}>

                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>


        </div>
    );
};

export default Banner;