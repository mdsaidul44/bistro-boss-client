import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={'Form 11.00am to 10.10pm'}
            heading={'Order Online'}
            > 
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h1 className='uppercase text-4xl text-center text-white -mt-20'>SALADS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h1 className='uppercase text-4xl text-center text-white -mt-20'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h1 className='uppercase text-4xl text-center text-white -mt-20'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h1 className='uppercase text-4xl text-center text-white -mt-20'>Desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h1 className='uppercase text-4xl text-center text-white -mt-20'>SALADS</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;