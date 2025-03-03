import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import momoLogo from "../assets/momoLogo.png";
function Navigation() {
  return (
    <div className="  flex   justify-around   items-center shadow shadow-gray-400  p-2   ">
      <div className=" flex gap-2 items-center ">
        <img className="h-9" src={momoLogo} alt="logo" />
        <NavLink className="text-green-500  text-2xl " to="/"></NavLink>
      </div>

      <div className=" space-x-5  text-2xl   ">
        <NavLink to="/about">About Us </NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/allergy">Allergy</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/cart"><TiShoppingCart /></NavLink>
      </div>

      <div className=" flex p-2  items-center gap-x-2 ">
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
          to=""
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
