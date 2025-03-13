import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { MdDelete } from "react-icons/md";
import { GoArrowUp } from "react-icons/go";
import { VscArrowDown } from "react-icons/vsc";
import { NavLink, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);
  console.log(state.cartItem);
  const totalPrice = state.cartItem.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);

  const totalItem = state?.cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <div>
      <div>
        {state.cartItem.length > 0 ? (
          <div className="flex">
            <div>
              {state.cartItem.map((cart) => {
                return (
                  <div key={cart.id} className="flex">
                    <div className="  w-[850px] p-2 justify-between shadow-2xl  shadow-gray-600  rounded-2xl m-5  flex ">
                      <div className="  flex  ">
                        <img
                          className="h-32  rounded-2xl"
                          src={cart.image}
                          alt=""
                        />
                        <div className=" px-3 ml-10   w-80  ">
                          <h1>{cart.name}</h1>
                        </div>
                      </div>
                      <div className="">
                        <h1>Rs.{cart.caloriesPerServing}</h1>
                        <button
                          onClick={() => {
                            dispatch({
                              type: "RemoveFromCart",
                              payload: { id: cart.id },
                            });
                          }}
                        >
                          <MdDelete size={32} color="red" />
                        </button>
                      </div>

                      <div className=" space-x-0.5  flex ">
                        <button
                          onClick={() => {
                            dispatch({
                              type: "Decrement",
                              payload: { id: cart.id },
                            });
                          }}
                          className="bg-gray-500 h-5 w-6 flex  justify-center items-center  hover:bg-gray-700  "
                        >
                          <VscArrowDown color="white" />
                        </button>
                        <span className="h-6 text-center w-8  hover:border-1  inline-block    ">
                          {cart.qty}
                        </span>
                        <button
                          onClick={() => {
                            dispatch({
                              type: "Increment",
                              payload: { id: cart.id },
                            });
                          }}
                          className="bg-gray-500 h-5 w-6 flex  justify-center items-center  hover:bg-gray-700"
                        >
                          <GoArrowUp color="white" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="  space-y-3  h-72  p-5  shadow-2xl shadow-gray-800  m-4  ml-28 ">
              <h1 className="text-3xl">Order Summary</h1>
              <p>
                Total : <span className="text-red-500">Rs.{totalPrice}</span>{" "}
              </p>
              <p>
                Total Item : <span className="text-red-500">{totalItem}</span>{" "}
              </p>
              <button
                onClick={() => {
                  navigate("/payment", {
                    state: { totalPrice: totalPrice, totalItem: totalItem },
                  });
                }}
                className=" w-52 bg-orange-600  p-3 text-white"
              >
                Procced to check Out ({totalItem})
              </button>

              <button
                onClick={() => {
                  dispatch({ type: "ClearCart" });
                }}
                className="  bg-red-600 w-52  p-3 text-white"
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="  w-[500px]  mt-5 m-auto flex flex-col  justify-center items-center ">
              <img
                className="w-96"
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png?f=webp"
                alt=""
              />
              <h1 className=" text-2xl">
                Cart Is Empty
                <NavLink
                  to="/menu"
                  className="text-center  font-bold text-2xl underline text-red-600  "
                >
                  Show Now
                </NavLink>
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
