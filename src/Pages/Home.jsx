import { useNavigate } from "react-router-dom";
import circle from "../assets/circle.png";
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

import { FaPlay } from "react-icons/fa";
import woman from "../assets/woman.png"

import { FaArrowRight } from "react-icons/fa6";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex  justify-between ">
        <div className=" space-x-72 pt-20 ">
          <p className="relative left-72 text-gray-400 ">RESTAURANT</p>
          <h1 className="front-bold text-3xl">
            The {""}
            <span
              className="h-20 inline-block bg-contain text-white w-32 text-center  bg-no-repeat"
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
            More than <span className="text-orange-600"> 20+ varieties</span> of
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
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="">
          <img className=" h-[400px]" src={thumbs} alt="" />
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
              Browse through a varieties of recipies with fresh ingredients
              selected only from the best places
            </span>
          </p>
        </div>

        <div className="flex space-x-44">
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

        <button className="text-white rounded-3xl p-3 flex justify-center items-center  bg-green-700">
          Explore Our Menu <FaArrowRight />
        </button>
      </div>
      <br />
      <br />
      <br />
      <section className=" ">
        <b className="flex justify-center text-2xl">
          <span className="text-orange-600">We Offer People </span> The Service
          They Want
        </b>
        <br />
        <div
          className=" h-[400px] bg-center bg-contain text-white
          bg-no-repeat flex justify-center items-center flex-col "
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
          <div className=" flex space-x-7 mt-32 m-auto ">
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
        <div className="mt-16 ">
          <b>
            
            200+ <span className="text-orange-500">Happy Customers</span>
            <br />
            <span className="text-cyan-700">What our customers say about us</span>
          </b>
          <br /> <br />
          <span></span>
          <i>
            "Only the best momo you can find in the market. <br />
            Different Varieties of momo to choose from. Will be visiting again
            soon."
          </i><br /><br />
          <b>Livia Dias</b>
          <span></span>
        </div>

        <img className="h-96" src={woman} alt="" />
      </section>
    </div>
  );
}

export default Home;
