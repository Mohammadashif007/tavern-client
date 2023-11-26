import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertsImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();

    const offers = menu.filter((item) => item.category === "offered");
    const desserts = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salads = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");

    return (
        <HelmetProvider>
            <Helmet>
                <title>Tavern | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"}></Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory items={offers} ></MenuCategory>
            <MenuCategory items={desserts} coverImg={dessertsImg} title={"DESSERTS"}></MenuCategory>
            <MenuCategory items={pizza} coverImg={pizzaImg} title={"Pizza"}></MenuCategory>
            <MenuCategory items={salads} coverImg={saladImg} title={"Salad"}></MenuCategory>
            <MenuCategory items={soup} coverImg={soupImg} title={"Soup"}></MenuCategory>
        </HelmetProvider>
    );
};

export default Menu;
