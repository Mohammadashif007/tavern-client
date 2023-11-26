import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter((item) => item.category === "popular");


    return (
        <section className="my-10">
            <SectionTitle
                subHeading={"Popular items"}
                heading={"from our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {popularItems.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>

            <div className="text-center mt-8">
                <button className="btn btn-outline border-0 border-b-4 my-3 text-center">
                    View full menu
                </button>
            </div>
        </section>
    );
};

export default PopularMenu;
