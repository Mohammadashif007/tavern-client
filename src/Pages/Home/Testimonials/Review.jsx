
import { SwiperSlide } from "swiper/react";


const Review = ({review}) => {
    const {detials, name, rating} = review;
    return (
        <div>
            <SwiperSlide detials={detials} name={name} rating={rating}></SwiperSlide>
        </div>
    );
};

export default Review;