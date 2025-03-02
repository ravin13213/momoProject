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
          <div className="flex flex-wrap gap-5 shadow-2xl justify-center p-5 shadow-gray-400 ">
            {products.map((product) => {
              return (
                <NavLink
                  to={`productDescription/${product.id} `}
                  key={product.id}
                >
                  <div className="shadow-2xl rounded-2xl shadow-gray-500">
                    <img
                      className="h-52 w-auto rounded-2xl"
                      src={product.image}
                      alt=""
                    />
                    <div>
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
