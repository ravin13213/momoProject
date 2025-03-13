import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import circle from "../assets/circle.png";
import momoLogo from "../assets/momoLogo.png";
import momo from "../assets/momo.png";
import oneBg from "../assets/oneBg.png";
import thumbs from "../assets/thumbs.png";
import steamMomo from "../assets/steamMomo.png";
import fryMomo from "../assets/fryMomo.png";
import cMomo from "../assets/cMomo.png";
import chef from "../assets/chef.png";
import qualityfood from "../assets/qualityfood.png";
import party from "../assets/party.png";
import catering from "../assets/catering.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaPlay } from "react-icons/fa";
import woman from "../assets/woman.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { LuCircleArrowRight } from "react-icons/lu";


function Home() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProducts(response.recipes);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filterProduct = (pd) => {
    const filterItem = products.filter((item) => {
      return item.cuisine === pd;
    });
    setFilterProducts(filterItem);
  };

  useEffect(() => {
    filterProduct("Indian");
  }, [products]);

  return (
    <>
      <div className="flex justify-between">
        <div className="space-x-72 pt-20">
          <p className="relative left-72 text-gray-400">RESTAURANT</p>
          <h1 className="font-bold text-3xl">
            The {""}
            <span
              className="h-20 inline-block bg-contain text-white w-32 text-center bg-no-repeat"
              style={{
                backgroundImage: `url(${oneBg})`,
              }}
            >
              #One
            </span>
            <br />
            Momo <span className="text-orange-600">Restaurant</span>
          </h1>
          <p>
            More than <span className="text-orange-600">20+ varieties</span> of
            momo available for you
          </p>
          <button
            onClick={() => {
              navigate("/menu");
            }}
            className="bg-green-700 p-3 rounded-3xl text-white flex justify-center items-center gap-x-2"
          >
            Explore Food Menu
            <FaArrowRight />
          </button>
        </div>

        <div className="relative overflow-hidden w-[300px] flex justify-end">
          <img className="w-72 absolute top-20 right-10" src={momo} alt="" />
          <img className="h-[400px] -mt-5" src={circle} alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <img className="h-[400px]" src={thumbs} alt="" />
        </div>
        <div className="w-96 mt-20 ml-10">
          <h1 className="font-extrabold font-serif">
            Why customers <span>Love Us</span>
          </h1>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            quidem quisquam laboriosam aperiam maiores dignissimos repudiandae
            minus officia minima! Modi ipsam, perferendis cupiditate mollitia
            quaerat itaque ipsa nesciunt ratione sit!
          </p>
          <br />
          <button className="bg-green-600 rounded-3xl p-3 flex justify-center items-center gap-2">
            Explore Our Story <FaArrowRight />
          </button>
        </div>
      </div>
      <br /> <br />
      <div className="flex flex-col items-center py-22">
        <div className="flex justify-center">
          <p>
            <span className="flex justify-center text-2xl font-extrabold">
              Our <span className="text-orange-400">Most Popular </span>Recipes
            </span>
            <br />
            <span className="text-gray-400">
              Browse through a variety of recipes with fresh ingredients
              selected only from the best places
            </span>
          </p>
        </div>
        <div>
          <button
            className="border-1 p-1 rounded-2xl"
            onClick={() => {
              filterProduct("Indian");
            }}
          >
            Indian
          </button>
          <button
            onClick={() => {
              filterProduct("Brazilian");
            }}
            className="border-1 p-1 rounded-2xl"
          >
            Brazilian
          </button>
          <button
            onClick={() => {
              filterProduct("Italian");
            }}
            className="border-1 p-1 rounded-2xl"
          >
            Italian
          </button>
        </div>
        <div>
          {filterProducts.length > 0 ? (
            <div className="flex flex-wrap gap-5 shadow-2xl justify-center p-5 shadow-gray-500">
              {filterProducts.map((product) => {
                return (
                  <NavLink
                    to={`/productDescription/${product.id}`}
                    key={product.id}
                  >
                    <div className="shadow-2xl rounded-2xl shadow-gray-600">
                      <img
                        className="h-52 w-auto rounded-2xl"
                        src={product.image}
                        alt=""
                      />
                      <div className="pl-5 m-3">
                        <h1>{product.name}</h1>
                        <h1>Rs.{product.caloriesPerServing}</h1>
                        <h1>{product.rating}</h1>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          ) : (
            <div>Loading....</div>
          )}
        </div>
      </div>
      <div className="flex ml-64 space-x-44">
        <div>
          <img src={steamMomo} className="h-32" alt="" />
          Buff Momo <br /> 140
        </div>
        <div>
          <img src={fryMomo} className="h-32" alt="" />
          Fried Momo <br /> 200
        </div>
        <div>
          <img src={cMomo} className="h-32" alt="" />
          C. Momo <br />
          230
        </div>
      </div>
      <br />
      <br />
      <button className="text-white ml-[120] rounded-3xl p-3 relative left-[550px] flex justify-center items-center bg-green-700">
        Explore Our Menu <FaArrowRight />
      </button>
      <br />
      <br />
      <br />
      <section>
        <b className="flex justify-center text-2xl">
          <span className="text-orange-600">We Offer People </span> The Service
          They Want
        </b>
        <br />
        <div
          className="h-[400px] bg-center bg-contain text-white bg-no-repeat flex justify-center items-center flex-col"
          style={{
            backgroundImage: `url(${chef})`,
          }}
        >
          <b className="text-[30px]">Process behind the making</b>
          <br />

          <span>See how only chefs cook the best momos</span>
          <br />
          <button className="bg-green-700 flex justify-center items-center gap-4 text-white p-4 rounded-3xl">
            <FaPlay />
            watch the video
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex space-x-7 mt-32 m-auto">
            <div>
              <img src={qualityfood} className="size-24" alt="" />
              <b>Quality Food</b>
              <br />
              Only the best food with top quality <br />
              products and ingredients
            </div>
            <div>
              <img src={party} className="size-24" alt="" />
              <b>Private Party</b>
              <br />
              Get the best food for all your private <br />
              parties and gatherings
            </div>
            <div>
              <img src={catering} className="size-24" alt="" />
              <b>Catering</b>
              <br />
              Get the best food for any occasions <br />
              and gatherings
            </div>
          </div>
          <button className="bg-green-700 p-3 mt-6 justify-center text-white rounded-3xl text-center flex row-auto gap-3">
            Explore Our Services <FaArrowRight />
          </button>{" "}
        </div>
      </section>
      <section className="flex justify-around mt-20">
        <div className="mt-16">
          <b>
            200+ <span className="text-orange-500">Happy Customers</span>
            <br />
            <span className="text-cyan-700">
              What our customers say about us
            </span>
          </b>
          <br /> <br />
          <span></span>
          <i>
            "Only the best momo you can find in the market. <br />
            Different Varieties of momo to choose from. Will be visiting again
            soon."
          </i>
          <br />
          <br />
          <b>Livia Dias</b>
          <span className="flex mt-9 gap-5">
            {" "}
            <FaRegArrowAltCircleLeft />
            <LuCircleArrowRight />
          </span>
        </div>

        <img className="h-96" src={woman} alt="" />
      </section>
      <section className="flex justify-center">
        <div className="mt-16">
          <div className="flex items-center flex-col">
            <h1 className="font-extrabold text-3xl">
              Get <span className="text-orange-500">in Touch </span>
            </h1>{" "}
            <br />
            <span className="font-bold text-green-700">
              Our Friendly team would love to hear from you
            </span>
          </div>
          <br /> <br />
          <div className="flex justify-evenly">
            <div className="bg-green-700 ml-24 p-7 text-white rounded-2xl">
              <span className="flex">
                <FaLocationDot />
                Our Address
              </span>
              <br />
              New Baneshwor, Kathmandu, Bagmati, <br /> Nepal <br />
              <br />
              <span className="flex items-center">
                <FaPhoneAlt />
                Our contacts
              </span>
              <div className="flex">
                <ul>
                  <li>Mobile</li>
                  <li className="italic">989343522</li>
                  <li>983424324</li>
                </ul>

                <ul className="ml-10">
                  <li>Landline</li>
                  <li className="italic">01-2343432</li>
                </ul>
              </div>
              <div>
                <span className="flex items-center">
                  <FaClock />
                  Our Service Time
                </span>

                <div className="flex">
                  <ul>
                    <li>MON-FRI</li>
                    <li className="italic">10am - 8pm</li>
                  </ul>

                  <ul>
                    <li>SAT-SUN</li>
                    <li className="italic">Closed</li>
                  </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <i> Get in touch in social networks</i>
                <span className="flex space-x-2">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTiktok />
                </span>
              </div>
            </div>

            <br />

            <br />

            {/* form  */}
            <div className="pl-44">
              <label htmlFor="">First Name</label> <br />{" "}
              <input className="border-2" type="text" /> <br />
              <label htmlFor="">Last Name</label> <br />{" "}
              <input className="border-2" type="text" /> <br />
              <label htmlFor="">Email</label> <br />{" "}
              <input className="border-2" type="email" />
              <br /> <label htmlFor="">What can we do for you?</label>
              <div>
                <select name="" className="border w-40" id="">
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <br />
              <label htmlFor="">Phone Number</label>
              <div className="flex items-center border rounded-lg px-3 py-2 w-96">
                <select id="country-code">
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+977" selected>
                    🇳🇵 +977
                  </option>
                </select>
                <input type="number" id="" />
              </div>
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                className="border"
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="Type your message here..."
              ></textarea>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[800px]  ml-80 mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2084971218806!2d85.32572037405325!3d27.710848125339606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19094f7a4347%3A0x4745fda4e995a630!2sEverest%20MoMo%20Center!5e0!3m2!1sen!2snp!4v1741793150116!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
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

export default Home;
