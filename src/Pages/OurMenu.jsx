import qr from "../assets/qr.png";
import steamMomo from "../assets/steamMomo.png";
import fryMomo from "../assets/fryMomo.png";
import cMomo from "../assets/cMomo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import momoLogo from "../assets/momoLogo.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

import { FaMobileAlt } from "react-icons/fa";
{
  /*; */
}

function OurMenu() {
  return (
    <>
      <section className="flex-col mt-10 flex justify-center items-center">
        <span className="font-allura text text-4xl">Our Menu</span>
        <div className="font-bold">
          <span className="text-orange-500 ml-28">
            Our menu is more than just momos,
          </span>
          <br />
          <span>
            with a variety of dishes to cater to all tastes and preferences
          </span>
        </div>
        <div className="flex flex-col mt-10 justify-center text-center">
          <h1 className="font-extrabold">Scan the QR code</h1>
          <span>
            You can also check the allergic advices using your phone as well
          </span>
          <span className="flex justify-center">
            <img
              className="size-20 border-solid border-black border-4 rounded-md"
              src={qr}
              alt=""
            />
          </span>

          <span className="flex font-extrabold justify-center items-center">
            <span className="text-orange-600 gap-2">SCAN&nbsp; </span> ME!{" "}
            <FaMobileAlt />
          </span>
        </div>
      </section>
      <section>
        <div
          className="
         "
        >
          <h1 className="font-extrabold ml-96 mt-11   w-40 flex text-3xl ">
            <img src={left} className=" object-contain" alt="" />{" "}
            <div>
              <span className="text-orange-500  font-chela mr-2 ">BUFF</span>MOMO'S
            </div>
            <img src={right} className=" object-contain" alt="" />
          </h1>

          <div className="grid grid-cols-2 gap-8 min-h-screen place-items-center">
            <div className="w-52">
              <img src={steamMomo} alt="" />
              <span
                className="rounded-tl-lg
              rounded-br-lg px-1
              bg-orange-600 relative bottom-14 text-white left-20"
              >
                New
              </span>
              <h1>Buff Steam Momo</h1>
              रु <span className="text-orange-500 font-bold"> 200</span> <br />
              <span className="">
                (Freshly Steamed Buff Momos made from whole wheat and kneaded
                with beta Carotene Rich Vegetable Juice)
              </span>
            </div>
            <div className="w-52">
              {" "}
              <img src={cMomo} alt="" />
              <span
                className="rounded-tl-lg
              rounded-br-lg px-1
              bg-sky-600 relative bottom-14 text-white left-20"
              >
                Popular
              </span>
              <h1>Buff C. Momo</h1>
              रु <span className="text-orange-500 font-bold"> 200</span> <br />
              <span className="">
                (Freshly Steamed Buff Momos made from whole wheat and kneaded
                with beta Carotene Rich Vegetable Juice)
              </span>
            </div>
            <div className="w-52">
              {" "}
              <img src={steamMomo} alt="" />
              <h1>Buff Steam Momo</h1>
              रु <span className="text-orange-500 font-bold"> 200</span> <br />
              <span className="">
                (Freshly Steamed Buff Momos made from whole wheat and kneaded
                with beta Carotene Rich Vegetable Juice)
              </span>
            </div>
            <div className="w-52">
              {" "}
              <img src={steamMomo} alt="" />
              <span
                className="rounded-tl-lg
              rounded-br-lg px-1
              bg-red-600 relative bottom-14 text-white left-16"
              >
                Recommended
              </span>
              <h1>Buff Jhol Momo</h1>
              रु <span className="text-orange-500 font-bold"> 200</span> <br />
              <span className="">
                (Freshly Steamed Buff Momos made from whole wheat and kneaded
                with beta Carotene Rich Vegetable Juice)
              </span>
            </div>
          </div>
        </div>
      </section>
      <div
        className="
         "
      >
        <h1 className="font-extrabold ml-96 mt-11   w-40 flex text-3xl ">
          <img src={left} className=" object-contain" alt="" />{" "}
          <div>
            <span className="text-orange-500  font-chela mr-2 ">Chicken</span>MOMO'S
          </div>
          <img src={right} className=" object-contain" alt="" />
        </h1>

        <div className="grid grid-cols-2 gap-8 min-h-screen place-items-center">
          <div className="w-52">
            <img src={steamMomo} alt="" />
            <span
              className="rounded-tl-lg
              rounded-br-lg px-1
              bg-orange-600 relative bottom-14 text-white left-20"
            >
              New
            </span>
            <h1>Buff Steam Momo</h1>
            रु <span className="text-orange-500 font-bold"> 200</span> <br />
            <span className="">
              (Freshly Steamed Buff Momos made from whole wheat and kneaded with
              beta Carotene Rich Vegetable Juice)
            </span>
          </div>
          <div className="w-52">
            {" "}
            <img src={cMomo} alt="" />
            <span
              className="rounded-tl-lg
              rounded-br-lg px-1
              bg-sky-600 relative bottom-14 text-white left-20"
            >
              Popular
            </span>
            <h1>Buff C. Momo</h1>
            रु <span className="text-orange-500 font-bold"> 200</span> <br />
            <span className="">
              (Freshly Steamed Buff Momos made from whole wheat and kneaded with
              beta Carotene Rich Vegetable Juice)
            </span>
          </div>
          <div className="w-52">
            {" "}
            <img src={steamMomo} alt="" />
            <h1>Buff Steam Momo</h1>
            रु <span className="text-orange-500 font-bold"> 200</span> <br />
            <span className="">
              (Freshly Steamed Buff Momos made from whole wheat and kneaded with
              beta Carotene Rich Vegetable Juice)
            </span>
          </div>
          <div className="w-52">
            {" "}
            <img src={steamMomo} alt="" />
            <span
              className="rounded-tl-lg
              rounded-br-lg px-1
              bg-red-600 relative bottom-14 text-white left-16"
            >
              Recommended
            </span>
            <h1>Buff Jhol Momo</h1>
            रु <span className="text-orange-500 font-bold"> 200</span> <br />
            <span className="">
              (Freshly Steamed Buff Momos made from whole wheat and kneaded with
              beta Carotene Rich Vegetable Juice)
            </span>
          </div>
        </div>
      </div>

      <footer className="flex p-10 m-auto justify-between">
              <div className="h-20 w-80 text-gray-500">
                <img src={momoLogo} className="h-10" alt="" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                voluptatibus iste maxime? Earum magnam doloribus quae, cum sit vero
                optio, natus eos sint, omnis in! Ea modi repellendus corporis qui.
              </div>
              <div>
                <h2 className="font-bold text-teal-700">momos</h2>
                <ul>
                  <li>About Us</li>
                  <li>Our Menu</li>
                  <li>Our Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
      
              <div>
                <h2 className="font-bold text-teal-700">Legals</h2>
                <ul>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Support</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold text-teal-700">Follow Us</h2>
                <ul className="text-3xl">
                  <li className="flex space-x-1">
                    <FaFacebook />
                    <FaLinkedin />
                    <AiFillTwitterCircle />
                  </li>
                  <li className="flex space-x-1">
                    <TiSocialYoutubeCircular />
                    <FaInstagram />
                    <FaTiktok />
                  </li>
                </ul>
              </div>
            </footer>{" "}
            <br />
            <br />
            <br />
            <br />
            <hr />
            <span className="mt-6 ml-96 text-gray-500">
              Copyright ©2023 Everest Momo pvt. Ltd. All Rights Reserved
            </span>
    </>
  );
}

export default OurMenu;
