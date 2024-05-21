import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg" 
import pizzaImg from "../../../assets/menu/pizza-bg.jpg" 
import saladImg from "../../../assets/menu/salad-bg.jpg" 
import soupImg from "../../../assets/menu/soup-bg.jpg" 
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"  
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

 
const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our menu"}/> 
            {/* Main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* Offered Menu Item */}
            <MenuCategory items={offered}/>
            {/* Desserts Menu Item */}
            <MenuCategory 
            items={dessert}
            title="dessert"
            Img={dessertImg}
            />
            {/* Pizza menu item */}
             <MenuCategory 
            items={pizza}
            title="Pizza"
            Img={pizzaImg}
            />
            {/* Salad menu item */}
            <MenuCategory 
            items={salad}
            title="salad"
            Img={saladImg}
            /> 
            {/* Soup menu item */}
            <MenuCategory 
            items={soup}
            title="Soup"
            Img={soupImg}
            />
        </div>
    );
};

export default Menu;