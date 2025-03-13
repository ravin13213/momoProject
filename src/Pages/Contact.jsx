import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import momoLogo from "../assets/momoLogo.png"

function Contact() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <h1 className="font-allura text-5xl text-teal-700">Out Contact</h1>
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl text-gray-500">GET IN TOUCH</span> <br />
          <span className="font-bold">
            <span className="text-orange-600">Our Friendly Team </span>
            would love to hear from you
          </span>
        </div>
        <div className="flex space-x-10 mt-8 px-96">
          <div className="shadow-xl p-5">
            {" "}
            <span className="flex w-52">
              <span className="text-orange-600">
                <FaLocationDot />
              </span>
              Location
            </span>
            <br />
            New Baneshwor, -4123 <br />
            Kathmandu, Bagmati, Nepal
          </div>
          <div className="shadow-xl p-5">
            {" "}
            <span className="flex w-52 items-center">
              <span className="text-orange-600">
                <FaPhoneAlt />
              </span>
              Phone
            </span>
            <div className="flex  flex-col">
              <ul className="flex gap-16">
                <li className="text-teal-700">Mobile:</li>
                <ul>
                  <li className="italic">989343522</li>
                  <li className="italic">983424324</li>{" "}
                </ul>
              </ul>

              <ul className="flex gap-16">
                <li className="text-teal-700">Landline</li>
                <li className="italic">01-323243</li>
              </ul>
            </div>
          </div>
          <div className="shadow-xl p-5">
            <span className="flex flex-row w-40 justify-center items-center ">
              <span className="text-orange-600">
                <FaClock />
              </span>
              Our Service Time
            </span>
            <div className=" gap-9">
              <ul className="flex gap-3">
                <li className="text-teal-700">MON-FRI</li>
                <li className="italic">8am - 8pm</li>
              </ul>

              <ul className="flex gap-9">
                <li className="text-teal-700">SAT-SUN</li>
                <li className="italic">Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex mt-10">
        <div>
          {" "}
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
        <div className="ml-52">
          <div className="flex justify-around">
            <div>
              {" "}
              <label htmlFor="">First Name</label> <br />
              <input className="border-2" type="text" /> <br />
            </div>
            <div>
              {" "}
              <label htmlFor="">Last Name</label> <br />
              <input className="border-2" type="text" />
            </div>
          </div>
          <br />
          <label htmlFor="" for="email">
            Email
          </label>{" "}
          <br />
          <input className="border-2" id="email" type="email" />
          <br />{" "}
          <label htmlFor="" for="do">
            What can we do for you?
          </label>
          <div>
            <select name="" className="border w-40" id="do">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <br />
          <div className="flex flex-col  w-96">
            <label htmlFor="" for="country-code">
              Phone Number
            </label>
            <div>
              <select className="border-2 " id="country-code">
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+977" id="" selected>
                  🇳🇵 +977
                </option>
              </select>
              <input
                type="text"
                className="border-2"
                name=""
                id=""
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" for="msg">
              Message
            </label>
            <br />
            <textarea
              className="border-2"
              id="msg"
              name="message"
              rows="4"
              cols="50"
              placeholder="Type your message here..."
            ></textarea>{" "}
            <br />
            <button className="p-1 bg-cyan-700 rounded-2xl w-28">send</button>
          </div>
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

export default Contact;
