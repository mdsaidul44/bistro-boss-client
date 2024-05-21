import SectionTitle from "../../../../components/SectionTitle/SectionTitle";



const SaladSection = () => {
    return (
        <section>
            <SectionTitle subHeading='Should Try' heading='chef recommends'></SectionTitle>
            <div className="grid md:grid-cols-3">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[300px]" src="https://i.ibb.co/D4C0qCG/images-38.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[300px]" src="https://i.ibb.co/S70wnM1/images-39.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-black btn-outline border-0 ">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[300px]" src="https://i.ibb.co/sJxhwVF/images-40.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default SaladSection;