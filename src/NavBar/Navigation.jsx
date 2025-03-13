import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import momoLogo from "../assets/momoLogo.png";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle } from "react-icons/fa";

function Navigation() {
  const { user, isAuthenticated, logout } = useAuth0();
  console.log(user);
  const { state } = useContext(CartContext);
  const totalItem = state?.cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <div className="  flex   justify-around   items-center shadow shadow-gray-400  p-2   ">
      <div className=" flex gap-2 items-center  ">
        <NavLink className="text-green-500  text-2xl " to="/">
          <img className="h-9" src={momoLogo} alt="logo" />
        </NavLink>
      </div>

      <div className=" space-x-5  text-xl  flex  ">
        <NavLink to="/about">About Us </NavLink>
        <NavLink to="/ourMenu">Our Menu</NavLink>
        {/* <NavLink to="/menu">Menu</NavLink> */}
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/allergy">Allergy</NavLink>

        {isAuthenticated ? (
          <button
            className="text-xl "
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-x-3">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signUp">SignUp</NavLink>
          </div>
        )}

        <NavLink className="text-red-500 relative  " to="/cart">
          <BsCart4 size={32} className="inline-block" />
          <span className="absolute -top-4 font-bold  left-3">{totalItem}</span>
        </NavLink>
      </div>

      <div className=" flex p-2    items-center gap-x-2 ">
        <NavLink to="https://www.facebook.com/" target="_blank">
          <FaFacebook size={20} />
        </NavLink>
        <NavLink to="https://www.tiktok.com/" target="_blank">
          <IoLogoTiktok size={20} />
        </NavLink>
        <NavLink to="https://www.instagram.com/" target="_blank">
          <FaInstagram size={20} />
        </NavLink>
        <NavLink
          className="bg-orange-500 text-white  py-2  px-3 w-24 text-center rounded-2xl"
          to="/contact"
        >
          Contact
        </NavLink>

        <div>
          {isAuthenticated ? (
            <NavLink to="/profile">
              <img className="rounded-full  h-10  w-10 " src={user.picture} />
            </NavLink>
          ) : (
            <FaUserCircle size={32} color="blue" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
