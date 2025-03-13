import nice from "../assets/nice.png"
import services from "../assets/services.png"
import services1 from "../assets/services1.png"
import { FaPlayCircle } from "react-icons/fa";
import party from "../assets/party.png"
import catering from "../assets/catering.png"
import qr from "../assets/qr.png"
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import momoLogo from "../assets/momoLogo.png";
function Service() {
  return (
    <>
      <section className="flex mt-16 justify-center gap-48">
        <div className="flex flex-col">
          <h1 className="font-allura text-4xl text-teal-700 mb-7">Our Services</h1>
          <br />
          <span className="text-gray-400">KNOWING OUR CUSTOMERS NEEDS</span>
          <span className="font-bold text-orange-600">
            We're more than just momos.
          </span>
          <span className="font-bold">
            We're a full-service dining experience
          </span>
        </div>
        <img className="h-96" src={nice} alt="" />
      </section>
      <section
        className="bg-cover flex mt-10 flex-col h-[500px] m-auto w-[1400px] text-white "
        style={{
          backgroundImage: `url(${services})`,
        }}
      >
        <div className="relative left-10 top-64">
          <span className="font-bold text-5xl">Dine With Us</span>
          <br />
          <span>
            Enjoy our momos in the confort of your own home with our delivery
            services
            <br />
            <button className="p-1 flex justify-center items-center bg-teal-600 rounded-xl  mt-7">
              <FaPlayCircle />
              Watch the Video
            </button>
          </span>
        </div>
      </section>
      <section className="flex p-36 space-x-12">
        <div className="mr-32">
          <img src={party} className="h-20 w-20" alt="" />
          <h1 className="text-xl font-bold">Private Party</h1>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            necessitatibus laboriosam similique maxime. Ex tempora libero quis,
            dolorum explicabo suscipit.
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-teal-600">
                Scan the QR code
              </span>
              <span>You can also check about the service</span>
            </div>
            <img src={qr} className="h-20" alt="" />
          </div>
        </div>
        <img src={services1} className="size-96" alt="" />
      </section>
      
        <section className="flex px-36 space-x-12">
          <img src={services1} className="size-96" alt="" />
          <div className="mr-32">
            <img src={catering} className="h-20 w-20" alt="" />
            <h1 className="text-xl font-bold">Catering</h1>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              necessitatibus laboriosam similique maxime. Ex tempora libero
              quis, dolorum explicabo suscipit.
            </div>

            <div className="flex">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-teal-600">
                  Scan the QR code
                </span>
                <span>You can also check about the service</span>
              </div>
              <img src={qr} className="h-20" alt="" />
            </div>
          </div>
        </section>
        <div className="flex flex-col p-12 rounded-2xl mx-36 bg-slate-300 mt-8 justify-center items-center">
          <h1 className="font-bold text-2xl ">Got any Queries?</h1>
          <span className="text-gray-500">If you have any queries, send us a message. Our Friendly team would love to hear from you</span>
          <button className="mt-4 bg-teal-700 text-white rounded-xl px-3 p-1">Get In Touch</button>
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

export default Service