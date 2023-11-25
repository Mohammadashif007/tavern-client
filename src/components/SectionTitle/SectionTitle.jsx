

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-3/12 text-center mx-auto my-5">
            <p className="text-[#D99904] text-[20px] my-4">---{subHeading}---</p>
            <h2 className="text-4xl uppercase border-y-2 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;