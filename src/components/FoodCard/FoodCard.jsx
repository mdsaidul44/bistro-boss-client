import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
 

 

const FoodCard = ({item}) => {
    const {name,recipe,price,image,_id} = item
    const {user} =useAuth()
    const  navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCart()
    const handleAddToCard= () => {
      if(user && user.email){
        // TODO: send cart item to the database 
        const cartItem = {
          menuId : _id,
          email : user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} Added To Your Cart`,
              showConfirmButton: false,
              timer: 1500
            });
            //refetch cart to update the cart items count
            refetch()
          }
        })
      }else{
        Swal.fire({
          title: "You Are Not Logged In",
          text: "Please login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
          //  send the user to the login page
            navigate('/login' ,{state:{from:location}})
          }
        });
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <h1 className="absolute right-0 mt-4 mr-4 px-4 bg-black text-white">${price}</h1>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={ handleAddToCard } className="btn btn-outline hover:bg-slate-900 hover:text-white bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;