import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProducts(response.recipes);
  };
  useEffect(() => {
    getProduct();
  }, []);

  
  return (
    <div>
      <div>
        {products.length > 0 ? (
          <div className="grid grid-cols-4 p-9 gap-5 shadow-2xl justify-center shadow-gray-400 ">
            {products.map((product) => {
              return (
                <NavLink
                  to={`productDescription/${product.id} `}
                  key={product.id}
                >
                  <div className="shadow-2xl rounded-xl shadow-gray-500">
                    <img
                      className="h-52 w-50 rounded-xl m-auto pt-3 "
                      src={product.image}
                      alt=""
                    />
                    <div className="ml-6">
                      <h1>{product.name}</h1>
                      <h1>Rs.{product.caloriePerServing}</h1>
                      <h1>{product.rating}</h1>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        ) : (
          <div>Loading.....</div>
        )}
      </div>
    </div>
  );



}
export default Menu;
