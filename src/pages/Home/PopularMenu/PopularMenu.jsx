 
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

 

const PopularMenu = () => {
    const [menu] =useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <section className="mb-10">
            <SectionTitle
            heading={"Check it out"}
            subHeading={'from our menu'}
            > 
            </SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem 
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-10">
            <button className="btn btn-outline border-0 border-b-4 mt-4">VIEW FULL MENU </button>
            </div>
        </section>
    );
};

export default PopularMenu;