import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import food1 from "../../../assets/home/slide1.jpg";
import food2 from "../../../assets/home/slide2.jpg";
import food3 from "../../../assets/home/slide3.jpg";
import food4 from "../../../assets/home/slide4.jpg";
import food5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
    return (
        <section>
            <SectionTitle heading={'order online'} subHeading={'From 11.00am to 10.00pm'}></SectionTitle>
            <div className="my-10">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                    // className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={food1} alt="" />
                        <h3 className="text-4xl text-center uppercase -mt-16 text-white">
                            Salad
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={food2} alt="" />
                        <h3 className="text-3xl uppercase text-white -mt-16 text-center">
                            Soups
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={food3} alt="" />
                        <h3 className="text-3xl uppercase text-white -mt-16 text-center">
                            pizzas
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={food4} alt="" />
                        <h3 className="text-3xl uppercase text-white -mt-16 text-center">
                            desserts
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={food5} alt="" />
                        <h3 className="text-4xl text-center text-white uppercase -mt-16">
                            Salads
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;
