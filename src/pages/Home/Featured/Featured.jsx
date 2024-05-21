import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading='Check it out' heading='From our menu'></SectionTitle> 
            <div className="md:flex justify-center bg-opacity-50 bg-slate-500 items-center pb-20 pt-12 px-32">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20 ,2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi neque laudantium repudiandae repellendus quas, temporibus veritatis vero ratione illo eum consequatur atque laboriosam enim, praesentium nesciunt natus perferendis veniam reiciendis!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;