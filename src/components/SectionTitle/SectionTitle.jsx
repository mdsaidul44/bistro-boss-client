 

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center w-4/12 my-20 mx-auto">
            <h1 className="text-yellow-600 mb-2">---{subHeading}---</h1>
            <h1 className="text-3xl uppercase border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;