import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit =async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu item data to the server with the image 
            const menuItem ={
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/menu',menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log("With image Url",res.data)
    }

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's New?" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name",{required:true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full " required />
                    </label>
                    <div className="flex gap-6">
                        {/* category field */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Select a Category</span>
                            </div>
                            <select {...register("category",{required:true})}
                                className="select select-bordered w-full">
                                <option defaultValue={"default"} disabled value={"default"}>Select a Category</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </label>
                        {/* Price field */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input   {...register("price",{required:true})} type="text" placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* description box */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Your bio</span>
                        </div>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Food Description"></textarea>
                    </label>
                    {/* file input */}
                    <div className="form-control my-6 ">
                        <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">Add Item<FaUtensils className="ml-4"/></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;