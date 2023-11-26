import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios("reviews.json").then((res) => setReviews(res.data));
    }, []);

    return (
        <div>
            <SectionTitle
                subHeading={"What our client say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]}>
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center gap-8 w-4/5 mx-auto py-10">
                            <Rating
                                style={{ maxWidth: 250 }}
                                value={review.rating}
                                readOnly
                            />
                            <span className="text-6xl">
                                <FaQuoteLeft />
                            </span>
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-[#CD9003]">
                                {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
