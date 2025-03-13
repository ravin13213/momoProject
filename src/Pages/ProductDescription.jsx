import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";

function ProductDescription() {
  const navigate = useNavigate()
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const [product, setProduct] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstruction] = useState([]);
  const getProduct = async () => {
    let response = await fetch(`https://dummyjson.com/recipes/${id}`);
    response = await response.json();
    // console.log(response);
    // console.log(ingredients.product)
    // console.log(instructions.product)
    setProduct(response);
    setIngredients(response.ingredients);
    setInstruction(response.instructions);
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <div>
      {/* ProductDescription */}
      {product ? (
        <div className=" w-[1000px] border-2 flex shadow-xl shadow-gray-400 m-auto rounded-xl">
          <div>
            <img className="h-72" src={product.image} alt="" />
          </div>
          <div className=" space-y-5 ml-5 p-2 ">
            <h1 className="text-2xl">{product.name}</h1>
            <p className="text-orange-300 font-bold">
              Rs.{product.caloriesPerServing}
            </p>
            <p>{product.rating}</p>
            <div className="space-x-3">
              <button onClick={()=>{
                navigate("payment", {
                  state:{
                    toatlPrice: product.caloriesPerServing,
                    totalItem:1
                  }
              })
              }}
              className="bg-blue-500 text-white p-2">Buy Now</button>
              <button
                onClick={() => {
                  dispatch({ type: "AddToCart", payload: product });
                }}
                className="bg-orange-300 text-white p-2"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Product Not Found </div>
      )}

      {/* instruction? */}

      <div className="flex mt-7 justify-around">
        <div>
          <h1>Instructions</h1>

          {instructions.length > 0 ? (
            <div>
              {instructions.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item}</li>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Loading.....</div>
          )}
        </div>

        <div>
          <h1>Ingredients</h1>

          {ingredients.length > 0 ? (
            <div>
              {ingredients.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item}</li>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Loading.....</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
