import featureImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./FeaturedItems.css";


const FeaturedItems = () => {
    return (
     
            <div className="feature-item bg-fixed ">
                <SectionTitle
                    subHeading={"check it out"}
                    heading={"FROM OUR MENU"}
                ></SectionTitle>
                <div className="flex items-center gap-8 mx-auto bg-slate-500 bg-opacity-30 py-16 px-20">
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
                        <button className="btn btn-outline border-0 border-b-4 my-3">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
       
    );
};

export default FeaturedItems;
