 

const MenuItem = ({item}) => {
    const {name,recipe,price,image} = item
    return (
        <div className="flex space-x-2 ">
            <img style={{borderRadius: '0 200px 200px 200px'}}  className="w-[100px]" src={image} alt="" />
            <div>
                <p className="uppercase">{name}--------------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{"$"+price}</p>
        </div>
    );
};

export default MenuItem;