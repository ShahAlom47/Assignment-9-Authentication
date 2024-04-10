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
 
            <div className=" md:absolute lg:absolute top-0 right-0 z-10 w-full "> <Navbar ></Navbar></div>
            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2300,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                speed={1500} 
                className="mySwiper relative"
            >
                <SwiperSlide><div className='relative '>
                    <img className=' w-full rounded-lg' src="https://i.ibb.co/5v9CQfZ/new-b-1.jpg" alt="" />
                    <div className=" bg-[#18171786] absolute bottom-1 md:bottom-5 lg:bottom-5 left-5 z-40 lg:p-10 p-2 rounded-md  animate__animated animate__fadeInRight">
                        <h1 className='lg:text-5xl text-2xl mb-2 text-gray-100 '>Cozy Vacation Rental</h1>
                        <p className='text-gray-300 '>Contemporary townhouse in a vibrant urban community with easy access to amenities.</p>
                        <button className=' bannerBtn  p- px-3 rounded-full lg:p-3 font-bold mt-2 lg:my-5 border-none bg-[#bcc72a]'>View Gallery</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>
                    <img className='-[500px] w-full rounded-lg' src="https://i.ibb.co/m6tNqgb/new-b-2.jpg" alt="" />
                    <div className=" bg-[#18171786] absolute md:bottom-5 lg:bottom-5 bottom-1 left-5 z-40 lg:p-10 p-2 rounded-md  animate__animated animate__fadeInRight">
                        <h1 className='lg:text-5xl text-2xl mb-2 text-gray-100 '>Senior Living Community</h1>
                        <p className='text-gray-300 '>Luxury apartment complex offering stunning views and upscale amenities.</p>
                        <button className= ' bannerBtn p- px-3 rounded-full lg:p-3 font-bold mt-2 lg:my-5 border-none bg-[#bcc72a]'>View Gallery</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='-[500px] w-full rounded-lg' src="https://i.ibb.co/Kx9tPkT/new-b-3.jpg" alt="" />
                    <div className=" bg-[#18171786] absolute md:bottom-5 lg:bottom-5 bottom-1 left-5 z-40 lg:p-10 p-2 rounded-md  animate__animated animate__fadeInRight">
                        <h1 className='lg:text-5xl text-2xl mb-2 text-gray-100 '>Luxurious Apartment </h1>
                        <p className='text-gray-300 '>Retirement community offering care and amenities for senior residents.</p>
                        <button className=' bannerBtn p- px-3 rounded-full lg:p-3 font-bold mt-2 lg:my-5 border-none bg-[#bcc72a]'>View Gallery</button>
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