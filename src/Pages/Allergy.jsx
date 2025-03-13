import nice from "../assets/nice.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import momoLogo from "../assets/momoLogo.png";
import qr from "../assets/qr.png"
import { FaMobileAlt } from "react-icons/fa";


function Allergy() {
  return (
    <div>
      <section className="flex mt-16 justify-center gap-48">
        <div className="flex flex-col">
          <h1 className="font-allura text-4xl text-teal-700 mb-7">
            Allergy Advices
          </h1>
          <br />
          <span className="text-gray-400">AT OUR RESTAURANT</span>
          <span className="font-bold">
            {" "}
            We use only the freshest and highest <br /> quality ingredients in
            all our dishes,
          </span>
          <span className="font-bold text-orange-600">
            and offer transparency in our ingredient <br />
            labeling.
          </span>
        </div>
        <img className="h-96" src={nice} alt="" />
      </section>

      {/* //////////////////////// */}

      <div>
        <section className="flex flex-col gap-10  relative items-center">
          <img src={bg1} className="h-60 relative top-36 right-48" alt="" />
          <img
            className="h-[500px] w-[1500px] relative top-48"
            src={bg2}
            alt=""
          />
          <img className="h-44 relative top-80 left-64" src={bg3} alt="" />
          <div className="absolute top-1">
            <h1 className="font-extrabold  mt-11 w-40 flex mb-6 text-3xl">
              <img src={left} className="object-contain" alt="" />
              <div>
                <span className="text-orange-500 font-chela mr-2">
                  Ingredient's
                </span>
                Used
              </div>
              <img src={right} className="object-contain" alt="" />
            </h1>

            <div className="gap-10 ">
              <div className="p-8 bg-white border-2 w-[600px] border-teal-700 rounded-2xl mb-10">
                <h1 className="font-bold">For the Dough</h1>
                <ul>
                  <li>120 gms refined flour</li> <hr />
                  <li>1/4 tsp baking powder</li> <hr />
                  <li>1/2 tsp salt water (for kneading)</li> <hr />
                </ul>
              </div>

              <div>
                <div className="p-8  bg-white border-2 w-[600px] border-teal-700 rounded-2xl">
                  <h1 className="font-bold">For the Chicken Filling</h1>
                  <ul>
                    <li>1 cup chicken (minced)</li>
                    <hr />
                    <li>1/2 cup onions, finely chopped</li>
                    <hr />
                    <li>1/4 tsp black pepper powder</li>
                    <hr />
                    <li>1 tbsp oilhr </li>
                    <hr />
                    <li>1/2 tsp garlic paste</li>
                    <hr />
                    <li>1/2 tsp soya sauce</li>
                    <hr />
                    <li>Salt</li>
                    <hr />
                    <li>1/4 tsp vinegar</li>
                    <hr />
                  </ul>
                </div>

                <div className="p-8 bg-white border-2  border-teal-700 mb-20 mt-7 gap-10 rounded-2xl">
                  <h1 className="font-bold">For the Vegetarian Filling:</h1>
                  <ul>
                    <li>1 cup cabbage and carrots, grated</li> <hr />
                    <li>2 tbsp onions, finely chopped</li>
                    <hr />
                    <li>1/2 tsp garlic, finely chopped</li>
                    <hr />
                    <li>1 tbsp oil</li>
                    <hr />
                    <li>1/4 tsp vinegar</li>
                    <hr />
                    <li>1/2 tsp soya sauce</li>
                    <hr />
                    <li>to taste salt</li>
                    <hr />
                    <li>to taste pepper</li>
                    <hr />
                    <li>1 tbsp cornflour</li>
                    <hr />
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 bg-white w-[600px] border-teal-700 rounded-2xl">
              <h1 className="font-bold">For Chilli Sauce</h1>
              <ul>
                <li>25 gram garlic peeled</li>
                <hr />
                <li>6 gms whole red chillies</li>
                <hr />
                <li>3 tbsp vinegar</li>
                <hr />
                <li>3 tbsp oil</li>
                <hr />
                <li>to taste salt</li>
                <hr />
                <li>to taste sugar</li>
                <hr />
              </ul>
            </div>
          </div>
        </section>
      </div>
      <br />
      <section className="mt-96 ">
        <h1 className="font-extrabold ml-[350px]   mt-11 w-40 flex  mb-6 text-3xl">
          <img src={left} className="object-contain" alt="" />
          <div>
            <span className="text-orange-500 font-chela mr-2">
              Ingredient's
            </span>
            Used
          </div>
          <img src={right} className="object-contain" alt="" />
        </h1>
        <div className="mx-44">
          Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit
          in gravida. Nisl facilisis luctus sit porttitor placerat purus
          tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In
          viverra diam dis montes orci congue vulputate magna ullamcorper.
          Semper tellus ipsum felis maecenas ultrices turpis amet euismod
          malesuada. Amet sed neque vitae malesuada quis sed urna. Feugiat orci
          feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor
          varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et
          sed. Donec auctor tristique quam morbi pellentesque et. Scelerisque
          dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam
          vulputate quis ut mi placerat auctor. Ipsum massa suspendisse netus
          mollis interdum. Augue leo eget ut vitae maecenas ac. Metus massa nunc
          tristique donec dignissim aenean congue justo et. Parturient elit
          adipiscing non vitae mattis. Congue senectus urna cursus nisi nisl
          nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo
          enim volutpat. Aliquet vitae condimentum bibendum ullamcorper vel
          cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc
          amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices.
          Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis
          purus turpis elit risus. Sed elit ornare senectus dignissim diam dolor
          sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna
          volutpat ut potenti ut mus orci neque sem. Mattis amet at amet
          faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia.
          Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus
          praesent vitae dolor cursus fringilla hac facilisis pellentesque.
          Elementum lacus varius et neque amet aliquam donec sed. Ultrices
          euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit
          arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui
          tortor. Viverra habitant et consequat vitae elit aliquet iaculis in
          tristique. Quam ipsum viverra ac laoreet platea in praesent. Mattis
          molestie arcu nulla convallis interdum proin dui ut porta. Amet
          potenti praesent pulvinar scelerisque vitae habitant eget. Senectus
          hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra
          nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum
          ultrices elementum feugiat erat suspendisse mi fermentum magna
          suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At
          blandit vulputate morbi tortor amet. Hac nec gravida tempor ac.
          Senectus nunc libero scelerisque quisque. Risus condimentum mattis
          massa integer.
        </div>
      </section>
      <section
               className="flex flex-col mt-10 justify-center text-center">
                  <h1 className="font-extrabold text-teal-700">Scan the QR code</h1>
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
    </div>
  );
}

export default Allergy;
