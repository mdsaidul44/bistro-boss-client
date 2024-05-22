 

const FoodCard = ({item}) => {
    const {name,recipe,price,image} = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <h1 className="absolute right-0 mt-4 mr-4 px-4 bg-black text-white">${price}</h1>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline hover:bg-slate-900 hover:text-white bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;