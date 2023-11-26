import featureImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import "./FeaturedItems.css";
import { Parallax } from "react-parallax";

const FeaturedItems = () => {
    return (
        <Parallax
            blur={10}
            bgImage={featureImg}
            bgImageAlt="the cat"
            strength={200}
        >
            <div className="feature-item py-10">
                <SectionTitle
                    subHeading={"check it out"}
                    heading={"FROM OUR MENU"}
                ></SectionTitle>
                <div className="flex items-center gap-8 w-4/5 mx-auto px-20 py-16">
                    <div className=" w-1/2">
                        <img src={featureImg} alt="" />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl my-3">March 20, 2023</h2>
                        <h3 className="text-2xl my-3">WHERE CAN I GET SOME?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error voluptate facere, deserunt dolores
                            maiores quod nobis quas quasi. Eaque repellat
                            recusandae ad laudantium tempore consequatur
                            consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-outline my-3">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default FeaturedItems;
