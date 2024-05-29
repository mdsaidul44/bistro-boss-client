import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";



const Dashboard = () => {
    const [cart] = useCart()

    // TODO: get admin value from the database.
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu text-black">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/admin'><FaHome />ADMIN HOME</NavLink></li>
                                <li><NavLink to='/dashboard/additems'><FaUtensils/>ADD ITEMS</NavLink></li>
                                <li><NavLink to='/dashboard/manageitem'><FaList />MANAGE ITEMS</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><FaBook />MANAGE BOOKING</NavLink></li>
                                <li><NavLink to='/dashboard/users'><FaUser />ALL USERS</NavLink></li> 
                            </> :
                            <>
                                <li><NavLink to='/dashboard/userHome'><FaHome />USER HOME</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar />RESERVATION</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaAd />PAYMENT HISTORY</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaShoppingCart />MY CART ({cart.length})</NavLink></li>
                                <li><NavLink to='/dashboard/review'><FaMessage /> ADD REVIEW</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><FaList />MY BOOKING</NavLink></li>
                            </>
                    }
                    {/* Shared nav links */}
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />HOME</NavLink></li>
                    <li><NavLink to='/order/salad'><FaSearch />MENU</NavLink></li>
                    <li><NavLink to='/order/contact'><FaEnvelope />CONTACT</NavLink></li>
                </ul>

            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;