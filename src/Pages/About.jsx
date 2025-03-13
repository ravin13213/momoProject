import cheffin from "../assets/cheffin.png";
import about from "../assets/about.png";
import { FaPlayCircle } from "react-icons/fa";
import about1 from "../assets/about1.png";
import steamMomo from "../assets/steamMomo.png";
import fryMomo from "../assets/fryMomo.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import chef from "../assets/chef.png";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";
import momoLogo from "../assets/momoLogo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";

function About() {
  return (
    <>
      <section className="flex mt-9 justify-around items-center">
        <div>
          <span className="font-allura text-5xl text-teal-700">About US</span>
          <div className="mt-24">
            <span className="text-sm text-gray-400">WE PRIDE OURSELF ON</span>
            <div className="font-bold text-2xl">
              <span className="text-orange-500">
                Our authentic momo recipes
              </span>
              <br />
              passed down through <br /> generations
            </div>
          </div>
        </div>
        <img src={cheffin} className="h-96" alt="Chef preparing momos" />
      </section>

      <div
        className="h-[400px] bg-center bg-cover text-white mt-3 bg-no-repeat flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="relative right-64 top-32">
          <span className="font-bold text-xl">Process behind the making</span>{" "}
          <br />
          <span>
            See how we make momos that you like from only the best ingredients
          </span>
          <button className="flex bg-teal-700 p-2 mt-3 rounded-xl">
            <span className="text-2xl">
              <FaPlayCircle />
            </span>
            Watch this video
          </button>
        </div>
      </div>

      <section className="mt-12 mx-auto w-[900px] relative p-6">
        <div className="flex space-x-20">
          <div>
            <h1 className="font-bold">
              Our momos are{" "}
              <span className="text-orange-500">
                made <br /> with love
              </span>
            </h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, reiciendis? Ratione neque vel error quisquam officia,
            distinctio, quasi quo culpa vitae hic corrupti rem fugit,
            consequatur possimus eaque pariatur illum.
          </div>
          <img className="h-72" src={about1} alt="Steamed momos" />
          <img
            className="h-32 absolute left-80 top-52"
            src={steamMomo}
            alt="Steamed momos close-up"
          />
        </div>

        {/* 2nd part/////////////////////////////////////// */}

        <div className="mt-12 flex space-x-20 relative">
          <img src={about2} className="h-72" alt="Momo ingredients" />
          <img
            src={fryMomo}
            className="h-36 absolute top-52 left-40"
            alt="Fried momos"
          />
          <div>
            <h1 className="font-bold">
              Taste the difference with <br />
              <span className="text-orange-500">our handcrafted momos</span>
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            dicta maxime aspernatur minima. Mollitia quibusdam beatae deleniti
            quam, laudantium similique quod temporibus voluptatem incidunt
            cupiditate.
          </div>
        </div>

        {/* //////////////////////// */}
        <div className="mt-12 relative flex">
          <div>
            <h1 className="font-bold text-2xl">
              Our momos are the <br />
              perfect{" "}
              <span className="text-orange-500"> blend of tradition</span>
              <br /> and <span className="text-orange-500">innovation</span>
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            esse ut itaque iste? Aut dicta, delectus officiis quasi eius earum,
            laudantium animi facere voluptatibus rem dolor eaque. Ut,
            praesentium eum!
          </div>
          <img
            src={about3}
            className=" absolute h-32 top-56 left-60"
            alt="Chef cooking"
          />
          <img
            src={chef}
            className="h-72 w-[450px]"
            alt="Chef preparing momos"
          />
        </div>
      </section>

      {/* Section 6: Taste the Difference */}
      <div className="relative flex mx-20 mt-12">
        <div
          className="bg-cover p-6 text-white justify-center items-center flex flex-col px-28"
          style={{ backgroundImage: `url(${about4})` }}
        >
          <br />
          Momo is not just about sustenance, it's about bringing people together
          and creating memories. At our restaurant, we strive to create a warm
          and inviting atmosphere where our guests can enjoy delicious momo,
          great company, and unforgettable experiences
          <br /> <br />
          <b className="font-bold text-xl mr-72">Marcus Schleifer</b>
          <b className="mr-72"> CEO</b>
        </div>
        <div>
          <img src={about5} className="w-[1400px]" alt="" />
        </div>
      </div>

      <section className=" mt-10 ">
        <div className="flex flex-col mb-6 justify-center items-center">
          <h1 className="text-2xlf font-bold">
            Meet The <span className="text-orange-600">Team</span>
          </h1>
          <span className="bold text-teal-700 contain">
            Our talanted team members who delivers only the best results
          </span>
        </div>
        <div className="flex justify-center w-72 m-auto gap-7">
          <img src={chef1} alt="" />
          <img src={chef2} alt="" />
          <img src={chef3} alt="" />
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

export default About;
