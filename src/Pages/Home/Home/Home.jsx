import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Tavern | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <Category></Category>
                <PopularMenu></PopularMenu>
                <FeaturedItems></FeaturedItems>
                <Testimonials></Testimonials>
            </div>
        </HelmetProvider>
    );
};

export default Home;
