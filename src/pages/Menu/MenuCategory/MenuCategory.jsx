import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

 

const MenuCategory = ({items,Img,title}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={Img} title={title}/>}
             <div className="grid grid-cols-2 gap-10 mt-16">
                {
                  items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now </button></Link>
        </div>
    );
};

export default MenuCategory;