import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
const Menu = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Tavern | Menu</title>
            </Helmet>
            <Cover img={menuImg} title = {'OUR MENU'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title = {'OUR MENU'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title = {'OUR MENU'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title = {'OUR MENU'}></Cover>
            <PopularMenu></PopularMenu>
        </HelmetProvider>
    );
};

export default Menu;
