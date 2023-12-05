import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FiHome } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { IoBagAddOutline } from "react-icons/io5";
import { CiCircleList, CiSearch } from "react-icons/ci";
import { FaUtensils } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import UseCart from "../Hooks/UseCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = UseCart();
  // get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className=" flex">
      {/* dashboard side bar */}
      <div className=" w-64 min-h-screen  bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FiHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItem"}>
                  <CiCircleList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FiHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <SlCalender />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <TiShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <IoBagAddOutline />
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <CiCircleList />
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* shear nav link */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FiHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={"/order/salad"}>
              <CiSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <MdEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className=" flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
