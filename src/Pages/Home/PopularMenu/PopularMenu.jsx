import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu);

    useEffect(() => {
        axios("menu.json").then((res) => {
            const popularItems = (res.data.filter((item) => item.category === "popular"));
            setMenu(popularItems);
        });
    }, []);

    return (
        <section className="my-10">
            <SectionTitle
                subHeading={"Popular items"}
                heading={"from our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
