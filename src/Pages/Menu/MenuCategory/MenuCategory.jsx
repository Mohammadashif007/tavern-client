import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 my-8">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <div className="text-center mt-8">
                <button className="btn btn-outline border-0 border-b-4 my-3 text-center">
                    ORDER YOUR FAVOURITE FOOD
                </button>
            </div>
        </div>
    );
};

export default MenuCategory;
