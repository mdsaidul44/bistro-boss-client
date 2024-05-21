import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefSection from "../ChefSection/ChefSection";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import CallSection from "./CallSection/CallSection";
import SaladSection from "./SaladSection/SaladSection";

 

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <ChefSection/>
            <PopularMenu/>
            <Featured/>
            <CallSection/>
            <SaladSection/>
            <Testimonials/>
        </div>
    );
};

export default Home;