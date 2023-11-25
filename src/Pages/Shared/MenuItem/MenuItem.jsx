
const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className="flex items-center gap-4">
            <img className="w-[100px] rounded-r-full rounded-bl-full" src={image} alt="" />
            <div>
                <h3 className="uppercase text-[20px]">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;